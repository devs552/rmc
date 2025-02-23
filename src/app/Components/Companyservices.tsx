"use client";

import React from 'react'
import Image from 'next/image'
import arrowupright3 from "../assets/images/icons/arrow-up-right-2.svg";
import journeyArea from "../assets/images/about/01.webp";

const Companyservices = () => {
  return (
    <div>
<div className="about-company-service-area rts-about-company-area rts-section-gap bg_image bg-dark">
    <div className="about-section-area rts-section-gapBottom">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="about-thumbnail-inner-one">
                        <div className="reveal-item overflow-hidden aos-init">
                            <div className="reveal-animation reveal-end reveal-primary aos aos-init"
                                data-aos="reveal-end">
                            </div>
                            <Image src={journeyArea} alt="journey-area"  width={100} height={100} />
                        </div>
                        <div className="content-wrapper">
                            <div className="single">
                                <h5 className="title">500+</h5>
                                <h2 className="counter title"><span className="odometer" data-count="500">00</span>+
                                </h2>
                                <span className="pp">Complete Projects</span>
                            </div>
                            <div className="single primary">
                                <h2 className="counter title"><span className="odometer" data-count="48">00</span>+
                                </h2>
                                <span className="pp">Award Winning</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 pl--80 pl_md--15 pl_sm--10 pt_md--25 mt_sm--25">
                    <div className="about-inner-area-content-one">
                        <span className="pre">About our Company</span>
                        <h2 className="title text-light">Delivering our clients more
                            project clarity, greater insight,
                            and less chaos.</h2>
                        <p className="disc">
                            Artificial Intelligence refers to the development of computer systems that can perform
                            tasks
                            that would typically require human intelligence. It involves the creation of algorithms
                            and
                            models that enable machines to learn, reason, perceive, and make decisions.
                        </p>
                        <p className="disc">
                            There are generally two types of AI: Narrow or Weak AI, which is designed to perform
                            specific tasks, and General or Strong AI, which possesses human-level intelligence and
                            can
                            handle a wide range of tasks.
                        </p>
                        {/* <a href="about.html" className="rts-btn btn-primary border">Explore More <Image
                                src={arrowupright3} alt="service"  width={100} height={100} /></a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Companyservices
