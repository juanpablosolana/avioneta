import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

function Signin () {
  return (
    <button
      onClick={() => signIn()}
      className='w-full px-4 py-2 text-xl font-semibold text-white rounded-lg shadow-lg bg-sky-900'
    >
      Ingresar
    </button>
  )
}

function Signout () {
  const router = useRouter()
  return (
    <div className='flex flex-1'>
      <button
        onClick={() => router.push('/profile')}
        className='w-full px-4 py-2 text-xl font-semibold text-white rounded-lg shadow-lg bg-sky-900'
      >
        Ver perfil
      </button>

      <button
        button onClick={() => signOut()}
        className='w-full px-4 py-2 text-xl font-semibold text-white rounded-lg shadow-lg bg-sky-900'
      >
        Salir
      </button>
    </div>
  )
}

export { Signin, Signout }
