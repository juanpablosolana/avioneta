import Image from 'next/image'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'

export default function Home () {
  return (
    <>
      <SEOHead
        title='Mejora tu relación con el alcohol a partir de hoy.'
        description='Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.'
        keywords='Avioneta, Alcohol, Rehabilitación'
      />
      <Header />
      <main className='bg-slate-900 text-white'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center justify-center min-h-screen bg-slate-200'>
            <div className='flex flex-col items-center justify-center '>
              <Image
                src='/logo.svg'
                alt='Avioneta'
                width={200}
                height={200}
              />
              <h1 className='text-4xl font-bold mt-4'>Avioneta</h1>
            </div>
            <div className='flex flex-col items-center justify-center mt-8'>
              <h2 className='text-2xl font-bold'>
                Mejora tu relación con el alcohol a partir de hoy.
              </h2>
              <p className='text-lg mt-4'>
                Descubre nuestra suscripción mensual para aprender a moderar tu
                consumo de alcohol o a sacarlo por completo de tu vida.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
