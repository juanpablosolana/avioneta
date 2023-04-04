import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function MyApp ({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </SessionProvider>
  )
}

export default MyApp
