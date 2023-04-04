import Image from 'next/image'
import SEOHead from '@/components/SEOHead'
import { getSession, signOut } from 'next-auth/react'

export default function Profile ({ session }) {
  return (
    <div className='grid h-screen bg-gray-900 main place-items-center'>
      <SEOHead
        title='Inicio'
        description='Mejora tu relación con el alcohol a partir de hoy. Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.'
        keywords='Avioneta, Alcohol, Rehabilitación'
      />

      <main className='mt-4 text-2xl font-medium text-white name '>
        <>
          <h1> Hola {session?.user.name}</h1>
          <div className='w-16 py-2 mx-auto rounded-full profile '>
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={200}
              height={200}
              className='inline w-full h-56 rounded-lg margin-auto'
            />
          </div>
        </>
        <button
          onClick={() => signOut()}
          className='px-4 py-2 text-lg text-white bg-gray-800 rounded hover:bg-gray-700'
        >
          Salir
        </button>
      </main>
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
