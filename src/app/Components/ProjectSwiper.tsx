"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";



// Image imports
import alizaMention from "../assets/images/portfolio/02.webp";
import azilaMantion from "../assets/images/portfolio/03.webp";
import azilaMantion2 from "../assets/images/portfolio/04.webp";

// Project Data
const projects = [
  {
    id: 1,
    title: "Azila Mansion",
    description: "Luxury Residences, Modern Homes",
    location: "Dubai Marina",
    price: "From $290k",
    client: "RC Builders",
    projectYear: "15 Oct 2019",
    duration: "5Y, 3M",
    image: alizaMention,
  },
  {
    id: 2,
    title: "Azila Mansion",
    description: "Luxury Residences, Modern Homes",
    location: "Dubai Marina",
    price: "From $290k",
    client: "RC Builders",
    projectYear: "15 Oct 2019",
    duration: "5Y, 3M",
    image: azilaMantion,
  },
  {
    id: 3,
    title: "Azila Mansion",
    description: "Luxury Residences, Modern Homes",
    location: "Dubai Marina",
    price: "From $290k",
    client: "RC Builders",
    projectYear: "15 Oct 2019",
    duration: "5Y, 3M",
    image: azilaMantion2,
  },
  {
    id: 4,
    title: "Azila Mansion",
    description: "Luxury Residences, Modern Homes",
    location: "Dubai Marina",
    price: "From $290k",
    client: "RC Builders",
    projectYear: "15 Oct 2019",
    duration: "5Y, 3M",
    image: azilaMantion2,
  },
];

export default function ProjectSwiper() {
  const swiperRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  // Ensure component is only mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="swiper-wrapper-project">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide className="project-area-start-1" key={project.id}  slot="wrapper-start">
            <div className="bg-light">
              <span className="thumbnail">
                <Image src={project.image} alt={project.title} width={600} height={600} />
              </span>
              <div className="inner-content-project">
               
                  <h2 className="title">{project.title}</h2>
             
                <p className="location">{project.description}</p>
                <span  className="location">
                  <i className="fa-sharp fa-regular fa-location-dot"></i> {project.location}
                </span>
                <div className="thumb-wrapper">
                  <div className="single"><span>Price:</span><p>{project.price}</p></div>
                  <div className="single"><span>Client:</span><p>{project.client}</p></div>
                  <div className="single"><span>Project Year:</span><p>{project.projectYear}</p></div>
                  <div className="single"><span>Duration:</span><p>{project.duration}</p></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-next">
        <i className="fa fa-arrow-right"></i>
      </div>
      <div className="swiper-button-prev">
        <i className="fa fa-arrow-left"></i>
      </div>

      {/* Custom Styling */}
      <style jsx>{`
        .swiper-button-prev, .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 20px;
          z-index: 1000;
          border-radius: 50%;
        }
        .swiper-button-prev { left: -50px; }
        .swiper-button-next { right: -50px; }
      `}</style>
    </div>
  );
}
