import Footer from '@/components/Footer'
import SEOHead from '@/components/SEOHead'
import { getSession } from 'next-auth/react'
import { Header, Main } from '@/components/dashboard'

export default function Profile ({ session }) {
  return (
    <div className='bg-cyan-50 main'>
      <SEOHead
        title='Dashboard'
        description='Mejora tu relación con el alcohol a partir de hoy. Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.'
        keywords='Avioneta, Alcohol, Rehabilitación'
      />
      <Header session={session} />
      <Main />
      <Footer />
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
