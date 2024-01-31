import { Box, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import ImageSlider from './SubComponents/ImageSlider';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

AOS.init({

    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

function Portfolio() {

  const [portfolio,setPortfolio] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    // Fetch previous data from the API when the component loads
    fetch('https://ws-tech-backend.onrender.com/portfolioSection/get')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        console.log(data)
        setLoading(false)
        setPortfolio(data)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      });
  }, []);


  return (
    <div>
    <Flex gap={{base:"0px",lg:"80px"}} direction={{base:"column",xl:"row"}} mt={{base:"50px",lg:"170px"}} alignItems={"center"}>
      <Box data-aos="fade-right" position="relative" w={{base:"100%",xl:"50%"}} h={{base:"700px",lg:"800px"}}>
        <Box w={"100%"} h={{base:"500px",sm:"600px",lg:"100%"}}>
          <Image objectFit={"cover"} h={"100%"} w={"100%"} src="https://cyberdom.qodeinteractive.com/wp-content/uploads/2021/08/h1-img-1.jpg" />
        </Box>

        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%" // You can adjust the width as needed
          height="100%" // You can adjust the height as needed
        >
          {/* Add your content inside this overlay */}
          {loading ? <>
            <Box h={{base:"500px",xl:"100%"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Spinner size={"xl"} color='white' />
            </Box>
            </>:
        <>
        <Box pt={{base:"75px",lg:"170px"}}>
            <ImageSlider portfolio={portfolio} />
          </Box>
        </>}
        </Box>
      </Box>
      <Box data-aos="fade-down" w={{base:"80%",lg:"90%",xl:"50%"}} m={{base:"auto",lg:""}} >
        <Box pl={{base:"14px",lg:"20px"}}>
            <Text fontSize={{base:"10px",lg:"13px"}}>
                <ul>
                    <li>OUR PORTFOLIO</li>
                </ul>
            </Text>
        </Box>
        <Box>
            <Text fontSize={{base:"100px",lg:"200px"}} fontWeight={"bold"}>150+</Text>
        </Box>
        <Box mb={"10px"}>
            <Text fontSize={{base:"20px",lg:"30px"}} fontWeight={500}>Check our Portfolio</Text>
        </Box>
        <Box mb={"10px"}>
            <Text fontSize={"15px"} lineHeight={"25px"} w={"70%"}>Here you may see some of our work</Text>
        </Box>
        <Box mt={"20px"}>
            <Link to={"/portfolioDetails"}>
            <Flex w={{base:"80%",lg:"23%"}} pt={"10px"} pb={"10px"} justifyContent={"center"} alignItems={"center"} border={"1px solid black"} borderRadius={"22px"} cursor={"pointer"} bg={"black"} color={"white"}>
                <Text>Explore now</Text>
                <BsArrowUpRight/>
            </Flex>
            </Link>
        </Box>
      </Box>
    </Flex>
    </div>
  );
}

export default Portfolio;
