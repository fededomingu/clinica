import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Component/Header/Header'
import Routing from './routes/Routing'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  )
}

export default App