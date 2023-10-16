import NavBar from '@/Components/NavBar'

const InitialLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
export default InitialLayout