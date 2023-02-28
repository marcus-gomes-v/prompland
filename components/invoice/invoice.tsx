import { CreditCardIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import countries from "../../lib/countries";
import paymentType from "../../lib/payment-type";
import { iFirestoreTransaction } from "../../typings";
import Price from "../utils/Price";

export default function Invoice({transaction}: {transaction: iFirestoreTransaction}) {
    return (
        <div className="">
            <header className="flex flex-col items-center px-8 pt-20 text-lg text-center bg-white border-t-8 border-indigo-700 md:block lg:block xl:block print:block md:items-start lg:items-start xl:items-start print:items-start md:text-left lg:text-left xl:text-left print:text-left print:pt-8 print:px-2 md:relative lg:relative xl:relative print:relative  rounded-sm">
                <div className="w-3/6 h-auto md:w-1/4 lg:ml-12 xl:ml-12 print:px-0 print:py-0">
                    <Image
                        width={200}
                        height={100}
                        className="w-auto"
                        src="/images/logos/logo.svg"
                        alt="Your Company"
                    />
                </div>
                <div className="flex flex-row mt-12 mb-2 ml-0 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl print:text-2xl lg:ml-12 xl:ml-12">
                    INVOICE
                    <div className="text-indigo-700">
                        <span className="mr-4 text-sm">■ </span> #
                    </div>
                    <span id="invoice_id" className="text-gray-500">{transaction.data.tid}</span>
                </div>
                <div className="flex flex-col lg:ml-12 xl:ml-12 print:text-sm">
                    <span>Data de Emissão: {new Date(transaction.data.date_created).toLocaleDateString('pt-BR')}</span>
                    <span>Data de Pagamento: {new Date(transaction.data.date_updated).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="px-8 py-2 mt-16 text-3xl font-bold text-green-700 border-4 border-green-700 border-dotted md:absolute md:right-0 md:top-0 md:mr-12 lg:absolute lg:right-0 lg:top-0 xl:absolute xl:right-0 xl:top-0 print:absolute print:right-0 print:top-0 lg:mr-20 xl:mr-20 print:mr-2 print:mt-8">PAGO</div>
                <div className="flex flex-col m-12 text-center lg:m-12 md:flex-none md:text-left md:relative md:m-0 md:mt-16 lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative print:flex-none print:text-left print:relative print:m-0 print:mt-6 print:text-sm">
                    <span className="font-extrabold md:hidden lg:hidden xl:hidden print:hidden">Cliente</span>
                    <div className="flex flex-col">
                        <span id="company-name" className="font-medium">{transaction.data.customer.name}</span>
                        <span id="company-country"><span className="flag-icon flag-icon-us"></span> {countries[transaction.data.billing.address.country.toUpperCase()]}</span>
                        <div className="flex-row">
                            <span id="c-city">{transaction.data.billing.address.city}</span>,
                            <span id="c-postal">{transaction.data.billing.address.state} </span>
                        </div>
                        <span id="company-address">{transaction.data.billing.address.street}.</span>
                        <span id="company-phone">{transaction.data.customer.phone_numbers[0]}</span>
                        <span id="company-mail">{transaction.data.customer.email}</span>
                    </div>
                    <span className="mt-12 font-extrabold md:hidden lg:hidden xl:hidden print:hidden">Empresa</span>
                    <div className="flex flex-col md:absolute md:right-0 md:text-right lg:absolute lg:right-0 lg:text-right print:absolute print:right-0 print:text-right">
                        <span id="person-name" className="font-medium">Beach Pass</span>
                        <span id="person-country"><span className="flag-icon flag-icon-hu"></span> Brasil</span>
                        <div className="flex-row">
                            <span id="p-city">Santos</span>,
                            <span id="p-postal">SP</span>
                        </div>
                        <span id="person-address">Rua Barão de Penedo.</span>
                        <span id="person-phone">+5513936180082</span>
                        <span id="person-mail">finance@beachpass.com</span>
                    </div>
                </div>
            </header>
            <hr className="border-gray-300 md:mt-8 print:hidden" />
            <section>
                <div id="content" className="flex justify-center md:p-8 lg:p-20 xl:p-20 print:p-2">
                    <table className="w-full text-left table-auto print:text-sm" id="table-items">
                        <thead>
                            <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black">
                                <th className="px-4 py-2">Item</th>
                                <th className="px-4 py-2 text-right">Preço Unitário</th>
                                <th className="px-4 py-2 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">Mensalidade de turma: {transaction.team.team_name}</td>
                                <td className="px-4 py-2 text-right border tabular-nums slashed-zero"><Price value={transaction.data.items[0].unit_price / 100} /></td>
                                <td className="px-4 py-2 text-right border tabular-nums slashed-zero"><Price value={(transaction.data.items[0].unit_price * transaction.data.items[0].quantity ) / 100} /></td>
                            </tr>
                            <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black" >
                                <td className="invisible"></td>
                                <td className="px-4 py-2 text-right border"><span className="flag-icon flag-icon-hu print:hidden"></span> Discount</td>
                                <td className="px-4 py-2 text-right border tabular-nums slashed-zero">{transaction.data.discount ? transaction.data.discount : '-' }</td>
                            </tr>
                            <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black" >
                                <td className="invisible"></td>
                                <td className="px-4 py-2 font-extrabold text-right border">Total</td>
                                <td className="px-4 py-2 text-right border tabular-nums slashed-zero"><Price value={transaction.data.amount / 100} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <div className="mt-20 mb-20 print:mb-2 print:mt-2">
                    <h2 className="text-xl font-semibold text-center print:text-sm">Histórico de Pagamento</h2>
                    <div className="flex flex-col items-center text-center print:text-sm">
                        <p className="font-medium">  {new Date(transaction.data.date_updated).toLocaleDateString('pt-BR')} {new Date(transaction.data.date_updated).toLocaleTimeString('pt-BR')} 
                            <span className="font-light"> - Pagamento em {paymentType[transaction.data.payment_method]}: <Price value={transaction.data.amount / 100} /> {transaction.data.payment_method == 'credit_card' ? `(${transaction.data.card_brand.toUpperCase()} XXXX-XXXX-XXXX-${transaction.data.card_last_digits})` : ''} </span></p>
                    </div>
                </div>
            </section>
            <footer className="flex flex-col items-center justify-center pb-20 leading-loose text-white bg-gray-700 print:bg-white print:pb-0">
                <span className="mt-4 text-xs print:mt-0">Comprovante gerado {new Date(transaction.data.date_updated).toLocaleDateString('pt-BR')} {new Date(transaction.data.date_updated).toLocaleTimeString('pt-BR')} </span>
                <span className="mt-4 text-base print:text-xs">© 2023 Beach Pass.  All rights reserved.</span>
                <span className="print:text-xs">BR - Santos, SP 03179070 Barão de Penedo</span>
            </footer>
        </div>
    )
}
