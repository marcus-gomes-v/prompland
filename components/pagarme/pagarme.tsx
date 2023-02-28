import { iTeam, iTransaction, iUser } from "../../typings"
import Script from 'next/script'
import fetchJson from "../../lib/fetchJson";
import { useEffect, useState } from "react";
import firebase from 'firebase'
import 'firebase/firestore'
import LoadingModal from "../modals/loading-modal";
import Swal from 'sweetalert2'


declare var PagarMeCheckout: any;

export default function Pagarme({ team, user, handleQrCode }: { team: iTeam | undefined, user: iUser, handleQrCode: any }) {

  


  const [openModalLoading, setOpenModalLoading] = useState(false)

  const handleModalLoading = () => {
    openModalLoading ? setOpenModalLoading(false) : setOpenModalLoading(true)
  }

  const pagarmeEncryptionKey = window.location.hostname == 'localhost' ? 'ek_test_lF0W00Ds6hN45ZwAdQZQy2VZXSHHNU' : 'ek_live_MSc1djH6K72YHrVQW4guhnFm8wIugu';

  const register = async (team: iTeam, transaction: iTransaction) => {
    try { 

      if(transaction.status == 'paid'){
        Swal.fire({
          title: 'Pagamento processado com sucesso.',
          icon: 'success'
        })
      }
     
      const oTransaction = await firebase
        .firestore()
        .collection("transactions")
        .add({ 
          uid: firebase.auth().currentUser?.uid,
          month: new Date().getUTCMonth(),
          time_stamp: firebase.firestore.Timestamp.fromDate(new Date()),
          data: transaction, 
          team: team, 
        })

      if (transaction.payment_method == 'pix') {
        handleQrCode(transaction, oTransaction.id);
      }

      let opdateObject: any = {}

      if (typeof (user.address) == 'undefined'){
        opdateObject.address = transaction.billing.address
      }

      if (typeof (user.documents) == 'undefined') {
        opdateObject.documents = transaction.customer.documents
      }

      if (typeof (user.phone_numbers) == 'undefined') {
        opdateObject.phone_numbers = transaction.customer.phone_numbers
      }

      if (typeof (user.fullname) == 'undefined') {
        opdateObject.fullname = transaction.customer.name
      }

      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser?.uid)
        .update(opdateObject)

      setOpenModalLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (team) {
      const iPrices = +`${team.team_data.price}00`

      const aItems: any = [];
      const aPixItems: any = [];
      const oProductTemplate = {
        id: team.id,
        title: 'Aulas',
        unit_price: iPrices,
        quantity: 1,
        tangible: 'false'
      }
      const iAmountPrice: Number = iPrices;
      aItems.push(oProductTemplate)
      aPixItems.push({ name: oProductTemplate.title, value: `${oProductTemplate.unit_price}` })

      setOpenModalLoading(true)

      let checkout = new PagarMeCheckout.Checkout({
        encryption_key: pagarmeEncryptionKey,
        success: async function (data: any) {
          const oTransaction: iTransaction = await fetchJson('/api/transaction', {
            method: 'POST',
            body: JSON.stringify({ ...data, price: iPrices, items: aItems }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          register(team, oTransaction)
        },
        error: function (err: any) {
          console.log(err);
          setOpenModalLoading(false)
        },
        close: function () {
          console.log("The modal has been closed.");
          setOpenModalLoading(false)
        }
      })

      const date = new Date();
      date.setDate(date.getDate() + 3);
      const pixExpirationDate = `${date.getFullYear()}-${(`0` + (date.getMonth() + 1)).slice(-2)}-${(`0` + date.getDate()).slice(-2)}`;


      //***** CONSUMER */

      let pagarmeTemp;

      if(typeof (user.address) != 'undefined'
        && typeof (user.documents) != 'undefined'
        &&  typeof (user.phone_numbers) != 'undefined'
        && typeof (user.fullname) != 'undefined') {

        let oUser = {
          name: user.fullname,
          email: user.email,
          documents: [{
            type: user.documents?.[0].type,
            number: user.documents?.[0].number
          }],
          address_state: user.address?.state,
          address_city: user.address?.city,
          address_neighborhood: user.address?.neighborhood,
          address_complement: user.address?.complementary,
          address: user.address?.street,
          address_number: user.address?.street,
          postal_code: user.address?.zipcode,
          mobile: user.phone_numbers,
        }

        const aPhoneNumbers = oUser.mobile;

        const customerData = {
          name: oUser.name,
          email: oUser.email,
          country: "br",
          external_id: oUser.email,
          documents: oUser.documents,
          type: "individual",
          phone_numbers: aPhoneNumbers
        };

        const billingData = {
          name: oUser.name,
          address: {
            country: "br",
            state: oUser.address_state,
            city: oUser.address_city,
            neighborhood: oUser.address_neighborhood,
            complementary: oUser.address_complement,
            street: oUser.address,
            street_number: oUser.address_number,
            zipcode: oUser.postal_code,
          }
        }

        pagarmeTemp = {
          amount: iAmountPrice,
          customerData: 'false',
          createToken: 'true',
          paymentMethods: 'credit_card,pix',
          pix_expiration_date: pixExpirationDate,
          pix_additional_fields: aPixItems,
          items: aItems,
          customer: customerData,
          billing: billingData
        }
      } else {
        pagarmeTemp = {
          amount: iAmountPrice,
          customerData: 'true',
          createToken: 'true',
          paymentMethods: 'credit_card,pix',
          pix_expiration_date: pixExpirationDate,
          pix_additional_fields: aPixItems,
          items: aItems,
        }
      }

      checkout.open(pagarmeTemp);

     
    }
  }, [team]);
  
  return (
    <>
      <LoadingModal opened={openModalLoading} setOpened={setOpenModalLoading} />
      <Script src="https://assets.pagar.me/checkout/1.1.0/checkout.js" />
    </>
  )
}
