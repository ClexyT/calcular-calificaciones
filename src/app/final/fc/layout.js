import NavBar from '@/Components/NavBarF'

const InitialLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
export default InitialLayout