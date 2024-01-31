import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function RecentNews() {
  return (
    <>
    <Box mt={{base:"50px",lg:"150px"}}>
        <Flex justifyContent={"space-around"} gap={{base:"20px",lg:""}} p={{base:"30px 50px 30px 50px",lg:"30px 80px 30px 80px"}} direction={{base:"column",xl:"row"}}>
            <Box w={{base:"100%",xl:"25%"}} display={"flex"} flexDirection={"column"} gap={"17px"} mt={"25px"}>
                <Box pl={{base:"14px",lg:"20px"}}>
                    <Text fontSize={{base:"10px",lg:"13px"}}>
                        <ul>
                            <li>Website Development</li>
                        </ul>
                    </Text>
                </Box>
                <Box>
                    <Text fontSize={{base:"20px",lg:"35px"}} fontWeight={600}>Expert Website Development Solutions</Text>
                </Box>
                <Box>
                    <Text fontSize={{ base: "10px", lg: "20px" }} fontWeight={600}>Craft a website that converts. We design, build, and optimize for success.</Text>
                </Box>
                <Box>
                        <Link to='/service/6553284264eef193ba25a81e'>
                        <Flex w={{base:"80%",lg:"45%"}} pt={"10px"} pb={"10px"} justifyContent={"center"} alignItems={"center"} border={"1px solid black"} borderRadius={"22px"} cursor={"pointer"} bg={"black"} color={"white"}>
                            <Text>Explore now</Text>
                            <BsArrowUpRight/>
                        </Flex>
                        </Link>
                </Box>
            </Box>
            <Box w={{base:"100%",xl:"38%"}} bg={"#f2f4f8"} p={"20px"}>
                <Box pl={"20px"}>
                    <Text fontSize={"13px"}>
                        <ul>
                            <li>App Development</li>
                        </ul>
                    </Text>
                </Box>
                <Flex mt={"50px"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"17px"} w={"50%"}>
                        <Text fontSize={"12px"}>August 20, 2020</Text>
                        <Text fontSize={{base:"18px",lg:"20px"}} fontWeight={500}>Innovative App Development Services</Text>
                        <Flex gap={"10px"}>
                            <Box border={"1px solid black"} borderRadius={"20px"} cursor={"pointer"} p={"4px 8px 4px 8px"} fontSize={"12px"} _hover={{background:"black",color:"white",transition:"0.5s"}}>Bussiness</Box>
                            <Box border={"1px solid black"} borderRadius={"20px"} cursor={"pointer"} p={"4px 8px 4px 8px"} fontSize={"12px"} _hover={{background:"black",color:"white",transition:"0.5s"}}>Inovation</Box>
                        </Flex>
                    </Box>
                    <Box w={"50%"}>
                        <div class="hvr-grow">
                        <Image w={"100%"} src='https://cyberdom.qodeinteractive.com/wp-content/uploads/2021/08/blog-image-8.jpg' />
                        </div>
                    </Box>
                </Flex>
                <Box mt={"50px"}>
                    <Link to='/service/6553287564eef193ba25a82e'>
                    <Button variant={"link"} color={"blue"} fontSize={"13px"}>Explore now</Button>
                    </Link>
                </Box>
            </Box>
            <Box w={{base:"100%",xl:"28%"}} bg={"#131619"} color={"white"} p={"20px"}>
                <Box pl={"20px"}>
                    <Text fontSize={"13px"} fontWeight={600}>
                        <ul>
                            <li>Digital Marketing</li>
                        </ul>
                    </Text>
                </Box>
                <Box mt={"55px"} w={"60%"}>
                    <Text fontSize={"25px"} fontWeight={600}>Data-Driven Digital Marketing Strategies</Text>
                </Box>
                <Box mt={"10px"} w={"60%"}>
                    <Text fontSize={"15px"} fontWeight={"light"}>
                    Dominate the digital landscape. We drive targeted traffic and boost conversions.   
                    </Text>
                </Box>
                <Box mt={"10px"}>
                    <Link to='/service/65b9f6e7c07032f307ab25cd'>
                    <Flex w={{base:"80%",lg:"45%"}} pt={"10px"} pb={"10px"} justifyContent={"center"} alignItems={"center"} borderRadius={"22px"} cursor={"pointer"} bg={"white"} color={"black"}>
                        <Text>Explore Now</Text>
                        <BsArrowUpRight/>
                    </Flex>
                    </Link>
                </Box>
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default RecentNews