"use client";


import React from 'react'
import Image from 'next/image'
import BlockCord from "../assets/images/blog/01.webp";
import blogCard from "../assets/images/blog/02.webp";
import blogCard1 from "../assets/images/blog/03.webp";
const Blogs = () => {
  return (
    <div>
      <div className="rts-blog-area rts-section-gap">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="title-center-style-one dark-title">
                    <span className="pre">Latest News</span>
                    <h2 className="title">Articles & Blog Posts</h2>
                </div>
            </div>
        </div>
        <div className="row g-24 mt--30 mt_sm--10">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rts-blog-card-one">
                    <span  className="thumbnail">
                        <Image src={BlockCord} alt="blog_card"  width={500} height={500} />
                        <div className="tag-area">
                            <span className="time">2Years Ago</span>
                            <span className="location">Office</span>
                        </div>
                    </span>
                    <div className="inner-wrapper">
                     
                            <h5 className="title">Modern Construction Techniques Materials Changing</h5>
                 
                        <p className="disc">
                            Construction industry undergone transformations in recent years. With advancements
                            technology & the introduction of new materials
                        </p>
                        {/* <a href="blog-details.html" className="read-more-btn">Read More<i
                                className="fa-sharp fa-regular fa-arrow-right"></i></a> */}
                    </div>
                </div>
            
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              
                <div className="rts-blog-card-one">
                    <span  className="thumbnail">
                        <Image src={blogCard} alt="blog_card"  width={500} height={500} />
                        <div className="tag-area">
                            <span className="time">2Years Ago</span>
                            <span className="location">Office</span>
                        </div>
                    </span>
                    <div className="inner-wrapper">
                   
                            <h5 className="title">Streamlining Projects for Faster Cost Effective Results</h5>
                        
                        <p className="disc">
                            Construction industry undergone transformations in recent years. With advancements
                            technology & the introduction of new materials
                        </p>
                        {/* <a href="blog-details.html" className="read-more-btn">Read More<i
                                className="fa-sharp fa-regular fa-arrow-right"></i></a> */}
                    </div>
                </div>
             
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              
                <div className="rts-blog-card-one">
                    <span  className="thumbnail">
                        <Image src={blogCard1} alt="blog_card"  width={500} height={500}  />
                        <div className="tag-area">
                            <span className="time">2Years Ago</span>
                            <span className="location">Office</span>
                        </div>
                    </span>
                    <div className="inner-wrapper">
                   
                            <h5 className="title">Modern Construction Techniques Materials Changing</h5>
                        
                        <p className="disc">
                            Construction industry undergone transformations in recent years. With advancements
                            technology & the introduction of new materials
                        </p>
                        {/* <a href="blog-details.html" className="read-more-btn">Read More<i
                                className="fa-sharp fa-regular fa-arrow-right"></i></a> */}
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Blogs
