import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function AboutUs() {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    // Fetch the initial data from the backend when the component mounts
    // You can use the Fetch API, Axios, or any other HTTP library
    fetch("https://ws-tech-backend.onrender.com/aboutUsSection/get")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0])
        setAboutUs(data[0]);
      });
  }, []);

  return (
    <>
      <Box
        w={"100%"}
        mt={{ base: "50px", lg: "150px" }}
        bg={
          "linear-gradient(90deg, rgba(115,122,172,1) 0%, rgba(237,167,120,1) 100%)"
        }
      >
        <Flex
          justifyContent={"space-between"}
          gap={{ base: "20px", lg: "50px" }}
          p={{ base: "50px 40px 50px 40px", xl: "80px 10px 80px 100px" }}
          direction={{ base: "column", xl: "row" }}
        >
          <Box w={{ base: "100%", xl: "50%" }} data-aos="fade-right">
            <div class="hvr-grow">
              <Image
                cursor={"pointer"}
                w={{ base: "100%", lg: "100%" }}
                h={"100%"}
                src={aboutUs.image}
              />
            </div>
          </Box>
          <Box
            w={{ base: "100%", xl: "50%" }}
            data-aos="fade-down"
            mt={{ lg: "0px", xl: "0px" }}
          >
            <Box pl={{base:"14px",lg:"18px"}}>
              <Text fontSize={{base:"11px",lg:"13px"}}>
                <ul>
                  <li>{aboutUs.title}</li>
                </ul>
              </Text>
            </Box>
            <Box mt={"10px"}>
              <Text fontSize={{ base: "20px", lg: "35px" }} fontWeight={500}>
                {aboutUs.text}
              </Text>
            </Box>
            <Box w={{ base: "90%", lg: "80%" }} mt={"10px"}>
              <Text fontSize={{ base: "15px", lg: "18px" }}>
                {aboutUs.description}
              </Text>
            </Box>
            <Box
              mt={"10px"}
              p={{ base: "10px 0px 0px 0px", lg: "30px 0px 30px 0px" }}
              display={"flex"}
              alignItems={"center"}
            >
              <Box>
                <Link to="/aboutDetails">
                  <Flex
                    w={{ base: "100%", lg: "100%" }}
                    p={"10px 20px 10px 20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"1px solid black"}
                    borderRadius={"22px"}
                    cursor={"pointer"}
                    bg={"black"}
                    color={"white"}
                  >
                    <Text>Explore now</Text>
                    <BsArrowUpRight />
                  </Flex>
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AboutUs;
