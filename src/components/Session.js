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
    <div>
      <button
        onClick={() => router.push('/profile')}
        className='px-4 py-2 mx-5 text-xl font-bold text-white rounded-lg shadow-lg bg-sky-900'
      >
        Ver perfil
      </button>

      <button
        button onClick={() => signOut()}
        className='px-4 py-2 text-xl font-bold text-white rounded-lg shadow-lg bg-sky-900'
      >
        Salir
      </button>
    </div>
  )
}

export { Signin, Signout }
