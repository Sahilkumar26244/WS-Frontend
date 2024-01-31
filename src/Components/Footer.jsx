import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    fetch("https://ws-tech-backend.onrender.com/servicesSection/get")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.services);
        setServices(result.services);
      });
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <>
      <Box
        bg={"#131619"}
        color={"#a7a7a8"}
        p={"40px"}
        mt={{ base: "50px", lg: "100px" }}
      >
        <Flex
          pb={"50px"}
          justifyContent={"space-around"}
          direction={{ base: "column", lg: "row" }}
          w={{lg:"100%",xl:"97%"}} m={"auto"}
        >
          <Box w={{ base: "100%", lg: "25%" }}>
            <Text fontWeight={800} fontSize={"20px"} color={"white"}>
              WSTECH
            </Text>
            <Box
              pt={"20px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"14px"}
            >
              <Box>
                <Text fontWeight={300} fontSize={{base:"12px",xl:"16px"}}>
                  With dedicated, experienced, & professional tech team we aim
                  simply to develop & design the best.{" "}
                </Text>
              </Box>
              <Box fontWeight={300} fontSize={{base:"12px",xl:"16px"}}>
                <Text>Ace City Gr. Noida West-201306</Text>
                <Text>Uttar Pradesh, India</Text>
              </Box>
              <Box fontWeight={300} fontSize={{base:"12px",xl:"16px"}}>
                <Text>
                  <strong>Phone:</strong> +91 98716 46188
                </Text>
                <Text>
                  <strong>Email:</strong> contact@wstech.in
                </Text>
              </Box>
            </Box>
          </Box>
          <Box mt={{ base: "30px", lg: "0px" }} w={{ base: "100%", lg: "13%" }}>
            <Box pb={{ base: "10px", lg: "20px" }}>
              <Text color={"white"} fontSize={{base:"15px",xl:"17px"}}>Useful Links</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              fontWeight={300}
              fontSize={{base:"12px",xl:"16px"}}
            >
              <Link to="/">
                <div class="hvr-forward">
                  <Text _hover={{ color: "white" }}>Home</Text>
                </div>
              </Link>
              <Link to="/aboutDetails">
                <div class="hvr-forward">
                  <Text _hover={{ color: "white" }}>About Us</Text>
                </div>
              </Link>
              <Link to='/blogs'>
                <div class="hvr-forward">
                  <Text _hover={{ color: "white" }}>Blogs</Text>
                </div>
              </Link>
              <Link to="/portfolioDetails">
                <div class="hvr-forward">
                  <Text _hover={{ color: "white" }}>Portfolio</Text>
                </div>
              </Link>
            </Box>
          </Box>
          <Box mt={{ base: "20px", lg: "0px" }} w={{ base: "100%", lg: "13%" }}>
            <Box pb={{ base: "10px", lg: "20px" }}>
              <Text color={"white"} fontSize={{base:"15px",xl:"17px"}}>Our Services</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              fontWeight={300}
              fontSize={{base:"12px",xl:"16px"}}
            >
              {services?.map((item, index) => (
                <>
                  <Link to={`/service/${item._id}`}>
                    <div class="hvr-forward">
                      <Text _hover={{ color: "white" }}>
                        {item.stack.substring(0, 19)}..
                      </Text>
                    </div>
                  </Link>
                </>
              ))}
            </Box>
          </Box>
          <Box mt={{ base: "20px", lg: "0px" }} w={{ base: "100%", lg: "13%" }}>
            <Box pb={{ base: "10px", lg: "20px" }}>
              <Text color={"white"} fontSize={{base:"15px",xl:"17px"}}>Social</Text>
            </Box>
            <Flex gap={"18px"} alignItems={"center"}>
              <div class="hvr-grow">
                <Box _hover={{ color: "white", cursor: "pointer" }}>
                  <GrFacebookOption style={{ fontSize: "20px" }} />
                </Box>
              </div>
              <div class="hvr-grow">
                <Box _hover={{ color: "white", cursor: "pointer" }}>
                  <AiOutlineInstagram style={{ fontSize: "23px" }} />
                </Box>
              </div>
              <div class="hvr-grow">
                <Box _hover={{ color: "white", cursor: "pointer" }}>
                  <GrTwitter style={{ fontSize: "20px" }} />
                </Box>
              </div>
            </Flex>
          </Box>
          <Box
            mt={{ base: "40px", lg: "0px" }}
            w={{ base: "100%", lg: "20%" }}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
          >
            <Text color={"white"} fontSize={{ base: "20px", xl: "23px" }}>
              Get Our Latest Research News in Your Inbox.
            </Text>
            <div class="hvr-grow">
            <Box
              display={"flex"}
              bg={"white"}
              color={"black"}
              w={"40%"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"20px"}
              p={"10px 20px 11px 20px"}
              cursor={"pointer"}
            >
              <Text fontSize={{ base: "12px", xl: "15px" }} fontWeight={600}>
                Subscribe
              </Text>
              <BsArrowUpRight
                style={{ fontSize: "10px", fontWeight: "bold" }}
              />
            </Box>
            </div>
          </Box>
        </Flex>
        <Flex
          fontSize={{ base: "10px", lg: "15px" }}
          borderTop={"1px solid grey"}
          p={{base:"28px 10px 0px 10px",xl:"28px 40px 0px 40px"}}
          justifyContent={{base:"center",xl:"space-between"}}
          direction={{ base: "column", xl: "row" }}
          gap={{ base: "20px", lg: "" }}
          
        >
          <Box  display={"flex"} justifyContent={"space-between"} w={{base:"100%",xl:"55%"}}>
            <Box>
              <Text>Terms & Condition</Text>
            </Box>
            <Box>
              <Text>Privacy Policy</Text>
            </Box>
          </Box>
          
          <Box w={{base:"100%",xl:"50%"}} display={"flex"} justifyContent={{base:"center",xl:"flex-end"}}>
            <Text>© Copyright Web Solutions Technologies. All Rights Reserved</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Footer;
