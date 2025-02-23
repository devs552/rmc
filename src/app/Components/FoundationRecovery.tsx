'use client';

import Image from "next/image";
import DCL from "../assets/images/residential-service/HP.jpeg";
import PPL from "../assets/images/residential-service/wall_stablization.jpeg";
import BFL from "../assets/images/residential-service/CR.jpg";
import GFL from "../assets/images/residential-service/fjr.jpeg";
import SWL from "../assets/images/residential-service/EW.jpeg";
import VFL from "../assets/images/residential-service/mp.jpeg";

export default function FoundationRecovery() {
  const cards = [
    {
      title: "Helical Piers",
      description:
        "Helical piers offer a durable, deep-foundation solution for stabilizing sinking or shifting structures. Ideal for residential, commercial, and industrial applications, they provide superior load-bearing capacity and minimal site disruption. Whether reinforcing foundations, decks, or retaining walls, helical piers ensure long-term structural integrity with precision installation. Contact us for expert foundation repair and stabilization using advanced helical pier technology.",
      linkText: "MORE Helical Piers INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/V1FJiGgJ3qg",
      imageSrc: DCL,
    },
    {
      title: "Wall Stabilization",
      description:
        "Ensure long-term structural integrity with professional wall stabilization solutions. Whether dealing with bowing, leaning, or cracking walls, our expert techniques—such as carbon fiber reinforcements, helical tiebacks, and wall anchors—restore strength and prevent further damage. Protect your home's foundation and improve property value with cost-effective, engineered wall repair solutions designed for durability and safety. Contact us today for a free consultation on stabilizing your foundation walls!",
      linkText: "MORE Wall Stabilization INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id2",
      imageSrc: PPL,
    },
    {
      title: "Crack Repair",
      description:
        "Crack repair is a crucial maintenance process that restores the strength and appearance of concrete, asphalt, walls, and other surfaces by sealing and reinforcing cracks. Over time, surfaces deteriorate due to weather conditions, heavy loads, or structural shifts, leading to cracks that can weaken foundations and cause safety hazards. Looking for reliable crack repair services? Whether it’s a driveway, parking lot, or building foundation, our experts use advanced techniques to ensure a long-lasting fix. Contact us today for a free inspection!",
      linkText: "MORE Crack Repair INFORMATION",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: BFL,
    },
    {
      title: "Floor Stabilizers & Joist Support",
      description:
        "Floor stabilizers and joist support systems are essential for reinforcing sagging or uneven floors in residential and commercial buildings. Over time, structural components weaken due to heavy loads, moisture, or aging materials, leading to floor instability. Proper support solutions ensure safety, durability, and enhanced load-bearing capacity. ",
      linkText: "More Floor Stabilizers & Joist Support",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: GFL,
    },
    {
      title: "Egress Window Installation & Repair",
      description:
        "Egress window installation and repair are essential for enhancing safety, increasing natural light, and ensuring building code compliance in basements and lower-level spaces. These windows provide a safe exit in case of emergencies while also improving ventilation and energy efficiency. Proper installation and timely repairs prevent leaks, structural damage, and insulation issues.",
      linkText: "More Egress Window Installation & Repair Information",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: SWL,
    },
    {
      title: "Micropiles",
      description:
        "Micropiles are deep foundation elements used to strengthen structures in areas with weak soil, limited access, or high load demands. These small-diameter, high-capacity piles are made of steel casing and grouted reinforcement, making them ideal for underpinning existing foundations, stabilizing slopes, and supporting new construction projects.",
      linkText: "More Micropiles Information",
      linkUrl: "#",
      videoSrc: "https://www.youtube.com/embed/your-video-id3",
      imageSrc: VFL,
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
