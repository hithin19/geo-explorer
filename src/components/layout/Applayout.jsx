import React from 'react'
import { Header } from '../ui/Header'
import { Footer } from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Applayout