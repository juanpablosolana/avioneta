
import { getSession } from 'next-auth'

async function Intent (req, res) {
  if (!session) {
    res.status(401).send('Unauthorized')
    return
  }

  const { priceId } = req.body

  res.send(priceId)
}

export default Intent

// Path: src/pages/api/checkout.js
// Compare this snippet from src/pages/api/intent.js:
// import { NextApiRequest, NextApiResponse } from 'next'
// import Stripe from 'stripe'
// import { getSession } from 'next-auth/client'
//
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2020-08-27'
// })
//
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const session = await getSession({ req })
//
//   if (!session) {
//     res.status(401).send('Unauthorized')
//     return
//   }
//
//   const { priceId } = req.body
//
//   const subscription = await stripe.subscriptions.create({
//     customer: session.user.stripe_customer_id,
//     items: [{ price: priceId }],
//     expand: ['latest_invoice.payment_intent']
//   })
//
//   res.send(subscription)
// }
