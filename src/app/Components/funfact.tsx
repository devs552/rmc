"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import funfact1 from "../assets/images/service/01.svg";
import funfact2 from "../assets/images/service/02.svg";
import funfact3 from "../assets/images/service/03.svg";

const FunFact = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    growth: 0,
  });

  useEffect(() => {
    const targetCounts = { projects: 1200, clients: 85, growth: 20 };
    const duration = 2000; // Animation duration in ms
    const intervalTime = 50; // Update every 50ms
    const steps = duration / intervalTime;

    let currentCounts = { projects: 0, clients: 0, growth: 0 };
    const increment = {
      projects: targetCounts.projects / steps,
      clients: targetCounts.clients / steps,
      growth: targetCounts.growth / steps,
    };

    const interval = setInterval(() => {
      currentCounts = {
        projects: Math.min(currentCounts.projects + increment.projects, targetCounts.projects),
        clients: Math.min(currentCounts.clients + increment.clients, targetCounts.clients),
        growth: Math.min(currentCounts.growth + increment.growth, targetCounts.growth),
      };

      setCounts({
        projects: Math.floor(currentCounts.projects),
        clients: Math.floor(currentCounts.clients),
        growth: Math.floor(currentCounts.growth),
      });

      if (currentCounts.projects >= targetCounts.projects) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fun-facts-area rts-section-gap">
      <div className="container">
        <div className="row g-24">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-fun-facts-area">
              <center className="icons">
                <Image src={funfact1} alt="service" width={100} height={100} />
              </center>
              <center className="counter title text-dark">{counts.projects}+</center>
              <p className="disc">
                Over 1,000 projects successfully delivered, from residential homes to large developments...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-fun-facts-area">
              <center className="icons">
                <Image src={funfact2} alt="service" width={100} height={100} />
              </center>
              <center className="counter title text-dark">{counts.clients}%</center>
              <p className="disc">
                85% of clients return for future projects, demonstrating our commitment to quality...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-fun-facts-area">
              <center className="icons">
                <Image src={funfact3} alt="service" width={100} height={100} />
              </center>
              <center className="counter title text-dark">{counts.growth}%</center>
              <p className="disc">
                Consistent 20% annual revenue growth over the past five years, reflecting our expanding...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
