import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar2 from '../Navbar2';
import { Box, Circle, Flex, Grid, Image, Text } from '@chakra-ui/react';

function ServiceDetailsPage() {

    const [data,setData] = useState({});

    const {id} = useParams();

    const fetchServices = async() => {
        fetch(`https://ws-tech-backend.onrender.com/servicesSection/${id}`)
        .then((res)=>res.json())
        .then((result) => {
          console.log(result.details)
          setData(result.details)
        })
      }
  
      useEffect(() => {
        fetchServices()
      },[id])

      
  return (
    <>
    <Navbar2/>
    <Box mt={"120px"}>
        <Flex p={{base:"30px 35px",lg:"40px 50px",xl:"30px 100px 30px 100px"}} direction={{base:"column",xl:"row"}}>
          <Box w={{base:"100%",lg:"40%"}}>
            <Box pl={"15px"}>
              <Text fontSize={"13px"}>
                <ul>
                  <li>{data.heading}</li>
                </ul>
              </Text>
            </Box>
            <Box mt={"10px"}>
              <Text fontSize={{base:"30px",lg:"40px"}} fontWeight={600}>
                {data.title}
              </Text>
            </Box>
            <Box mt={"10px"} w={{base:"100%",lg:"90%"}}>
              <Text fontSize={{base:"14px",lg:"17px"}} fontWeight={500}>
                {data.description}
              </Text>
            </Box>
            <Box
              mt={"50px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
            >
              
              {data?.moreDetails?.map((feature,index) => (
                <>
                <Flex gap={"10px"} alignItems={"center"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"10px"}
                  borderRadius={"50%"}
                  p={"3px 8px 3px 8px"}
                  border={"1px solid black"}
                >
                  {index+1}
                </Box>
                <Box>
                  <Text fontSize={{base:"10px",lg:"13px"}} fontWeight={500}>
                    {feature.title}
                  </Text>
                </Box>
              </Flex>
                </>
              ))}
            </Box>
          </Box>
          <Box w={{base:"100%",xl:"60%"}} mt={"20px"}>
            <Grid templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
              ]}
              direction={{ base: "column", md: "row" }} gap={15}>
                {data?.moreDetails?.map((feature,index) => (
                    <div class="hvr-grow">
                        <Box cursor={"pointer"} mt={"20px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                            <Box w={"80%"}>
                                <Image src={feature.image} />
                            </Box>
                            <Flex gap={"10px"} alignItems={"center"}>
                              <Circle border={"1px solid black"} size="25px" fontSize={"10px"}>
                              {index+1}
                              </Circle>
                              <Text fontSize={{base:"10px",lg:"13px"}} fontWeight={500}>{feature.title}</Text>
                            </Flex>
                            <Box>
                                <Text fontSize={{base:"15px",lg:"17px"}} fontWeight={500}>{feature.description}</Text>
                            </Box>
                        </Box>
                    </div>
                ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default ServiceDetailsPage