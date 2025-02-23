'use client';

import Image from "next/image";
import DCL from "../assets/images/residential-service/sp.jpg";
import PPL from "../assets/images/residential-service/bpd.jpg";
import BFL from "../assets/images/residential-service/be.jpg";
import GFL from "../assets/images/residential-service/fl.png";

export default function WaterProofing() {
  const cards = [
    {
      title: "Sump Pump Installation",
      description:
        "Sump pump installation is a crucial solution for preventing basement flooding, water damage, and mold growth by efficiently directing excess water away from your foundation. Whether you need a new sump pump system or a replacement, professional installation ensures reliable performance and long-term protection for your home.",
      linkText: "MORE Sump Pump Installation INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/V1FJiGgJ3qg",
      imageSrc: DCL,
    },
    {
      title: "Basement Perimeter Drains",
      description:
        "Basement perimeter drains are essential for preventing water intrusion, reducing moisture buildup, and protecting your foundation from long-term damage. These drainage systems are installed along the interior or exterior perimeter of your basement to collect and redirect water away from your home, ensuring a dry and stable foundation. ",
      linkText: "MORE Basement Perimeter Drains INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id2",
      imageSrc: PPL,
    },
    {
      title: "Crawlspace & Basement Encapsulation",
      description:
        "Crawlspace and basement encapsulation is a proven solution for controlling moisture, preventing mold growth, and improving indoor air quality. By sealing off your crawlspace or basement with a vapor barrier, insulation, and proper drainage, you can protect your home’s foundation from water damage and enhance energy efficiency.",
      linkText: "MORE Crawlspace & Basement Encapsulation INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: BFL,
    },
    {
      title: "Foundation Leak Repair",
      description:
        "Foundation leak repair is essential for preventing water intrusion, structural damage, and mold growth in your home or building. Cracks and leaks in the foundation can lead to serious issues, including basement flooding and weakened structural integrity. Professional foundation repair services help seal leaks, reinforce the foundation, and ensure long-term durability.",
      linkText: "More Foundation Leak Repair Information",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: GFL,
    },
   
      
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
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
