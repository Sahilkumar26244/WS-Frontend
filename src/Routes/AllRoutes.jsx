import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ContactUs from '../Components/SubPages/ContactUs'
import PortfolioDetails from '../Components/SubPages/PortfolioDetails'
import AboutUsDetails from '../Components/SubPages/AboutUsDetails'
import ServiceDetailsPage from '../Components/SubPages/ServiceDetailsPage'
import BlogPage from '../Components/SubPages/BlogPage'
import BlogDetails from '../Components/SubPages/BlogDetails'
import ContactUs2 from '../Components/SubPages/ContactUs2'
import PdfViwer from '../Components/SubPages/PdfViwer'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactUs2/>} />
        <Route path='/contact1' element={<ContactUs/>} />
        <Route path='/portfolioDetails' element={<PortfolioDetails/>} />
        <Route path='/aboutDetails' element={<AboutUsDetails/>} />
        <Route path='/service/:id' element={<ServiceDetailsPage/>} />
        <Route path='/blogs' element={<BlogPage/>} />
        <Route path='/blogs/:id' element={<BlogDetails/>} />

        <Route path='/pdfviewer' element={<PdfViwer/>} />
    </Routes>
    </>
  )
}

export default AllRoutes