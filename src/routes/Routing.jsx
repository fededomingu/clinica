import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/Home'
import SingIn from '../view/SingIn'
import SingUp from '../view/SingUp'

const Routing = () => {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/singup" element={<SingUp />} />
    <Route path="/singin" element={<SingIn />} />
    <Route path="*" element={<Home />} />
  </Routes>
  )
}

export default Routing