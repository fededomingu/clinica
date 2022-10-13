import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/Home'
import SignIn from '../view/SignIn'
import SignUp from '../view/SignUp'

const Routing = () => {

  return (

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="*" element={<Home />} />
  </Routes>
  )
}

export default Routing