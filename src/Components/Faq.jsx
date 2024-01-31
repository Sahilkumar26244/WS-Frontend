import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AccordionSection from './SubComponents/AccordionSection';

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


function Faq() {

    const [faq,setFaq] = useState([]);

    useEffect(() => {
        fetch('https://ws-tech-backend.onrender.com/faqSection/get')
          .then((response) => response.json())
          .then((data) => {
            console.log(data[0].content)
            setFaq(data[0])
          })
          .catch((error) => console.error('Error fetching data: ', error));
      },[])


  return (
    <>
        <Box mt={{base:"50px",lg:"150px"}}>
            <Flex p={{base:"20px 40px 20px 40px",lg:"20px 100px 20px 100px"}} gap={"50px"} direction={{base:"column",xl:"row"}}>
                <Box data-aos="fade-right" bg={"black"} w={{base:"100%",xl:"50%"}} h={{base:"300px",lg:"700px"}} pt={{base:"",lg:"0px"}}>
                    <Image objectFit={"contain"} src={faq.image} h={"100%"} w={"100%"} m={"auto"}  />
                </Box>
                <Box w={{base:"100%",xl:"50%"}} p={{base:"",lg:"90px 10px 10px 50px"}}>
                    <Box pl={"15px"}>
                        <Text fontSize={{base:"10px",lg:"13px"}}>
                            <ul>
                                <li>{faq.title}</li>
                            </ul>
                        </Text>
                    </Box>
                    <Box mt={"10px"}>
                        <Text fontSize={{base:"25px",lg:"35px"}} fontWeight={500}>{faq.description}</Text>
                    </Box>
                    <Box mt={{base:"20px",lg:"40px"}} data-aos="fade-down">
                        <AccordionSection content={faq.content} />
                    </Box>
                </Box>
            </Flex>
        </Box>
    </>
  )
}

export default Faq