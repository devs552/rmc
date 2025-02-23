
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Correct way to import
import "./assets/css/plugins/odometer.css";
import "./assets/css/plugins/metismenu.css";
import "./assets/css/plugins/magnifying-popup.css"
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/plugins/hover-revel.css";
import "./assets/css/plugins/unicons.css";
import SwiperComponent from "./Components/SwiperComponent";
import ProjectSwiper from "./Components/ProjectSwiper";
import MeetOurTeam from "./Components/MeetOurTeam";
import Testimonials from "./Components/Testimonials";
import BannerSlider from "./Components/BannerSwiper";
import AOS from "aos";
import Script from 'next/script';
import 'aos/dist/aos.css'; // AOS styles
import { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Brand from "./Components/Brand";
import Blogs from "./Components/Blogs";
import Area from "./Components/Area";
import Whychoseus from "./Components/Whychoseus";
import Companyservices from "./Components/Companyservices";
import Funfact from "./Components/funfact";
import BackToTopButton from './Components/BackToTopButton';
import ChatButton from './Components/ChatButton';
export default function Home() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation
          once: true, // Animation happens only once
        });
      }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let position = 0;
        let scrollTimeout: NodeJS.Timeout | undefined;

        function updateMarqueeOnScroll() {
            const marquee = document.querySelector('.marquee') as HTMLElement; 
            if (!marquee) return; // Ensure marquee exists

            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY) {
                position -= 4;
            } else if (currentScrollY < lastScrollY) {
                position += 4;
            }

            marquee.style.transform = `translateX(${position}px)`;
            lastScrollY = currentScrollY;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                marquee.style.transform = `translateX(${position}px)`;
            }, 50);
        }

        window.addEventListener('scroll', updateMarqueeOnScroll);

        return () => {
            window.removeEventListener('scroll', updateMarqueeOnScroll);
        };
    }, []);
    
  return (
    <div>
 <Header />
<div className="banner-swiper-area-one mySwiper-banner-one md:mt-[145px] mt-[0px] " >
<BannerSlider />
</div>
<Funfact />
<Companyservices  />
    <div className="service-section-area">
        <div className="container">
            <div className="row rts-section-gapTop">
                <div className="col-lg-12">
                    <div className="title-center-style-one">
                        <span className="pre">What We Offer</span>
                        <h2 className="title text-dark">Explore Our Services</h2>
                    </div>
                </div>
                <div className="col-lg-12 mt--40">
                    <SwiperComponent />
                </div>
            </div>
        </div>
    </div>
<Whychoseus />
<div className="portfolio-team-area-bg rts-section-gap bg_image bg-dark">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="title-center-style-one">
                    <span className="pre">Recent Projects</span>
                    <h2 className="title text-light">Our Completed Projects</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="row mt--40">
        <div className="col-lg-12 ">
           <ProjectSwiper />
        </div>
    </div>
    </div>
    <div className="rts-team-area-start rts-section-gapTop">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-center-style-one">
                        <span className="pre">Expert Team Members</span>
                        <h2 className="title text-dark">Meet The Awesome Team</h2>
                    </div>
                </div>
            </div>
            <div className="row g-24 mt--20">
                <div className="col-xl-12">
                 <MeetOurTeam />
    </div>
</div>
</div>
</div>
<div className="rts-testimonials-area rts-section-gap">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="title-center-style-one dark-title">
                    <span className="pre">Client’s Feedback</span>
                    <h2 className="title text-dark">What Our Client’s Say After <br/>
                        Get Our Service</h2>
                </div>
            </div>
        </div>
        <div className="row g-24 mt--30 mt_sm--10">
            <div className="col-lg-12">
               <Testimonials />
            </div>
        </div>
    </div>
</div>
<Area />
<Blogs />
<Brand />
<Footer />
<BackToTopButton />
<ChatButton />
 {/* External Scripts */}
            <Script src="/assets/js/plugins/jquery.js" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/bootstrap.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/odometer.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/jquery-appear.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/metismenu.js" strategy="lazyOnload" />
            {/* <Script src="/assets/js/plugins/swiper.js" strategy="lazyOnload" /> */}
            <Script src="/assets/js/plugins/aos.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/nice-select.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/smooth-scroll.js" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/waw.js" strategy="lazyOnload" />

            <Script src="/assets/js/vendor/marker.js" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/map-content.js" strategy="lazyOnload" />
            <Script src="/assets/js/vendor/info-box.js" strategy="lazyOnload" />
            <Script src="https://html.themewant.com/golfy/assets/js/plugins/magnific-popup.js" strategy="lazyOnload" />
            <Script src="/assets/js/plugins/contact.form.js" strategy="lazyOnload" />
            <Script src="/assets/js/main.js" strategy="lazyOnload" />

             {/* External Scripts */}

</div>
  );
 }
