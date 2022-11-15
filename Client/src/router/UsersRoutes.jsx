import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from '../Components/AboutComponents/AboutPage'
import Footer from '../Components/Footer/Footer'
import HomePage from '../Components/HomeComponents/HomePage'
import SearchPage from '../Components/HomeComponents/SearchPage'
import MisionPage from '../Components/MisionComponents/MisionPage'
import VisionPage from '../Components/VisionComponents/VisionPage'
import { Navbar } from '../ui/NavBar'

const HomeRoutes = () => {
  return (
    <>
        <Navbar />
        
        <div className="container" >
        <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="mision" element={<MisionPage />} />
        <Route path="vision" element={<VisionPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="/" element={<Navigate to="/home"/>} />
        </Routes>


        {/* <Footer /> */}
        </div>


    </>
  )
}

export default HomeRoutes
