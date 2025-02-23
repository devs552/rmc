'use client'
import React from 'react'
import Image from 'next/image'
import GoogleMapComponent from '../Components/GoogleMapComponent'

const ContactUs = () => {
   
  
  return (
    <div>
          
        <div className="rts-banner-area rts-section-gap rts-breadcrumb-area  position-relative contact-bd">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-area-inner">
                        <span className="water-text">Contact</span>
                        <h1 className="title">
                            Contact Us
                        </h1>
                        <div className="nav-area-navigation">
                            <a href="#">home</a>
                            <a className="current" href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="rts-contact-area-page rts-section-gap">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 pr--60 pr_sm--0 mb_sm--30 pr_md--10 pb_md--25 pb_sm--25">
                    <div className="contact-main-wrapper-left">
                        <span>Get In Touch</span>
                        <h3 className="title-main">
                            We are always ready to help you <br/> and answer your questions
                        </h3>
                        <p className="disc">
                            Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper!
                            Greenling sleeper.
                        </p>
                        <div className="row g-24">
                            <div className="col-lg-6">
                                <div className="quick-contact-page-1">
                                    <div className="icon">
                                        <Image src="assets/images/contact/01.svg" height={100} width={100} alt="contact" />
                                    </div>
                                    <h5 className="title">Call Center</h5>
                                    <p>
                                        800 100 975 20 34 <br/>1800-234-5678
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="quick-contact-page-1">
                                    <div className="icon">
                                        <Image src="assets/images/contact/02.svg" width={100} height={100} alt="contact" />
                                    </div>
                                    <h5 className="title">Our Office</h5>
                                    <p>
                                        USA, New York – 1060 <br/>Str. First Avenue 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div id="form-messages"></div>
                    <form id="contact-form" action="mailer.php" className="contact-form-area-wrapper">
                        <h4 className="title">Let’s Get in Touch</h4>
                        <div className="half-inpur-wrapper">
                            <div className="single">
                                <input type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div className="single">
                                <input type="text" name="email" placeholder="number" required />
                            </div>
                        </div>
                        <div className="single">
                            <input name="subject" type="text" placeholder="Email Address..." />
                        </div>
                        <textarea name="message" id="" placeholder="Type Your Message"></textarea>
                        <button type="submit" className="rts-btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <div className="rts-map-area rts-section-gapBottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="rts-map-main-wrapper">
              {    <GoogleMapComponent  />}
                    </div>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}

export default ContactUs
