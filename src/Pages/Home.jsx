import React from 'react';
import ImageCarousel from '../Components/ImageCarousel';
import TechStack from '../Components/TechStack';
import Testimonial2 from '../Components/Testimonial2';
import RecentNews from '../Components/RecentNews';
import Faq from '../Components/Faq';
import AboutUs from '../Components/AboutUs';
import Portfolio from '../Components/Portfolio';
import Services from '../Components/Services';
import SlideText from '../Components/SubComponents/SlideText';
import MoveToTop from '../Components/SubComponents/MoveToTop';
import Technologies from '../Components/Technologies';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import { Box } from '@chakra-ui/react';

function Home() {
  return (
    <>
        <Box>
        <Navbar/>
        <HeroSection/>
        <RecentNews/>
        <SlideText/>
        <AboutUs/>
        <Services/>
        <Portfolio/>
        <Technologies/>
        <TechStack/>
        <Testimonial2/>
        <Faq/>
        </Box>
        
    </>
  )
}

export default Home