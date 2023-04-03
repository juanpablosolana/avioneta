import Image from 'next/image'
import { Signin, Signout } from '@/components/Session'

import { useSession } from 'next-auth/react'

function Header () {
  const { data: session } = useSession()
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-50'>
        <div className='flex flex-wrap justify-around items-center mx-auto max-w-screen-xl'>
          <Image
            src='/logo.svg'
            alt='Avioneta'
            width={300}
            height={300}
          />
          <div className='hidden items-center w-full lg:flex lg:w-auto lg:order-1'>
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
