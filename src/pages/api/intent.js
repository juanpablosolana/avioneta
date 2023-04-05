import { Stripe } from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15'
})

async function handler (req, res) {
  const { amount, description } = req.body

  if (req.method !== 'POST') return (res.status(401).json() || null)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'mxn',
      payment_method_types: ['card'],
      description
    })
    res.status(200).json(paymentIntent.client_secret)
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler
