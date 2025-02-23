"use client";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";


// Import Images
import arrowupright2 from "../assets/images/icons/arrow-up-right-1.svg";
import Link from "next/link";

const banners = [
  {
    id: 1,
    title: "Build Your Dream Project with Us Today!",
    description:
      "We are dedicated to building structures that last and relationships that endure. With a focus on quality, precision, and innovation, we provide a full range of construction services.",
  },
  {
    id: 2,
    title: "Let Us Help You Build Extraordinary!",
    description:
      "We are dedicated to building structures that last and relationships that endure. With a focus on quality, precision, and innovation, we provide a full range of construction services.",
  },
  {
    id: 3,
    title: "Start Building Your Project Today!",
    description:
      "We are dedicated to building structures that last and relationships that endure. With a focus on quality, precision, and innovation, we provide a full range of construction services.",
  },
];

export default function BannerSlider() {
  return (
    <section className="relative ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="relative w-full "
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="banner-area flex items-center justify-center text-center bg-gray-900 text-white py-20 banner-area-one-start rts-section-gap bg_banner-one bg_image">
              <div className="max-w-3xl px-6">
                <span className="text-sm uppercase tracking-wide text-gray-300">Building The Better Future</span>
                <h1 className="text-4xl font-bold mt-3">{banner.title}</h1>
                <p className="mt-4 text-lg">{banner.description}</p>
                <div className="mt-6">
                  <Link href="/service" className="inline-flex items-center bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
                    Our Services
                    <Image src={arrowupright2} alt="arrow" width={10} height={10} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
