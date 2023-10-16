import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className='flex justify-center flex-col p-4 text-center'>
        <p className='text-blue-500 text-lg font-bold mb-4 '>Calcula tu Calificación final</p>
        <Link href='/' className='border-10 rounded-xl bg-blue-500 p-5 text-slate-100 m-1 active:text-[1.200rem] active:text-yellow-400 active:bg-purple-600'>Primer cuatri</Link>
        <Link href='/' className='border-10 rounded-xl bg-blue-500 p-5 text-slate-100 m-1 active:text-[1.200rem] active:text-yellow-400 active:bg-purple-600'>Tercer cuatri</Link>
        <p className='text-blue-500 text-lg font-bold mt-8 mb-4'>Conoce tu Evaluacion Continua</p>
        <Link href='/ec' className='text-blue-500 mr-4 hover:underline'>Inicio</Link>
        <Link href='/ec/fc' className='text-blue-500 mr-4 hover:underline'>Primer cuatri</Link>
        <Link href='/ec/sc' className='text-blue-500 hover:underline'>Tercer cuatri</Link>
      </div>
    </>
  )
}
