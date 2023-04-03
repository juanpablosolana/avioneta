import Image from 'next/image'
import SEOHead from '@/components/SEOHead'

export default function Home () {
  return (
    <>
      <SEOHead
        title='Mejora tu relación con el alcohol a partir de hoy.'
        description='Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.'
        keywords='Avioneta, Alcohol, Rehabilitación'
      />

      <main className='bg-slate-900 text-white'>

        <div className='relative h-screen' />
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col items-center'>
              <Image src='/logo.svg' alt='Avioneta' width={200} height={200} />

              <h1 className='text-4xl font-bold'>Mejora tu relación con el alcohol a partir de hoy.</h1>
              <p className='text-xl mt-4'>Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.</p>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4 py-12'>
          <div className='flex flex-col items-center'>
            <Image src='/logo.svg' alt='Avioneta' width={200} height={200} />
          </div>
          <h1 className='text-4xl font-bold'>Mejora tu relación con el alcohol a partir de hoy.</h1>
          <p className='text-xl mt-4'>Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.</p>
        </div>

      </main>
    </>
  )
}
