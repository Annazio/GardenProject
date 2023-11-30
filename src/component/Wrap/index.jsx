import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../UI/ScrollToTop'

export default function Wrap() {
  return (
    <div>
        <Header/>
         <ScrollToTop/>
           <Outlet/>
        <Footer/>
    </div>
  )
}
