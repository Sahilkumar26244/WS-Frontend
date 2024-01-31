import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Navbar2 from '../Navbar2';
import wsTech from "../../assets/WS_Tech.pdf";

function PortfolioDetails() {

  const [data,setData] = useState([]);

  const fetchData = () => {
    fetch('https://ws-tech-backend.onrender.com/portfolioDetailsSection/get')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setData(data)
    });
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
    <Navbar2/>
    <Box bg={"white"} pt={{base:"80px",lg:"120px",xl:"120px"}} w={{base:"90%",xl:"1310px"}} m={"auto"}>
      <Box p={{base:"",xl:""}} >
        <Box borderBottom={"1px solid lightgrey"} pt={"30px"} pb={"30px"}>
        <Text fontSize={{base:"25px",lg:"50px"}} fontWeight={500}>Portfolio Details</Text>
        </Box>
      </Box>
      <Box mt={"20px"}>
        <Grid templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        direction={{ base: "column", xl: "row" }} gap={10}>
          {
            data?.map((project,index) => (
              <>
                <Box key={index}>
                  <div class="hvr-grow">
                    <Box w={"100%"} h={{xl:"350px"}}>
                      <Image objectFit={"contain"} w={"100%"} h={"100%"} src={project.image} />
                    </Box>
                  </div>
                  <Box mt={"20px"}>
                    <Flex gap={"15px"}>
                      <Box
                      cursor={"pointer"}
                      border={"1px solid black"}
                      p={"4px 15px 4px 15px"}
                      fontSize={"12px"}
                      borderRadius={"20px"}
                      _hover={{background:"black",color:"white",transition:"0.5s"}}
                        >
                        Apps
                      </Box>
                      <Box
                      cursor={"pointer"}
                      border={"1px solid black"}
                      p={"4px 15px 4px 15px"}
                      fontSize={"12px"}
                      borderRadius={"20px"}
                      _hover={{background:"black",color:"white",transition:"0.5s"}}
                        >
                        Business
                      </Box>
                      <Box
                      cursor={"pointer"}
                      border={"1px solid black"}
                      p={"4px 15px 4px 15px"}
                      fontSize={"12px"}
                      borderRadius={"20px"}
                      _hover={{background:"black",color:"white",transition:"0.5s"}}
                        >
                        Videos
                      </Box>
                    </Flex>
                  </Box>
                  <Box p={"20px 20px 0px 0px"}>
                    <Text fontSize={{base:"15px",lg:"20px"}} fontWeight={600}>{project.title}</Text>
                  </Box>
                  <Box p={"10px 0px 0px 0px"}>
                    <Text fontSize={{base:"10px",lg:"15px"}}>{project.description}</Text>
                  </Box>
                </Box>
              </>
            ))
          }
        </Grid>
      </Box>
      <Box mt={"30px"} display={"flex"} justifyContent={"center"}>
        <a href={wsTech} download="WS_Tech.pdf" class="btn41-43 btn-43">
          Download Profile PPT
        </a>
      </Box>
    </Box>
    </>
  )
}

export default PortfolioDetails