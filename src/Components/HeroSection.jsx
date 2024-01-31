import { Box, Circle, Flex, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { IoEarthOutline } from 'react-icons/io5'
import HeroSectionSlider from './SubComponents/HeroSectionSlider'

function HeroSection() {

    const [heroSection,setHeroSection] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        // Fetch previous data from the API when the component loads
        fetch('https://ws-tech-backend.onrender.com/heroSection/get')
          .then((response) => response.json())
          .then((data) => {
            // Update the state with the received data
            // console.log(data)
            setHeroSection(data)
            setLoading(false)
          })
          .catch((error) => {
            setLoading(false)
            console.error(error)
        });
      }, []);

      
  return (
    <>
    <Box mt={{base:"60px",lg:"100px"}} >
        <Flex direction={{base:"column",xl:"row"}} height={{lg:"auto"}}>
            <Box bg={"black"} color={"white"} w={{base:"100%",xl:"50%"}} p={{base:"50px 50px 30px 40px",xl:"70px 80px 100px 100px"}} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Box pl={"14px"}>
                    <Text fontSize={{base:"10px",lg:"14px"}}>
                        <ul>
                            <li>Web Solutions Technologies</li>
                        </ul>
                    </Text>
                </Box>
                <Box pl={{base:"5px",lg:"0px"}} pt={{base:"15px",lg:"0px"}}>
                    <Text textAlign={{base:"left",lg:"left"}} fontSize={{base:"30px",lg:"60px"}} fontWeight={600} lineHeight={{base:"40px",lg:"80px"}}>
                    Where Data Meets Creativity, and Success is Born!
                    </Text>
                </Box>
                <Box mt={{base:"30px",lg:"30px"}} mb={{base:"30px",lg:"0px"}} pl={{base:"0px",lg:"0px"}}>
                    <Flex w={{base:"65%",lg:"35%"}} pt={"10px"} pb={"10px"} justifyContent={"center"} alignItems={"center"} borderRadius={"22px"} cursor={"pointer"} bg={"white"} color={"black"} gap={"8px"}>
                    <Text fontWeight={600}>More Information</Text>
                    <BsArrowUpRight style={{fontWeight:"bold"}}/>
                    </Flex>
                </Box>  
                <Flex direction={{base:"column",lg:"row"}} justifyContent={"space-between"}>
                    <Box gap={"3px"} color={"lightgrey"} display={"flex"} flexDirection={"column"} alignItems={"baseline"} justifyContent={"end"} pb={"20px"} pl={{base:"5px",lg:"0px"}} w={{base:"",lg:"40%"}}>
                        <IoEarthOutline/>
                        <Text>Problem.</Text>
                        <Text>Technology.</Text>
                        <Text>Solution.</Text>
                    </Box>
                    <Box m={{base:"auto",lg:"0"}} w={"40%"} h={"200px"} display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                        <Circle display={"flex"} flexDirection={"column"} bg={" linear-gradient(274deg, rgba(115,122,172,1) 0%, rgba(237,167,120,1) 100%)"} size={{base:"150px",lg:'220px'}}>
                            
                            <Text color={"black"}  fontWeight={500}>360°</Text>
                            <Text color={"black"} fontSize={{base:"10px",lg:"10px"}}>coverage for your brand!</Text>
                            
                            
                        </Circle>
                    </Box>
                </Flex>
            </Box>
            <Box w={{base:"100%",xl:"50%"}} bg={"linear-gradient(90deg, rgba(115,122,172,1) 0%, rgba(237,167,120,1) 100%)"}>
            {loading ? <>
                    <Box h={{base:"500px",xl:"100%"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Spinner size='xl' />
                    </Box>
                    </>
            :
            <>
                <HeroSectionSlider heroSection={heroSection} />
            </>
            }
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default HeroSection