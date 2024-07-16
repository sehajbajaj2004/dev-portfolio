import React from 'react'
import { Navbar } from './components'
import { Outlet } from 'react-router-dom'
import { Footer } from './components'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout