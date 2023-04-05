import { CardElement } from '@stripe/react-stripe-js'
function Modal ({ setShowModal }) {
  const handlePay = () => {
    console.log('Pagar')
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
      <div className='relative flex flex-col p-4 rounded w-96 bg-slate-100'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-bold' />
          <span className='text-gray-400 cursor-pointer' onClick={() => setShowModal(false)}>X</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='flex flex-col gap-2'>
            <CardElement options={cardStyle} />
            <button onClick={handlePay} className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
