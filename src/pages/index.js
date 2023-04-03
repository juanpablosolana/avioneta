import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'

export default function Home () {
  return (
    <>
      <SEOHead
        title='Inicio'
        description='Mejora tu relación con el alcohol a partir de hoy. Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.'
        keywords='Avioneta, Alcohol, Rehabilitación'
      />
      <Header />
      <main className='bg-slate-900 text-white bg-[url("/images/man-using-laptop.jpg")] '>
        <div className='bg-black bg-opacity-50'>
          <div className='container mx-auto px-4 '>
            <div className='flex flex-col items-center justify-center min-h-screen'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-6xl font-bold mt-4 text-center'> Mejora tu relación con el alcohol a partir de hoy</h1>
              </div>
              <div className='flex flex-col items-center justify-center mt-8 text-center py-20'>
                <h2 className='text-4xl font-bold'>
                  Descubre nuestra suscripción mensual para aprender a moderar tu
                  consumo de alcohol o a sacarlo por completo de tu vida
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
