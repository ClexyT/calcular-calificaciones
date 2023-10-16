import { useState } from 'react'

const CalificacionesFC = () => {
  const [primerExamen, setPrimerExamen] = useState()
  const [segundoExamen, setSegundoExamen] = useState()
  const [examenFinal, setExamenFinal] = useState()
  const [evaluacionContinua, setEvaluacionContinua] = useState()
  const [total, setTotal] = useState()

  const calcularTotal = () => {
    const primerExamenP = primerExamen * 0.10
    const segundoExamenP = segundoExamen * 0.20
    const examenFinalP = examenFinal * 0.40
    const evaluacionContinuaP = evaluacionContinua * 0.30

    const totalP = primerExamenP + segundoExamenP + examenFinalP + evaluacionContinuaP

    setTotal(totalP)
  }

  return (
    <div className='max-w-md mx-auto p-6 mt-5 bg-white border-[0.1px]  border-slate-500 rounded-md shadow-xl'>
      <h1 className='text-2xl font-bold mb-1 flex  justify-center'>Calificación final</h1>
      <h3 className='text-xl font-medium mb-5 flex justify-center'>Primer y Segundo Cuatrimestre</h3>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Primer Examen Parcial:</label>
        <input type='number' placeholder='0' className='border rounded w-full py-2 px-3' min='1' max='10' value={primerExamen} onChange={(e) => setPrimerExamen(e.target.value)} />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Segundo Examen Parcial:</label>
        <input type='number' placeholder='0' className='border rounded w-full py-2 px-3' min='1' max='10' value={segundoExamen} onChange={(e) => setSegundoExamen(e.target.value)} />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Examen Final:</label>
        <input type='number' placeholder='0' className='border rounded w-full py-2 px-3' min='1' max='10' value={examenFinal} onChange={(e) => setExamenFinal(e.target.value)} />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Evaluación Continua:</label>
        <input type='number' placeholder='0' className='border rounded w-full py-2 px-3' min='1' max='10' value={evaluacionContinua} onChange={(e) => setEvaluacionContinua(e.target.value)} />
      </div>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={calcularTotal}>
        Calcular
      </button>

      <div className='mt-4'>
        {total > 0 && (
          <div className='font-bold text-xl text-green-600'>
            Tu calificación final es: {total.toFixed(1)}
          </div>
        )}
      </div>
    </div>
  )
}

export default CalificacionesFC
