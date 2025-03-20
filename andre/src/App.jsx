import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton'

function App() {
  return (
    <>
      <h1>Auxilio, mundo.</h1>
      <Boton
        titulo={"soy un boton"}
      />
    </>
  )
}

export default App
