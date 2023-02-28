import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const fn = (req: NextApiRequest, res: NextApiResponse) => {
  axios.get(`${process.env.PROVIDER_PAYMENT_PAGARME_URL}transactions/${req.body.transactionId}?api_key=${process.env.PROVIDER_PAYMENT_PAGARME_API_TOKEN}`)
  .then(function (response) {
    res.status(200).json(response.data)
  })
  .catch(function (error) {
    res.status(400).json(error)
  });
}

export default fn;