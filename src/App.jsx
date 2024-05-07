import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function App() {

  return (
    <>

      <h1>Youtube TM</h1>

      <Navbar />

      <Outlet />

    </>
  )
}

export default App
