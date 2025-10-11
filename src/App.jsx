import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Contact from './pages/Contact'
import CertificatePage from './pages/Certificate'
import Gallery from './pages/Gallery'
import ServiceSection from './pages/ServiceSection'
import ServiceDetail from './pages/ServiceDetailed'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
       <Route path='/gallery' element={<Gallery/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/services' element={<ServiceSection/>}/>
       <Route path='/services/:slug' element={<ServiceDetail/>}/>
           <Route path='/certificates' element={<CertificatePage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>

    </BrowserRouter>
  )
}

export default App