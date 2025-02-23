"use client";

import { useState, useEffect } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";

// Import images
import henryGeorge from "../assets/images/team/05.webp";
import thomasBrynt from "../assets/images/team/04.webp";
import benjaminClarke from "../assets/images/team/06.webp";

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Henry George",
    role: "Safety Officer",
    description:
      "Highly skilled and experienced construction expert, known for managing large-scale projects.",
    image: henryGeorge,
  },
  {
    id: 2,
    name: "Thomas Bryant",
    role: "Civil Engineer",
    description:
      "Expert in modern engineering solutions, ensuring efficiency in construction workflows.",
    image: thomasBrynt,
  },
  {
    id: 3,
    name: "Benjamin Clarke",
    role: "Project Coordinator",
    description:
      "Specializes in project planning, risk assessment, and smooth execution of projects.",
    image: benjaminClarke,
  },
];

export default function MeetOurTeam() {
  const [mounted, setMounted] = useState(false);

  // Ensure component is only mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <section className="py-10">
      <div className="container text-center">
        
        {/* Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>

        {/* Swiper for Mobile */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <TeamCard {...member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// Team Card Component
const TeamCard = ({ name, role, description, image }: any) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
    <Image
      src={image}
      alt={name}
      width={100}
      height={100}
      className="mx-auto rounded-full border-4 border-gray-300"
    />
    <h3 className="text-xl font-semibold mt-4">{name}</h3>
    <p className="text-sm text-gray-500">{role}</p>
    <p className="text-gray-700 mt-2 text-sm">{description}</p>
    <div className="flex justify-center space-x-3 mt-4">
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="#" className="text-blue-400 hover:text-blue-600">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="#" className="text-green-600 hover:text-green-800">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href="#" className="text-purple-600 hover:text-purple-800">
        <i className="fa-brands fa-discord"></i>
      </a>
    </div>
  </div>
);
