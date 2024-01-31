import { Box, Circle, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AccordionSection2 from '../SubComponents/AccordionSection2';
import SlideText2 from '../SubComponents/SlideText2';
import Navbar2 from '../Navbar2';

function AboutUsDetails() {

    const [data,setData] = useState([]);

    const fetchData = () => {
        fetch('https://ws-tech-backend.onrender.com/aboutUsDetailsRoutes/get')
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0])
            setData(data[0])
        })
    }
    useEffect(() => {
        fetchData()
    },[])

  return (
    <>
        <Navbar2/>
        <Box p={{base:"20px 25px 20px 25px",lg:"30px 50px",xl:"30px 100px 30px 100px"}} mt={{base:"70px",lg:"100px"}}>
            <Box p={{base:"20px 10px 10px 15px",lg:"20px 10px 0px 20px"}}>
                <Text fontSize={{base:"10px",lg:"13px"}}>
                    <ul>
                        <li>{data?.aboutUsDetails?.heading}</li>
                    </ul>
                </Text>
            </Box>
            <Box>
                <Text fontSize={{base:"30px",lg:"50px"}} fontWeight={500}>{data?.aboutUsDetails?.title}</Text>
            </Box>
            <Box w={"100%"} mt={"30px"} display={"flex"} justifyContent={"center"}>
                <Image objectFit={"cover"} w={"100%"} h={"100%"} src={data?.aboutUsDetails?.image} />
            </Box>
            <Box>
                <SlideText2 text={data?.aboutUsDetails?.movingText} />
            </Box>
            <Box mt={{base:"20px",lg:"70px"}}>
                <Flex p={{base:"20px 0px 20px 0px",lg:"0px"}} gap={{base:"40px",lg:"10px"}}  direction={{base:"column",lg:"row"}}>
                    <Box bg={"black"} w={{base:"100%",lg:"50%"}} h={{base:"",lg:"auto"}}>
                        <Image objectFit={"cover"} src={data?.section?.image} h={{base:"",lg:"700px"}} />
                    </Box>
                    
                    <Box w={{base:"100%",lg:"50%"}} p={{base:"",lg:"80px 10px 10px 50px"}}>
                        <Box pl={"15px"}>
                            <Text fontSize={{base:"10px",lg:"13px"}}>
                                <ul>
                                    <li>{data?.section?.title}</li>
                                </ul>
                            </Text>
                        </Box>
                        <Box mt={"10px"}>
                            <Text fontSize={{base:"30px",lg:"35px"}} fontWeight={500}>{data?.section?.description}</Text>
                        </Box>
                        <Box mt={{base:"20px",lg:"40px"}}>
                            <AccordionSection2 content={data?.section?.content} />
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box mt={{base:"40px",lg:"70px"}} position={"relative"}>
                <Box w={"100%"} display={"flex"} justifyContent={"center"}>
                    <Image objectFit={"cover"} w={"100%"} h={"100%"} src={data?.aboutUsDetails?.image2} />
                </Box>

                <Box position={"absolute"} 
                    top={0}
                    left={0}
                    width="100%" display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height="100%">
                    <Box w={"40%"} h={"500px"} display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                        <Circle bg={" linear-gradient(274deg, rgba(115,122,172,1) 0%, rgba(237,167,120,1) 100%)"} size={{base:"100px",lg:'250px'}}>
                            <Text fontSize={{base:"10px",lg:"30px"}} fontWeight={500}>Watch Video</Text>
                        </Circle>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default AboutUsDetails