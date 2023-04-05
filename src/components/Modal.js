import { useState } from 'react'
import Router from 'next/router'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useSession } from 'next-auth/react'
import LoadingSpinner from './LoadingSpinner'
import Success from './Success'

function Modal ({ setShowModal, productData }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPaymentSucces, setIsPaymentSucces] = useState(false)
  const handlePay = () => {
    setIsLoading(true)
    fetch('/api/intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: parseInt(productData.price.replace(',', '')),
        description: productData.name
      })
    })
      .then(res => res.json())
      .then(data => {
        confirmPayment(data)
      })
  }

  const stripe = useStripe()
  const elements = useElements()
  const { data: session } = useSession()

  const confirmPayment = async (clientSecret) => {
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: session.user.name,
          email: session.user.email
        }
      }
    })

    if (result.error) {
      setIsLoading(false)
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setIsPaymentSucces(true)
        Router.push('/dashboard')
      }
    }
  }

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d'
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm'>
      {isPaymentSucces
        ? <Success />
        : (
          <div className='relative flex flex-col p-4 rounded w-96 bg-slate-100'>
            <div className='flex justify-between'>
              <h2 className='text-xl font-bold'> {productData.name} </h2>
              {!isLoading && <span className='text-gray-400 cursor-pointer' onClick={() => setShowModal(false)}>X</span>}
            </div>
            <div className='flex flex-col gap-4 mt-4'>
              <p> $ {productData.price} MXN</p>
              <div className='flex flex-col gap-2'>
                <CardElement options={cardStyle} />
                {isLoading
                  ? <LoadingSpinner />
                  : (
                    <button onClick={handlePay} className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
                      Suscribirme
                    </button>)}
              </div>
            </div>
          </div>)}
    </div>
  )
}

export default Modal
