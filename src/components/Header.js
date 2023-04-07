import Image from 'next/image'
import { Signin, Signout } from '@/components/Session'

import { useSession } from 'next-auth/react'

function Header () {
  const { data: session } = useSession()
  return (
    <header>
      <nav className='px-4 py-6 bg-white border-gray-200 lg:px-6 dark:bg-gray-50'>
        <div className='flex flex-wrap items-center justify-around max-w-screen-xl mx-auto'>
          <Image
            src='/logo.svg'
            alt='Avioneta'
            width={300}
            height={300}
          />
          <div className='items-center w-full lg:flex lg:w-auto lg:order-1'>
            <ul className='mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              {
                session
                  ? <li> <Signout /> </li>
                  : <li> <Signin /> </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
