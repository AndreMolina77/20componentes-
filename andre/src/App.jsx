import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton'
import Acordion from './components/Acordion'
import Alertas from './components/Alertas'
import Badge from './components/Badge'
import Card from './components/Card'
import Carousell from './components/Carousell'
import ListGroup from './components/ListGroup'
import OffCanvas from './components/OffCanvas'
import Pagination from './components/Pagination'
import Popover from './components/Popover'
import ProgressBar from './components/ProgressBar'
import Spinner from './components/Spinner'
import SpinnerGrow from './components/SpinnerGrow'
import Toast from './components/Toast.jsx'
import Nav from './components/Nav.jsx'
import Modal from './components/Modal.jsx'
import Dropdown from './components/Dropdown.jsx'
import ButtonGroup from './components/ButtonGroup.jsx'
import ScrollspyNavbar from './components/ScrollSpyNavbar.jsx'
import Placeholder from './components/Placeholders.jsx'

function App() {
  return (
    <>
      <h1>Auxilio, mundo.</h1>
      <Boton
        titulo={"soy un boton"}
      />
      <Acordion/>
      <Alertas/>
      <Badge/>
      <Card/>
      <Carousell/>
      <ListGroup/>
      <OffCanvas/>
      <Pagination/>
      <Popover/>
      <ProgressBar/>
      <Spinner/>
      <SpinnerGrow/>
      <Toast/>
      <Nav/>
      <Modal/>
      <Dropdown/>
      <ButtonGroup/>
      <ScrollspyNavbar/>
      <Placeholder/>
    </>
  )
}

export default App
