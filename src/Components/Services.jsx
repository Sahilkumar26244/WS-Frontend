import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(-1);

  const fetchServices = async () => {
    fetch("https://ws-tech-backend.onrender.com/servicesSection/get")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.services)
        setServices(result.services);
      });
  };

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    // Preload images
    services.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
  }, [services]);

  return (
    <>
      <Box
        p={{ base: "20px 40px 20px 40px", xl: "30px 100px 30px 100px" }}
        mt={{ base: "50px", lg: "90px" }}
      >
        <Box borderBottom={"1px solid lightgrey"} pb={"40px"}>
          <Box pl={{base:"14px",lg:"20px"}}>
            <Text fontSize={{base:"10px",lg:"13px"}}>
              <ul>
                <li>OUR SERVICES</li>
              </ul>
            </Text>
          </Box>
          <Box w={{ base: "100%", lg: "60%" }} mt={"20px"}>
            <Text fontSize={{ base: "10px", lg: "20px" }} fontWeight={600}>
              Web Solutions Technologies is a full-service custom web design
              agency who focusses in designing websites & Apps that
              automatically entice the target audience of any business. For more
              than a decade, we have been serving businesses with user-centric
              designs with a combination of naive and attractive graphics.
            </Text>
          </Box>
        </Box>
        <Box>
          {services?.map((service, index) => (
            <>
              <Box>
                <Flex
                  
                  direction={{ base: "column", lg: "row" }}
                  gap={"20px"}
                  justifyContent={"space-between"}
                  pt={"40px"}
                  pb={"40px"}
                  alignItems={"center"}
                  borderBottom={"1px solid lightgrey"}
                  cursor={"pointer"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"20px"}
                    w={{ base: "100%", lg: "60%" }}
                  >
                    <Box w={{ base: "", lg: "70%" }}>
                      <Text
                        fontSize={{ base: "20px", lg: "30px" }}
                        fontWeight={500}
                        onMouseEnter={() => {
                          setHoveredServiceIndex(index);
                        }}
                        onMouseLeave={() => {
                          setHoveredServiceIndex(-1); // Reset to -1 when leaving
                        }}
                      >
                        {service.stack}
                      </Text>
                    </Box>
                    <Flex w={{ base: "", lg: "80%" }} gap={"20px"} flexWrap={"wrap"}>
                      
                        {service.details.moreDetails?.map((detail) => (
                          <>
                          <Box cursor={"pointer"}
                          border={"1px solid black"}
                          p={"4px 8px 4px 8px"}
                          fontSize={"12px"}
                          borderRadius={"20px"}
                          _hover={{
                            background: "black",
                            color: "white",
                            transition: "0.5s",
                          }}>
                            {detail.title}
                          </Box>
                          </>
                        ))}
                      
                    </Flex>
                  </Box>
                  <Box
                    pr={{ base: "50px", lg: "0px" }}
                    position="relative"
                    w={{ base: "100%", lg: "40%" }}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <Box w={"50%"} display={{ base: "none", xl: "flex" }}>
                      <img
                        src={hoveredServiceIndex === index ? service.image : ""}
                        alt="Loading.."
                        style={{
                          width: "500px",
                          height: "300px",
                          opacity: hoveredServiceIndex === index ? 1 : 0,
                          transition: "opacity 0.3s",
                          position: "absolute",
                          top: "0px",
                          right: "200px",
                          objectFit:"cover"
                        }}
                      />
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      gap={"20px"}
                      w={{ base: "100%", lg: "90%", xl: "30%" }}
                      
                    >
                      <Link to={`/service/${service._id}`}>
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
                </Flex>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Services;
