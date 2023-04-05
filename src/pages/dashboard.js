import Image from 'next/image'
import SEOHead from '@/components/SEOHead'
import { getSession } from 'next-auth/react'

export default function Profile ({ session }) {
  return (
    <div className='bg-cyan-50 main'>
      <SEOHead
        title='Dashboard'
        description='Mejora tu relación con el alcohol a partir de hoy. Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.'
        keywords='Avioneta, Alcohol, Rehabilitación'
      />
      <div className='bg-cover bg-center bg-[url("/images/man-using-laptop.jpg")] h-60'>
        <div className='p-20'>
          <span className='text-4xl text-white'>Hola de nuevo, <p className='font-bold'>{session.user.name}</p></span>
        </div>
        <div className='bg-sky-600'>
          <div className='flex items-center justify-between py-2 mx-20 text-2xl font-bold text-white'>
            <h2 className='mt-4 '> Tu semana en avioneta</h2>
            <h2 className='font-normal'> Semana 1</h2>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center h-auto py-20 mt-8 text-center'>
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg aria-hidden='true' className='w-4 h-4 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
          </a>
        </div>
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg aria-hidden='true' className='w-4 h-4 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
          </a>
        </div>
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg aria-hidden='true' className='w-4 h-4 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
          </a>
        </div>
      </div>
      <div className='flex flex-row justify-center h-auto mt-8 text-center'>
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg aria-hidden='true' className='w-4 h-4 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
          </a>
        </div>
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg aria-hidden='true' className='w-4 h-4 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
          </a>
        </div>
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg aria-hidden='true' className='w-4 h-4 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
          </a>
        </div>
      </div>
      <footer>
        <div className='flex flex-col items-center justify-center w-full h-24 mt-8'>
          <div className='flex items-center justify-center'>
            <Image
              src='/logo.svg'
              alt='Avioneta'
              width={300}
              height={300}
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function getServerSideProps (context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false
      }
    }
  }

  return { props: { session } }
}
