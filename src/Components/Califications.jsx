import { useState } from 'react'

const Calificaciones = () => {
  const [primerExamen, setPrimerExamen] = useState(0)
  const [segundoExamen, setSegundoExamen] = useState(0)
  const [examenFinal, setExamenFinal] = useState(0)
  const [evaluacionContinua, setEvaluacionContinua] = useState(0)
  const [total, setTotal] = useState(0)

  const calcularTotal = () => {
    let porcentaje = 0

    if (primerExamen >= 1 && primerExamen <= 10 && segundoExamen >= 1 && segundoExamen <= 10 &&
        examenFinal >= 1 && examenFinal <= 10 && evaluacionContinua >= 1 && evaluacionContinua <= 10) {
      if (primerExamen <= 3 && segundoExamen <= 3) {
        porcentaje = 25
      } else {
        porcentaje = 10
      }

      const totalCalculado = (primerExamen * 0.1 * porcentaje) + (segundoExamen * 0.1 * porcentaje) + (examenFinal * 0.1 * 40) + (evaluacionContinua * 0.1 * 10)
      setTotal(totalCalculado)
    } else {
      <div class='alert bg-red-500 text-white p-5 mb-5'>
        <span class='closebtn text-xl font-bold float-right cursor-pointer transition duration-300 hover:text-black' onclick="this.parentElement.style.display='none';">&times;</span>
        Las calificaciones deben ser valores entre 1 y 10
      </div>
    }
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white border rounded-md shadow-md'>
      <h1 className='text-2xl font-bold mb-4'>Calculadora de Calificaciones</h1>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Primer Examen Parcial:</label>
        <input type='number' className='border rounded w-full py-2 px-3' min='1' max='10' value={primerExamen} onChange={(e) => setPrimerExamen(e.target.value)} />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Segundo Examen Parcial:</label>
        <input type='number' className='border rounded w-full py-2 px-3' min='1' max='10' value={segundoExamen} onChange={(e) => setSegundoExamen(e.target.value)} />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Examen Final:</label>
        <input type='number' className='border rounded w-full py-2 px-3' min='1' max='10' value={examenFinal} onChange={(e) => setExamenFinal(e.target.value)} />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Evaluación Continua:</label>
        <input type='number' className='border rounded w-full py-2 px-3' min='1' max='10' value={evaluacionContinua} onChange={(e) => setEvaluacionContinua(e.target.value)} />
      </div>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={calcularTotal}>
        Calcular
      </button>

      <div className='mt-4'>
        {total > 0 && (
          <div className='font-bold text-xl text-green-600'>
            Tu calificación final es: {total.toFixed(0)}
          </div>
        )}
      </div>
    </div>
  )
}

export default Calificaciones
