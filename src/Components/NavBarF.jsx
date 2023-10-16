import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-blue-500 p-4 m'>
      <div className='flex justify-center space-x-[100px]'>
        <Link href='/' className='border-10 rounded-xl bg-blue-500  text-slate-100 hover:underline hover:text-yellow-300'>
          Inicio
        </Link>
        <Link href='/final/fc' className='hover:underline hover:text-yellow-300 text-slate-100'>
          Primer y Segundo Cuatrimestre
        </Link>
        <Link href='/final/sc' className='hover:underline hover:text-yellow-300 text-slate-100'>
          Tercer Cuatrimestre en adelante
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
