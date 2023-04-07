import Image from 'next/image'

function Footer () {
  return (
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
  )
}

export default Footer
