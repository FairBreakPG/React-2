import { useState } from 'react'
import './App.css'
import Registro from './assets/componentes/Registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Registro />
    </>
  )
}

export default App
