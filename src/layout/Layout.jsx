import React from 'react'
import Navbar from '../components/shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/shared/Footer'
import { ToastContainer } from 'react-toastify'

const Layout=()=> {
  return (
    <div>
        <Navbar/>
    <Outlet/>
    <Footer/>
     <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </div>
  )
}

export default Layout