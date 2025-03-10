'use client'
import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Correct way to import
import "../assets/css/plugins/odometer.css";
import "../assets/css/plugins/metismenu.css";
import "../assets/css/plugins/magnifying-popup.css"
import "../assets/css/vendor/bootstrap.min.css";
import "../assets/css/plugins/hover-revel.css";
import "../assets/css/plugins/unicons.css";
import AOS from "aos";

import 'aos/dist/aos.css'; // AOS styles
import CommercialService from '../pages/CommercialService'
import ScrollProgress from '../Components/BackToTopButton';
import ChatButton from '../Components/ChatButton';
const page = () => {
      useEffect(() => {
          AOS.init({
            duration: 1000, // Duration of the animation
            once: true, // Animation happens only once
          });
        }, []);
  return (
    <div>
        <Header />
        <div className='inner md:mt-[145px] mt-[76px] '>
      <CommercialService />
      </div>
      <Footer />
      <ScrollProgress />
      <ChatButton />
    </div>
  )
}

export default page
