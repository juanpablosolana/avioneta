function Header ({ session }) {
  return (
    <div className='bg-cover bg-center bg-[url("/images/man-using-laptop.jpg")] h-60'>
      <div className='p-20'>
        <span className='text-xl text-white lg:text-4xl'>Hola de nuevo, <p className='font-bold'>{session.user.name}</p></span>
      </div>
      <div className='bg-sky-600'>
        <div className='flex items-center justify-around py-2 text-sm font-bold text-white lg:justify-between lg:mx-20 lg:text-2xl'>
          <h2 className='mt-4'> Tu semana en avioneta</h2>
          <h2 className='mt-4 lg:font-normal'> Semana 1</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
