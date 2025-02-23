"use client";

import React from 'react'
import Image from 'next/image'
import CTAService from "../assets/images/cta/01.webp";
import Link from 'next/link';
const Area = () => {
  return (
    <div>
      <div className="cta-area-wrapper">
    <div className="container-full ">
        <div className="row g-0 bg-primary  ">
            <div className="col-xl-4">
                <div className="thumbnail">
                    <Image src={CTAService} alt="service"  width={600} height={500} />
                </div>
            </div>
            <div className="col-xl-8">
                <div className="cta-wrapper-inner">
                    <div className="inner">
                        <h2 className="title">
                            Ready to Build Your Dream? <br/>
                            Schedule Your Consultation Today!
                        </h2>
                        <div className="button-wrapper">
                            <Link href="/contact" className="rts-btn btn-white">Contact Us</Link>
                            <Link href="/service" className="rts-btn btn-white">Our Services</Link>
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

export default Area
