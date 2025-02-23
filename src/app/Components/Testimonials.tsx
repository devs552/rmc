"use client";
import { Swiper,SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";


// ✅ Dynamically import Swiper (Fix SSR Issues)

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import images
import sophiaAnne from "../assets/images/testimonials/01.webp";
import alenaJoe from "../assets/images/testimonials/02.webp";

// Testimonials Data
const testimonials = [
  { id: 1, name: "Sophia Anne Harris", feedback: "Great service!", rating: 4.8, image: sophiaAnne },
  { id: 2, name: "Alena Joe Harris", feedback: "Amazing experience!", rating: 4.8, image: alenaJoe },
];

export default function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ✅ Ensures Swiper loads only after mounting
  }, []);

  if (!isClient) return null; // ✅ Prevents hydration mismatch

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop={testimonials.length > 2} // ✅ Prevents Swiper Loop Error
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}  slot="wrapper-start">
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// Testimonial Card Component
const TestimonialCard = ({ name, feedback, rating, image }: any) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-lg mx-auto">
    <p className="text-gray-700 italic mb-4">“{feedback}”</p>
    <div className="flex items-center justify-center space-x-4">
      <Image src={image} alt={name} width={80} height={80} className="rounded-full border-4 border-gray-300" />
      <div>
        <h5 className="font-semibold">{name}</h5>
      </div>
    </div>
    <div className="mt-3 flex items-center justify-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <i key={index} className={`fa-solid fa-star ${index < rating ? "text-yellow-400" : "text-gray-300"}`} />
      ))}
      <p className="ml-2 text-gray-700">{rating} Ratings</p>
    </div>
  </div>
);
