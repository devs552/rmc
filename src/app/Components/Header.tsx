'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../assets/images/residential-service/newlogo.jpg";
import service1 from "../assets/images/service/04.svg";
import service2 from "../assets/images/service/05.svg";
import service3 from '../assets/images/service/06.svg'
import service4 from "../assets/images/service/07.svg";
import service5 from "../assets/images/service/09.svg";
import service6 from "../assets/images/service/10.webp";
import arrowUpRight from "../assets/images/icons/arrow-up-right.svg";
import barLogo from "../assets/images/logo/bar.svg";
import HeaderLogo from "../assets/images/residential-service/newlogo.jpg";
import { usePathname } from 'next/navigation';
import residentialConstruction from  "../assets/images/service/04.svg";
import RR from "../assets/images/service/05.svg";
import DesignBuilding from "../assets/images/service/06.svg";
import StructuralEngineering from "../assets/images/service/07.svg"
import postConstruction from "../assets/images/service/09.svg";
import menuTumb from "../assets/images/service/10.webp";
import banner1 from "../assets/images/banner/04.jpg";
import Script from 'next/script';
import { useEffect } from 'react';
const Header = () => {
    const [onExpand, setOnExpand] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

        useEffect(() => {
            let lastScrollY = window.scrollY;
            let position = 0;
            let scrollTimeout: NodeJS.Timeout | undefined;
    
            function updateMarqueeOnScroll() {
                const marquee = document.querySelector('.marquee') as HTMLElement; 
                if (!marquee) return; // Ensure marquee exists
    
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > lastScrollY) {
                    position -= 4;
                } else if (currentScrollY < lastScrollY) {
                    position += 4;
                }
    
                marquee.style.transform = `translateX(${position}px)`;
                lastScrollY = currentScrollY;
    
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    marquee.style.transform = `translateX(${position}px)`;
                }, 50);
            }
    
            window.addEventListener('scroll', updateMarqueeOnScroll);
    
            return () => {
                window.removeEventListener('scroll', updateMarqueeOnScroll);
            };
        }, []);
  return (
    <div>
         <header className="heder-one md:hidden sm:block fixed w-full top-[1] z-50">
    <div className="header-two-container">
        <div className="row">
            <div className="col-12">
                <div className="header-main-wrapper">
                    <div className="logo-area">
                        <Link href="/" className="logo">
                            <Image src={logo} width={100} height={100} alt="image-logo" />
                        </Link>
                    </div>
                    <div className="rts-header-right position-static">
                        <div className="top">

                            <div className="end-top">
                                <div className="single-info">
                                    <div className="icon">
                                        <i className="fa-light fa-mobile"></i>
                                    </div>
                                    <a href="#">(555) 123-4567,</a>
                                    <a href="#">(555) 123-4567,</a>
                                </div>
                                <div className="single-info">
                                    <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                                    <a href="mailto:name@email.com">info@elever.com</a>
                                </div>
                            </div>
                            <div className="start-top">
                                <div className="social-header">
                                    <span>Follow Us On:</span>
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="nav-area">
                                <ul className="">
                                    <li className="main-nav   ">
                                        <Link href="/">Home</Link>
                                    
                                    </li>

                                    <li className="main-nav has-dropdown mega-menu">
                                        <a href="#">Service</a>
                                        <div className="rts-mega-menu service-mega-menu-style">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-5">
                                                        <div className="col-lg-4">
                                                            <ul className="mega-menu-item parent-nav">
                                                                <li>
                                                                    <Link href="/service">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service1}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Residential
                                                                                    Construction</h5>
                                                                                <p className="details">
                                                                                    Once planning is complete, site
                                                                                    preparation begins. This phase
                                                                                    involves clearing...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service2}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Renovations &
                                                                                    Remodeling</h5>
                                                                                <p className="details">
                                                                                    Quis nulla blandit vulputate
                                                                                    morbi adipiscing sem vestibulum.
                                                                                    Nulla turpis...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service3}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Design Build
                                                                                    Services</h5>
                                                                                <p className="details">
                                                                                    Elever Architecture is a
                                                                                    New-York-based studio on modern
                                                                                    design,
                                                                                    interiors and landscapes...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <ul className="mega-menu-item parent-nav">
                                                                <li>
                                                                    <Link href="/service">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service4}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Structural
                                                                                    Engineering</h5>
                                                                                <p className="details">
                                                                                    We provide best IT solutions for
                                                                                    any type of business as
                                                                                    stragegy, management...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={service5}  width={250} height={250}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Post-Construction
                                                                                </h5>
                                                                                <p className="details">
                                                                                    We provide best IT solutions for
                                                                                    any type of business as
                                                                                    stragegy, management...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service"
                                                                        className="free-consultation">
                                                                        <div className="single-service-menu">
                                                                            <div className="info">
                                                                                <h5 className="title">Get Free
                                                                                    Consultation</h5>
                                                                                <p className="details">
                                                                                    From preconstruction to virtual
                                                                                    design and construction, we
                                                                                    offer virtual design
                                                                                    construction.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="menu-thumb pl--20">
                                                                <Image src={service6}  width={800} height={300} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown mega-menu hidden">
                                        <a href="#">Pages</a>
                                        <div className="rts-mega-menu">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="about.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>About
                                                                        Company</a></li>
                                                                <li><a href="company-history.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Company
                                                                        History</a></li>

                                                                <li><a href="company-story.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Company History 2</a></li>
                                                                <li><a href="company-values.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Company
                                                                        Values</a></li>
                                                                <li><a href="our-office.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Office</a></li>
                                                                <li><a href="working-process.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Working
                                                                        Process</a>
                                                                </li>
                                                                <li><a href="working-process-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Working
                                                                        Process 2</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="safety.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Safety</a>
                                                                </li>
                                                                <li><a href="pricing.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Pricing
                                                                        Plan</a>
                                                                </li>
                                                                <li><a href="pricing-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Pricing
                                                                        Plan 2</a>
                                                                </li>
                                                                <li><a href="vision.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Vision</a>
                                                                </li>
                                                                <li><a href="careers.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Career</a></li>
                                                                <li><a href="sustainability.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Sustainability</a></li>
                                                                <li><a href="gallery.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Company Gallery</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="our-clients.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Clients</a></li>
                                                                <li><a href="blog-grid.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        Grid</a></li>
                                                                <li><a href="blog-list.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        List</a></li>
                                                                <li><a href="blog-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        Details</a></li>
                                                                <li><a href="service.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Service</a>
                                                                </li>



                                                                <li><a href="team.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Team</a></li>
                                                                <li><a href="team-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Team
                                                                        Details</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">

                                                                <li><a href="faq.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>FAQ'S</a>
                                                                </li>

                                                                <li><a href="appoinment.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Appointment</a>
                                                                </li>
                                                                <li><a href="contact.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Contact</a>
                                                                </li>



                                                                <li><a href="privacy-policy.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Privacy
                                                                        Policy</a></li>
                                                                <li><a href="terms-of-condition.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Terms
                                                                        & Condition</a>
                                                                </li>
                                                                <li><a href="coming-soon.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Coming
                                                                        Soon</a>
                                                                </li>

                                                                <li><a href="404.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>404</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown project-a-after hidden">
                                        <a href="#">Shop</a>
                                        <ul className="submenu parent-nav">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="account.html">Account</a></li>
                                            <li className="sub-dropdown down">
                                                <a href="#">Product Single</a>
                                                <ul className="submenu third-lvl base">
                                                    <li><a href="single-product.html">Shop Single</a></li>
                                                    <li><a href="single-product-left.html">Shop Single Left</a></li>
                                                    <li><a href="single-product-right.html">Shop Single Right</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="main-nav has-dropdown mega-menu">
                                        <a href="#">Project</a>
                                        <div className="rts-mega-menu">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Types</p>
                                                                </li>
                                                                <li><a href="project.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project</a>
                                                                </li>
                                                                <li><a href="project-slider.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider</a></li>

                                                                <li><a href="project-slider-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Project Slider 2</a></li>
                                                                <li><a href="project-slider-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider 3</a>
                                                                </li>
                                                                <li><a href="project-list.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        List</a></li>
                                                                <li><a href="project-card.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Card</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Layout</p>
                                                                </li>
                                                                <li><a href="project-two-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        2 Columns</a>
                                                                </li>
                                                                <li><a href="project-three-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        3 Columns</a>
                                                                </li>
                                                                <li><a href="project-two-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        2 Columns
                                                                        Wide</a></li>
                                                                <li><a href="project-three-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        3 Columns
                                                                        Wide</a></li>
                                                                <li><a href="project-four-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        4 Columns
                                                                    </a></li>
                                                                <li><a href="project-four-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        4 Columns Wide
                                                                    </a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>Hover
                                                                        Type
                                                                    </p>
                                                                </li>
                                                                <li><a href="project-hide-content-col-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide
                                                                        Content</a>
                                                                </li>
                                                                <li><a href="project-hide-content.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide
                                                                        Content wide</a>
                                                                </li>
                                                                <li><a href="project-card-hover.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Card Hover</a>
                                                                </li>
                                                                <li><a href="project-zoom-slider.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider Image
                                                                        Zoom</a>
                                                                </li>
                                                                <li><a href="project-hide-show.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide Show</a>
                                                                </li>
                                                                <li><a href="project-slider-hover.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider
                                                                        Hover</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Single</p>
                                                                </li>
                                                                <li><a href="project-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials</a>
                                                                </li>
                                                                <li><a href="project-details-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials
                                                                        Video</a>
                                                                </li>
                                                                <li><a href="project-details-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials
                                                                        Slider</a></li>
                                                                <li><a href="project-details-large-image.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Large Image</a>
                                                                </li>
                                                                <li><a href="project-details-gallery.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Project Gallery</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown project-a-after hidden">
                                        <a href="#">Blog</a>
                                        <ul className="submenu parent-nav">
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-list.html">Blog List</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="main-nav"><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div className="right-area">
                                
                                <a href="contact.html" className="rts-btn btn-header btn-transparent">Get a Quote
                                    <Image src={arrowUpRight}  width={10} height={10}  alt="arrow" />
                                </a>
                                <div className="nav-btn menu-btn " onClick={()=> setOnExpand(onExpand === false ? true : false) }  >
                                    <Image src={barLogo}  width={50} height={50} alt="nav-iamge" />
                                </div>
                            </div>
                        </div>
                  
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</header>
<header className="heder-one md:block hidden  fixed top-1 left-[-10] w-[95%] shadow-md z-50 ">
    <div className="header-two-container">
        <div className="row">
            <div className="col-12">
                <div className="header-main-wrapper">
                    <div className="logo-area">
                        <Link href="/" className="logo">
                            <Image src={HeaderLogo} alt="image-logo"  width={100} height={100} />
                        </Link>
                    </div>
                    <div className="rts-header-right  position-static">
                        <div className="top">

                            <div className="end-top">
                                <div className="single-info">
                                    <div className="icon">
                                        <i className="fa-light fa-mobile"></i>
                                    </div>
                                    <a href="#">(555) 123-4567,</a>
                                    <a href="#">(555) 123-4567,</a>
                                </div>
                                <div className="single-info">
                                    <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                                    <a href="mailto:name@email.com">info@elever.com</a>
                                </div>
                            </div>
                            <div className="start-top">
                                <div className="social-header">
                                    <span>Follow Us On:</span>
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="nav-area">
                                <ul   className="">
                                    <li className=" main-nav    project-a-after">
                                        <Link href="/"><span className={pathname === '/' ? 'text-[#f84e1d]' : ''}>Home</span></Link>
                                       
                                    </li>

                                    <li className="main-nav has-dropdown mega-menu">
                                        <Link href="/service"><span className={pathname === '/service' || pathname === '/commercial_service' ? 'text-[#f84e1d]' : ''}>Service</span></Link>
                                        <div className="rts-mega-menu service-mega-menu-style">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-5">
                                                        <div className="col-lg-6">
                                                            <ul className="mega-menu-item parent-nav">
                                                                <li>
                                                                    <Link href="/service">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={residentialConstruction}
                                                                                    alt="service"  width={100} height={100} />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Residential
                                                                                    Construction</h5>
                                                                                <p className="details">
                                                                                    Once planning is complete, site
                                                                                    preparation begins. This phase
                                                                                    involves clearing...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                               
                                                              
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <ul className="mega-menu-item parent-nav hidden">
                                                               
                                                                <li>
                                                                    <Link href="/commercial_service">
                                                                        <div className="single-service-menu">
                                                                            <div className="icon">
                                                                                <Image src={StructuralEngineering}  width={100} height={100}
                                                                                    alt="service" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <h5 className="title">Commercial Construction
                                                                                </h5>
                                                                                <p className="details">
                                                                                    We provide best IT solutions for
                                                                                    any type of business as
                                                                                    stragegy, management...
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown mega-menu hidden">
                                        <a href="#">Pages</a>
                                        <div className="rts-mega-menu">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="about.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>About
                                                                        Company</a></li>
                                                                <li><a href="company-history.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Company
                                                                        History</a></li>

                                                                <li><a href="company-story.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Company History 2</a></li>
                                                                <li><a href="company-values.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Company
                                                                        Values</a></li>
                                                                <li><a href="our-office.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Office</a></li>
                                                                <li><a href="working-process.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Working
                                                                        Process</a>
                                                                </li>
                                                                <li><a href="working-process-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Working
                                                                        Process 2</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="safety.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Safety</a>
                                                                </li>
                                                                <li><a href="pricing.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Pricing
                                                                        Plan</a>
                                                                </li>
                                                                <li><a href="pricing-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Pricing
                                                                        Plan 2</a>
                                                                </li>
                                                                <li><a href="vision.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Vision</a>
                                                                </li>
                                                                <li><a href="careers.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Career</a></li>
                                                                <li><a href="sustainability.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Sustainability</a></li>
                                                                <li><a href="gallery.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Company Gallery</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li><a href="our-clients.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Clients</a></li>
                                                                <li><a href="blog-grid.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        Grid</a></li>
                                                                <li><a href="blog-list.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        List</a></li>
                                                                <li><a href="blog-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Blog
                                                                        Details</a></li>
                                                                <li><a href="service.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Service</a>
                                                                </li>



                                                                <li><a href="team.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Our
                                                                        Team</a></li>
                                                                <li><a href="team-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Team
                                                                        Details</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">

                                                                <li><a href="faq.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>FAQ'S</a>
                                                                </li>

                                                                <li><a href="appoinment.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Appointment</a>
                                                                </li>
                                                                <li><a href="contact.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Contact</a>
                                                                </li>



                                                                <li><a href="privacy-policy.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Privacy
                                                                        Policy</a></li>
                                                                <li><a href="terms-of-condition.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Terms
                                                                        & Condition</a>
                                                                </li>
                                                                <li><a href="coming-soon.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Coming
                                                                        Soon</a>
                                                                </li>

                                                                <li><a href="404.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>404</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown project-a-after hidden">
                                        <a href="#">Shop</a>
                                        <ul className="submenu parent-nav">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="account.html">Account</a></li>
                                            <li className="sub-dropdown down">
                                                <a href="#">Product Single</a>
                                                <ul className="submenu third-lvl base">
                                                    <li><a href="single-product.html">Shop Single</a></li>
                                                    <li><a href="single-product-left.html">Shop Single Left</a></li>
                                                    <li><a href="single-product-right.html">Shop Single Right</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="main-nav has-dropdown mega-menu hidden">
                                        <a href="#">Project</a>
                                        <div className="rts-mega-menu">
                                            <div className="wrapper">
                                                <div className="container">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Types</p>
                                                                </li>
                                                                <li><a href="project.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project</a>
                                                                </li>
                                                                <li><a href="project-slider.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider</a></li>

                                                                <li><a href="project-slider-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Project Slider 2</a></li>
                                                                <li><a href="project-slider-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider 3</a>
                                                                </li>
                                                                <li><a href="project-list.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        List</a></li>
                                                                <li><a href="project-card.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Card</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Layout</p>
                                                                </li>
                                                                <li><a href="project-two-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        2 Columns</a>
                                                                </li>
                                                                <li><a href="project-three-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        3 Columns</a>
                                                                </li>
                                                                <li><a href="project-two-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        2 Columns
                                                                        Wide</a></li>
                                                                <li><a href="project-three-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        3 Columns
                                                                        Wide</a></li>
                                                                <li><a href="project-four-column.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        4 Columns
                                                                    </a></li>
                                                                <li><a href="project-four-column-wide.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        4 Columns Wide
                                                                    </a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>Hover
                                                                        Type
                                                                    </p>
                                                                </li>
                                                                <li><a href="project-hide-content-col-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide
                                                                        Content</a>
                                                                </li>
                                                                <li><a href="project-hide-content.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide
                                                                        Content wide</a>
                                                                </li>
                                                                <li><a href="project-card-hover.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Card Hover</a>
                                                                </li>
                                                                <li><a href="project-zoom-slider.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider Image
                                                                        Zoom</a>
                                                                </li>
                                                                <li><a href="project-hide-show.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Hide Show</a>
                                                                </li>
                                                                <li><a href="project-slider-hover.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Slider
                                                                        Hover</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item with-list parent-nav">
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head"><i
                                                                            className="fa-regular fa-folder-open"></i>
                                                                        Single</p>
                                                                </li>
                                                                <li><a href="project-details.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials</a>
                                                                </li>
                                                                <li><a href="project-details-2.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials
                                                                        Video</a>
                                                                </li>
                                                                <li><a href="project-details-3.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>Project
                                                                        Detials
                                                                        Slider</a></li>
                                                                <li><a href="project-details-large-image.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Large Image</a>
                                                                </li>
                                                                <li><a href="project-details-gallery.html"><i
                                                                            className="fa-sharp fa-regular fa-chevron-right"></i>
                                                                        Project Gallery</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="main-nav has-dropdown project-a-after hidden">
                                        <a href="#">Blog</a>
                                        <ul className="submenu parent-nav">
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-list.html">Blog List</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="main-nav"><Link href="/contact"><span className={pathname === '/contact' ? 'text-[#f84e1d]' : ''}>Contact</span></Link></li>
                                </ul>
                            </div>
                            <div className="right-area">
                                <Link href="/contact" className="rts-btn btn-header btn-transparent">Get a Quote
                                    <Image src={arrowUpRight} alt="arrow"  width={10} height={10} />
                                </Link>
                                <div className="nav-btn menu-btn" id="menu-btn">
                                    <Image src={barLogo} alt="nav-iamge"  width={80} height={80} />
                                </div>
                            </div>
                        </div>
                    
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</header>

{onExpand && (
  <div id="side-bar" className="bg-dark flex flex-col mt-[0px] header-two fixed z-50 mt-[76px] h-[86%] overflow-y-auto"> 
    <div className='w-full absolute '>
    <button className="bg-[#f84e1d] text-[20px] w-[15%] h-[15%] p-2 mt-2 mr-4  float-right text-light" onClick={()=>setOnExpand(false)}>
      <b>X</b>
    </button>
</div>
    <div className="inner-main-wrapper-desk">
      <div className="thumbnail">
        <Image src={banner1} alt="elevate" width={500} height={100} />
      </div>
      <div className="inner-content">
        <h4 className="title">We Build Building and Great Constructive Homes.</h4>
        <p className="disc">
          We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly
          master new technologies.
        </p>
        <div className="footer">
          <h4 className="title">Got a project in mind?</h4>
       <center>   <Link href="/contact" className="rts-btn btn-primary">Let's talk</Link></center>
        </div>
      </div>
    </div>

    <div className="mobile-menu d-block d-xl-none">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li className="">
            <Link href="/"  className="main" onClick={(e) => {  setOpen(false); }}><span className={pathname === '/' ? 'text-[#f84e1d]' : ''}>Home</span></Link>
          </li>
          <li className="">
            <Link href="/service" className="main" onClick={(e) => { e.preventDefault(); setOpen(!open); }}><span className={pathname === '/service' || pathname === "/commercial_service" ? 'text-[#f84e1d]' : ''}>Services <span className='float-right'>{open ? "▲" : "▼"}</span></span></Link>
            {open && (
              <ul className="submenu">
                <li><Link className="mobile-menu-link" href="/service"><span className={pathname === '/service' ? 'text-[#f84e1d]' : ''}>Residential Construction</span></Link></li>
                <li><Link className="mobile-menu-link" href="/commercial_service"><span className={pathname === '/commercial_service' ? 'text-[#f84e1d]' : ''}>Commercial Construction</span></Link></li>
                {/* <li><Link className="mobile-menu-link" href="/service">Service Single 2</Link></li>
                <li><Link className="mobile-menu-link" href="/service">Service Single 3</Link></li>
                <li><Link className="mobile-menu-link" href="/service">Service Single 4</Link></li>
                <li><Link className="mobile-menu-link" href="/service">Service Single 5</Link></li> */}
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact" className="main" onClick={(e) => {  setOpen(false); }}><span className={pathname === '/contact' ? 'text-[#f84e1d]' : ''}>Contact Us</span></Link>
          </li>
        </ul>
      </nav>

      <div className="social-wrapper-one">
        <ul className="list-none flex gap-[20px]">
          <li className="border px-4 py-2">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          </li>
          <li className="border px-4 py-2">
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </li>
          <li className="border px-4 py-2">
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </li>
          <li className="border px-4 py-2">
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)}

 {/* External Scripts */}
 <Script src="/assets/js/plugins/jquery.js" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/bootstrap.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/odometer.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/jquery-appear.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/metismenu.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/swiper.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/aos.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/nice-select.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/smooth-scroll.js" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/waw.js" strategy="lazyOnload" />
            <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuSiPhoDaOJ7aqtJVtQhYhLzwwJ7rQlmA" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/marker.js" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/map-content.js" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/info-box.js" strategy="lazyOnload" />
            <Script src="https://html.themewant.com/golfy/assets/js/plugins/magnific-popup.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/contact.form.js" strategy="lazyOnload" />
            <Script src="/assets/js/main.js" strategy="lazyOnload" />

             {/* External Scripts */}

    </div>
  )
}

export default Header
