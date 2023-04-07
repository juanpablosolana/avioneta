import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Signin () {
  return (
    <button
      onClick={() => signIn()}
      className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
    >
      Ingresar
    </button>
  )
}

function Signout () {
  const { data: session } = useSession()
  return (
    <div>
      <li className='py-3 sm:py-4'>
        <div className='flex items-center space-x-4'>
          <div className='flex-shrink-0'>
            <Link href='/dashboard'>
              <Image
                src={session?.user.image}
                alt={session?.user.name}
                width={50}
                height={50}
                className='inline w-full rounded-lg margin-auto'
              />
            </Link>
          </div>
          <div className='collapse lg:visible lg:flex-1 lg:min-w-0'>
            <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
              {session?.user.name}
            </p>
            <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
              {session?.user.email}
            </p>
          </div>
          <Link href='/' onClick={() => signOut()}>
            Cerrar sesión
          </Link>
        </div>
      </li>

    </div>
  )
}

export { Signin, Signout }
