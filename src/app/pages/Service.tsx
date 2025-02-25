'use client'
import React from 'react'
import Image from 'next/image'
import service from "../assets/images/service/17.webp"
import journeyArea from "../assets/images/service/01.webp"
import service2 from "../assets/images/service/07.svg"
import service3 from "../assets/images/service/08.svg"
import service4 from "../assets/images/service/09.svg"
import LevelingCards from '../Components/LevelingCards'
import FoundationRecovery from '../Components/FoundationRecovery'
import WaterProofing from '../Components/WaterProofing'
import Link from 'next/link'
const Service = () => {
  return (
    <div>
     
     <div className="rts-banner-area rts-section-gap rts-breadcrumb-area  position-relative">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-area-inner">
                        <span className="water-text">Details</span>
                        <h1 className="title">
                            Experience & Quality
                        </h1>
                        <div className="nav-area-navigation">
                            <Link href="/">home</Link>
                            <Link className="current" href="/service">Service Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="service-details-area rts-section-gapTop pb--60">
        <div className='container'> <div className="service-details-inner-area-wrapper">  <div className="service-details-inner-area-wrapper">
                <h4 className="title">Residential Construction Service Categories</h4>
                <div className="service-main-wrapper-tabs">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="concrete-repair-tab" data-bs-toggle="tab" data-bs-target="#concrete-repair" type="button" role="tab" aria-controls="concrete-repair" aria-selected="true">Concrete Repair</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="foundation-recovery-tab" data-bs-toggle="tab" data-bs-target="#foundation-recovery" type="button" role="tab" aria-controls="foundation-recovery" aria-selected="false">Foundation Recovery</button>
                    </li>
                    
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="waterproofing-tab" data-bs-toggle="tab" data-bs-target="#waterproofing" type="button" role="tab" aria-controls="waterproofing" aria-selected="false">Waterproofing</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="concrete-repair" role="tabpanel" aria-labelledby="concrete-repair-tab">
                    <LevelingCards />
                    </div>
                    <div className="tab-pane fade" id="foundation-recovery" role="tabpanel" aria-labelledby="foundation-recovery-tab">
                     <FoundationRecovery />
                    </div>
                    <div className="tab-pane fade" id="waterproofing" role="tabpanel" aria-labelledby="waterproofing-tab">
                      <WaterProofing />
                    </div>
                  </div>
                </div>
             </div>   {/*  <h1 className='title text-center'>Services</h1> */} </div> 
       
      
        </div>
 
</div>
    <div className="service-details-area rts-section-gapTop pb--60">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="service-details-main-wrapper-thumbnail">
                        <Image src={service} alt="service" className='w-full h-[100%]' width={1600} height={100} />
                    </div>
                    <div className="service-details-inner-area-wrapper">
                        <h4 className="title">Description Of The Service</h4>
                        <p className="disc">
                            Building a custom home is a dream for many, and at Rmc, we believe that the journey to
                            achieving that dream should be as inspiring as the end result. Our Custom Home Building
                            service is designed with you in mind, combining expert craftsmanship, the highest-quality
                            materials, and a commitment to excellence in every phase of construction. From the initial
                            concept discussions to the final touches, our dedicated team is here to guide you through
                            the process, ensuring your new home is a reflection of your vision, lifestyle, and unique
                            personality.

                        </p>
                        <p className="disc">
                            The journey to a custom home begins with understanding. We start each project with an
                            initial consultation to learn about your goals, ideas, and preferences. During this stage,
                            we take the time to listen carefully to your vision. Are you seeking a sprawling estate with
                            traditional details, or perhaps a modern, minimalist design that emphasizes open spaces and
                            natural light? We discuss every aspect, from the overall structure to the small details that
                            make a house truly feel like home.
                        </p>
                        <div className="service-main-wrapper-tabs">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                        data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                        aria-selected="true">What’s Included:</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">No Compromises on Quality</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#contact" type="button" role="tab" aria-controls="contact"
                                        aria-selected="false">Customized Solutions</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                    aria-labelledby="home-tab">
                                    <div className="inner-wrapper-tab-service-wrapper">
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>Personalized Design Consultation:</b> Our team of architects and
                                                designers
                                                collaborate with you to conceptualize a layout that suits your
                                                preferences,
                                                lifestyle, and budget. From layout to finishing touches, every detail is
                                                customized.
                                            </div>
                                        </div>
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>High-Quality Materials & Craftsmanship:</b> We prioritize quality in
                                                every aspect of your home. With carefully sourced materials and skilled
                                                professionals, we ensure that each element, from foundation to
                                                finishing, meets our high standards.
                                            </div>
                                        </div>
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>Project Management & Updates:</b> We take the stress out of building
                                                with a dedicated project manager, providing regular updates and
                                                transparent timelines so you’re informed at every stage.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                    <div className="inner-wrapper-tab-service-wrapper">
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>Personalized Design Consultation:</b> Our team of architects and
                                                designers
                                                collaborate with you to conceptualize a layout that suits your
                                                preferences,
                                                lifestyle, and budget. From layout to finishing touches, every detail is
                                                customized.
                                            </div>
                                        </div>
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>High-Quality Materials & Craftsmanship:</b> We prioritize quality in
                                                every aspect of your home. With carefully sourced materials and skilled
                                                professionals, we ensure that each element, from foundation to
                                                finishing, meets our high standards.
                                            </div>
                                        </div>
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>Project Management & Updates:</b> We take the stress out of building
                                                with a dedicated project manager, providing regular updates and
                                                transparent timelines so you’re informed at every stage.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                                    <div className="inner-wrapper-tab-service-wrapper">
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>Personalized Design Consultation:</b> Our team of architects and
                                                designers
                                                collaborate with you to conceptualize a layout that suits your
                                                preferences,
                                                lifestyle, and budget. From layout to finishing touches, every detail is
                                                customized.
                                            </div>
                                        </div>
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>High-Quality Materials & Craftsmanship:</b> We prioritize quality in
                                                every aspect of your home. With carefully sourced materials and skilled
                                                professionals, we ensure that each element, from foundation to
                                                finishing, meets our high standards.
                                            </div>
                                        </div>
                                        <div className="single">
                                            <div className="icon">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <div className="inner-content">
                                                <b>Project Management & Updates:</b> We take the stress out of building
                                                with a dedicated project manager, providing regular updates and
                                                transparent timelines so you’re informed at every stage.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 

    <div className="rts-call-to-action rts-section-gapBottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="call-to-action-area-service bg_image">
                        <div className="inner">
                            <h3 className="title">Ready to work together</h3>
                            <p className="disc">
                                Whether you have a project in mind and you’re looking for a reliable construction
                                partner or you’re looking to take the next step in your career, we want to hear from
                                you!
                            </p>
                            <Link href="/contact" className="rts-btn btn-primary">Make An Appointment</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
    <div className="why-choose-us-area rts-section-gapBottom">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-12 pr--60 pr_md--0 pr_sm--0">
                    <div className="reveal-item overflow-hidden aos-init">
                        <div className="reveal-animation reveal-end reveal-primary aos aos-init" data-aos="reveal-end">
                        </div>
                        <Image src={journeyArea} alt="journey-area" height={100} width={100} />
                        <div className="vedio-icone">
                            <a className="video-play-button play-video" href="#">
                                <span></span>
                            </a>
                            <div className="video-overlay">
                                <a className="video-overlay-close">×</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12 pt_md--30 pt_sm--50">
                    <div className="how-we-works-wrappers">
                        <div className="title-wrapper-left mb--50">
                            <span className="pre">How We Works</span>
                            <h2 className="title">
                                How To Work With Rmc <br/>
                                Construction Builder
                            </h2>
                        </div>
                        <div className="single-choose-us-one">
                            <div className="icon">
                                <Image src={service2} alt="service" height={100} width={100} />
                                <span>1</span>
                            </div>
                            <div className="info-wrapper">
                                <h5 className="title">Consultation & Planning</h5>
                                <p className="disc">We begin with a thorough consultation to understand your vision, budget,
                                    and project goals. Our team works with you to develop a tailored plan</p>
                            </div>
                        </div>
                        <div className="single-choose-us-one">
                            <div className="icon">
                                <Image src={service3} alt="service" height={100} width={100} />
                                <span>2</span>
                            </div>
                            <div className="info-wrapper">
                                <h5 className="title">Design & Pre-Construction</h5>
                                <p className="disc">We begin with a thorough consultation to understand your vision, budget,
                                    and project goals. Our team works with you to develop a tailored plan</p>
                            </div>
                        </div>
                        <div className="single-choose-us-one">
                            <div className="icon">
                                <Image src={service4} height={100} width={100} alt='' />
                                <span>3</span>
                            </div>
                            <div className="info-wrapper">
                                <h5 className="title">Construction & Delivery</h5>
                                <p className="disc">We begin with a thorough consultation to understand your vision, budget,
                                    and project goals. Our team works with you to develop a tailored plan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    </div>

  )
}

export default Service
