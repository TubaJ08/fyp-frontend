import React, { useEffect, useState } from "react";
import HeroSection2 from '../components/HeroSection2'
import ServiceCards from '../components/ServiceCards'
import HowWorks from '../components/HowWorks'
import FeaturedServices from '../components/FeaturedService'
import TopRatedSection from '../components/TopRatedSection'
import CallToAction from "../components/CallToAction";






import ImageSection from '../components/ImageSection'
import TrustedProvider from '../components/TrustedProvider'
import BlogSection from '../components/BlogSection'
import CtaSection from '../components/CtaSection'
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";


function Home() {
 



  return (
    <>
       <HeroSection2/>
   <ServiceCards/>
   <HowWorks/>
   <FeaturedServices/>
  
   
   
   
   
  
   
   <WhyChooseUs/>
   <Testimonials/>
   <BlogSection/>
 <CallToAction/>
      
    </>
  );
}

export default Home;
