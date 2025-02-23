"use client";
import { useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import Logo from "../assets/images/residential-service/newlogo.jpg"
import Image from 'next/image';
import Link from "next/link";
const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
      setYear(new Date().getFullYear()); // Ensures the year is set dynamically on the client
    }, []);
  return (
    <div>
      <div className="rts-footer-area rts-section-gapTop bg_footer-1 bg_image">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="contact-area-footer-top">
                    <div className="single-contact-area-box">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h6 className="title  text-light">Call Us Now</h6>
                        <a href="#">(646) 555-0258</a>
                        <a href="#">(213) 555-0456, (503) 555-0666</a>
                    </div>
                    <div className="single-contact-area-box">
                        <div className="icon">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <h6 className="title text-light">Office Time</h6>
                        <a href="#">Mon-Fri: 9:00 am to 5:00 pm <br/>
                            Sat: 9:00 am to 2:00 pm</a>
                    </div>
                    <div className="single-contact-area-box">
                        <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h6 className="title text-light">Need Support</h6>
                        <a href="#">support@elever.com</a>
                        <a href="#">help-elver@gmail.com</a>
                    </div>
                    <div className="single-contact-area-box">
                        <div className="icon">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <h6 className="title text-light">Our Address</h6>
                        <a href="#">456 Elm Avenue, Floor 2, San <br/>
                            Francisco, CA 94103</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-full">
        <div className="row">
            <div className="col-lg-12">
                <div className="nav-footer-wrapper-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 hidden">
                                <ul className="footer-float-nav ">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="project.html">Projects</a></li>
                                    <li><a href="blog-grid.html">Updates</a></li>
                                    <li><a href="vision.html">Mission</a></li>
                                    <li><a href="company-history.html">Inside</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="company-history.html">History</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="footer-wrapper-left-one">
                    <a href="#" className="logo">
                        <Image src={Logo} alt="logo"  width={100} height={100} />
                    </a>
                    <p className="disc">
                        we’re committed to elevating the construction experience for our clients. With a passion for
                        innovation and quality craftsmanship,
                    </p>
                    <div className="social-area-wrapper-one">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="footer-wrapper-right ">
                    <div className="single-nav-area-footer use-link">
                        <h4 className="title text-light">Useful Links</h4>
                        <ul>
                           
                            <li><Link href="/service"><i className="fa-regular fa-arrow-right-long"></i>Residential
                                    Services</Link>
                            </li>
                            <li><Link href="/commercial_service"><i className="fa-regular fa-arrow-right-long"></i>Commercial
                                    Services</Link>
                            </li>
                         
                            <li><Link href="/contact"><i className="fa-regular fa-arrow-right-long"></i>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="single-nav-area-footer use-link hidden">
                        <h4 className="title text-light">Quick Services</h4>
                        <ul>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>General
                                    Contracting</a>
                            </li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>Project
                                    Management</a>
                            </li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>New
                                    Construction</a></li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>Renovations &
                                    Remodeling</a></li>
                            <li><a href="service.html"><i className="fa-regular fa-arrow-right-long"></i>Interior
                                    Finishing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="single-nav-area-footer news-letter">
                        <h4 className="title text-light">Newsletter</h4>
                        <p>Aplications prodize before front end ortals visualize front end</p>
                        <form action="#">
                            <input type="email" placeholder="Email Address" required />
                            <button className="btn-subscribe mt--15">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-full copyright-area-one">
        <div className="row">
            <div className="col-lg-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-wrapper">
                                <p className="mb-0">Copyright &copy;
                                {year}
                                    RMC. All Rights Reserved.
                                </p>
                                <div className="right-nav">
                                    <ul>
                                        <li><Link href="/">Terms of use </Link></li>
                                        <li><Link href="/"> Privacy</Link></li>
                                        <li><Link href="/">Environmental Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div id="elevate-load">
<div className="loader-wrapper">
    <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</div>
<div className="progress-wrap">
<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path 
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
            transition: "stroke-dashoffset 10ms linear 0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: "307.919"
        }}
    />
</svg>

</div>
<div className="search-input-area">
    <div className="container">
        <div className="search-input-inner">
            <div className="input-div">
                <input className="search-input autocomplete" type="text" placeholder="Search by keyword or #" />
                <button><i className="far fa-search"></i></button>
            </div>
        </div>
    </div>
    <div id="close" className="search-close-icon"><i className="far fa-times"></i></div>
</div>
    </div>
  )
}

export default Footer
