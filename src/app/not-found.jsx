import Image from 'next/image'
import Link from 'next/link'

function NotFound () {
  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          This is not fine 404
        </h1>
        <p className='text-slate-600'>You are lost 404</p>
        <Image src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro this is fine quemandose vivo' width={600} height={600} />
        <p className='text-slate-600 mb-2 font-bold'><span className='text-blue-900'>↓</span> Aquí tienes el boton para volver a la Página Principal <span className='text-blue-900'>↓</span> </p>
        <Link href='/initial' className='text-slate-600 font-bold border-2 border-slate-800 rounded-[20px] hover:border-blue-500 hover:text-blue-900 p-1 px-3'>Volver al Inicio</Link>
      </div>
    </section>
  )
}

export default NotFound
