import React from 'react'
import Navbar from './../components/Navbar.jsx'
import Footer from './../components/Footer.jsx'
import PicCard from '../components/PicCard.jsx'
import Pic1 from './../assets/img1.jpg'

function Home() {
  return (
    <>
    <Navbar/>
    <div style={{textAlign:"center"}}>Home Page</div>
    <PicCard showimg="{Pic1}"/>
    <br />
    <Footer/>
    </>
  )
}

export default Home



// rfce