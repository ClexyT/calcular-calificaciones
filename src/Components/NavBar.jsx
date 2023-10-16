import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-blue-500 p-4'>
      <div className='flex justify-center space-x-[100px]'>
        <Link href='/initial/firstCuat' className='hover:text-yellow-300 text-slate-100'>
          Primer y Segundo Cuatrimestre
        </Link>
        <Link href='/initial/secondCuat' className='hover:text-yellow-300 text-slate-100'>
          Tercer Cuatrimestre en adelante
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
