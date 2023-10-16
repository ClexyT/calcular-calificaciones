import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <>
      <Link href='/firstCuat'>Primer y Segundo Cuatrimestre</Link>
      <Link href='/secondCuat'>Tercer Cuatrimestre en adelante</Link>
    </>
  )
}

export default NavBar
