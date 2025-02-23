"use client";
import { Swiper,SwiperSlide } from "swiper/react";

import React from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/bundle";

import { Autoplay } from "swiper/modules";

import brand1 from "../assets/images/brand/01.svg";
import brand2 from "../assets/images/brand/02.svg";
import brand3 from "../assets/images/brand/03.svg";
import brand4 from "../assets/images/brand/04.svg";
import brand5 from "../assets/images/brand/05.svg";
import brand6 from "../assets/images/brand/06.svg";

const Brand = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <div className="rts-brand-area rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                <div className="single-brand">
                  <Image src={brand} alt={`brand-${index}`} width={100} height={100} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
);
};

export default Brand;
