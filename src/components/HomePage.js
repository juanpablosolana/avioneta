function HomePage () {
  return (
    <main className='bg-slate-900 text-slate-50 bg-[url("/images/man-using-laptop.jpg")] '>
      <div className='bg-black bg-opacity-50'>
        <div className='container px-4 mx-auto '>
          <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='mt-4 text-6xl font-bold text-center'> Mejora tu relación con el alcohol a partir de hoy</h1>
            </div>
            <div className='flex flex-col items-center justify-center py-20 mt-8 text-center'>
              <h2 className='text-4xl font-bold'>
                Descubre nuestra suscripción mensual para aprender a moderar tu
                consumo de alcohol o a sacarlo por completo de tu vida
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
