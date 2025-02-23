"use client";


import React from 'react'
import Image from 'next/image'
import consultationBuilding from "../assets/images/service/07.svg";
import designPreConstruction from "../assets/images/service/08.svg"; 
import constructionDelivery from "../assets/images/service/09.svg";
import journeyArea from "../assets/images/about/01.webp";
const Whychoseus = () => {
  return (
    <div>
      <div className="why-choose-us-area rts-section-gap demo-1">
    <div className="container">
        <div className="row align-items-center">
        <div className="col-xl-6 col-lg-12 pr--60 pr_md--0 pr_sm--0">
      <div className="reveal-item overflow-hidden aos-init">
        <div className="reveal-animation reveal-end reveal-primary aos aos-init" data-aos="reveal-end"></div>
        <Image src={journeyArea}  alt="journey-area" width={500} height={500} />
        <div className="vedio-icone">
          <a className="video-play-button play-video" href="#">
            <span><b></b> Watch Video</span>
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
                            How To Work With Elever <br/>
                            Construction Builder
                        </h2>
                    </div>
                    <div className="single-choose-us-one">
                        <div className="icon">
                            <Image src={consultationBuilding} alt="service"  width={100} height={100} />
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
                            <Image src={designPreConstruction} alt="service"  width={100} height={100} />
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
                            <Image src={constructionDelivery} alt="service"  width={100} height={100} />
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

export default Whychoseus
