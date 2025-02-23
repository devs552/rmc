'use client';

import Image from "next/image";
import DCL from "../assets/images/residential-service/dcl.jpg";
import PPL from "../assets/images/residential-service/ppl.jpeg";
import BFL from "../assets/images/residential-service/bfl.jpg";
import GFL from "../assets/images/residential-service/gfl.jpg";
import SWL from "../assets/images/residential-service/swl.jpeg";
import VFL from "../assets/images/residential-service/VFL.jpg";
import RHL from "../assets/images/residential-service/RHL.jpg";
import MJK from "../assets/images/residential-service/mdj.jpg"
import CCS from "../assets/images/residential-service/CCS.jpeg"
export default function LevelingCards() {
  const cards = [
    {
      title: "Driveway Concrete Leveling",
      description:
        "Restore your uneven driveway with professional concrete leveling to eliminate trip hazards and improve curb appeal. Our cost-effective driveway lifting technique prevents cracks and future damage. Get a smooth, durable, and safe driveway with our expert concrete leveling services today!",
      linkText: "MORE DRIVEWAY LEVELING INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/V1FJiGgJ3qg",
      imageSrc: DCL,
    },
    {
      title: "Porch & Patio Leveling",
      description:
        "Enhance your outdoor space with expert porch & patio leveling to eliminate cracks, sinking, and uneven surfaces. Our concrete lifting services restore stability, prevent water damage, and improve safety. Get a smooth, long-lasting patio or porch with our professional leveling solutions today!",
      linkText: "MORE PORCH & PATIO LEVELING INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id2",
      imageSrc: PPL,
    },
    {
      title: "Basement Floor Leveling",
      description:
        "Restore stability and safety with professional basement floor leveling to fix uneven surfaces, cracks, and sinking areas. Our concrete leveling solutions ensure a smooth, durable foundation, preventing moisture issues and structural damage. Get a long-lasting, even basement floor with our expert services today!",
      linkText: "MORE BASEMENT FLOOR LEVELING INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: BFL,
    },
    {
      title: "Garage Floor Leveling",
      description:
        "Fix uneven, cracked, or sunken surfaces with professional garage floor leveling for a smooth, safe, and durable foundation. Our concrete leveling solutions prevent water pooling, enhance stability, and improve the longevity of your garage floor. Get expert garage floor repair for a seamless finish today!",
      linkText: "More Garage Floor Leveling Information",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: GFL,
    },
    {
      title: "Sidewalk Leveling",
      description:
        "Ensure safe, even walkways with professional sidewalk leveling to eliminate trip hazards and improve curb appeal. Our concrete lifting services restore sunken sidewalks quickly and affordably, preventing further damage and costly replacements. Get expert sidewalk repair for a smooth, durable surface today!",
      linkText: "More Sidewalk Leveling Information",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: SWL,
    },
    {
      title: "Void Fill",
      description:
        "Prevent structural damage with professional void filling that stabilizes soil and supports concrete surfaces. Our polyurethane foam injection effectively fills gaps under driveways, sidewalks, and foundations, preventing sinking and erosion. Get long-lasting concrete void fill solutions for a safer, more durable property!",
      linkText: "More Void Fill Information",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: VFL,
    },
    {
        title: "Road and Highway Leveling",
        description:
          "Ensure smooth, durable, and safe roads with expert road and highway leveling services. Our advanced concrete lifting and stabilization techniques eliminate uneven surfaces, potholes, and trip hazards, improving road safety and longevity. Perfect for highways, streets, and industrial pavements, our cost-effective solutions reduce maintenance costs and extend pavement lifespan. Enhance roadway stability and driving comfort with precision leveling. Contact us today for professional asphalt and concrete road repair solutions!",
        linkText: "More Road and Highway Leveling Information",
        linkUrl: "#",
        videoSrc: "https://www.youtube.com/embed/your-video-id3",
        imageSrc: RHL,
      },
      {
        title: "Mudjacking",
        description:
          "Mudjacking is an effective and cost-efficient concrete leveling method that lifts sunken driveways, sidewalks, and patios. This process involves injecting a specialized slurry beneath the surface to restore stability and eliminate uneven slabs. Ideal for residential and commercial properties, mudjacking enhances safety, prevents structural damage, and extends the lifespan of concrete surfaces. If you need fast and affordable concrete repair, mudjacking is a reliable solution. Contact us today for expert concrete leveling services!",
        linkText: "More Mudjacking Information",
        linkUrl: "#",
        videoSrc: "https://www.youtube.com/embed/your-video-id3",
        imageSrc: MJK,
      },
      {
        title: "Concrete Caulking Services",
        description:
          "Enhance the longevity of your concrete with professional concrete caulking services. We seal cracks and joints in driveways, sidewalks, patios, and foundations to prevent water damage, erosion, and further deterioration. Using high-quality, weather-resistant sealants, we ensure a durable and smooth finish. Protect your investment with expert concrete crack repair and joint sealing to maintain a safe and visually appealing surface.",
        linkText: "Concrete Caulking Services",
        linkUrl: "#",
        videoSrc: "https://www.youtube.com/embed/your-video-id3",
        imageSrc: CCS,
      },
      
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <div className="relative">
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <iframe
                className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500"
                src={card.videoSrc}
                title={card.title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-[22px] font-bold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 text-[12px] mt-2">{card.description}</p>
              <a
                href={card.linkUrl}
                className="inline-block mt-4 px-6 py-3 bg-[#f84e1d] text-light text-[10px] rounded-lg hover:bg-red-800 transition"
              >
                {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
