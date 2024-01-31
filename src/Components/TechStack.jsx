import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function TechStack() {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    // Fetch previous data from the API when the component loads
    fetch("https://ws-tech-backend.onrender.com/techstackSection/get")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // Update the state with the received data
        setTech(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Box mt={{ base: "150px", lg: "150px" }} data-aos="fade-up">
        <Flex
          p={{base:"10px 40px 10px 40px",xl:"10px 100px 10px 100px"}}
          gap={"50px"}
          alignItems={"center"}
          direction={{ base: "column", xl: "row" }}
          flexWrap={{base:"wrap",xl:"nowrap"}}
        >
          {tech?.map((item, index) => (
            <>
              <Box key={index} display={"flex"} flexDirection={"column"} gap={{base:"10px",lg:"20px"}} w={{base:"100%",lg:"50%",xl:"25%"}} justifyContent={"center"}>
                <Box w={{base:"50%",xl:"50%"}} m={{base:"auto",lg:0}}>
                  <Image w={"100%"} h={{base:"",lg:"150px"}} src={item.image} />
                </Box>
                <Box>
                  <Text fontSize={{base:"20px",lg:"25px"}} fontWeight={600} textAlign={{base:"center",lg:"left"}}>
                    {item.title}
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={{base:"10px",lg:"17px"}}
                    lineHeight={{base:"",lg:"28px"}}
                    textAlign={{base:"center",lg:"left"}}
                  >
                    {item.text}
                  </Text>
                </Box>
              </Box>
            </>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default TechStack;
