import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react';
import { GrLocation } from 'react-icons/gr';
import Navbar2 from '../Navbar2';

function ContactUs() {
  return (
    <>
        <Navbar2/>
        <Box bg={"white"} mt={"90px"}>
            <Box w={{base:"100%",lg:"50%"}} m={"auto"}>
                <Box w={{base:"40%",lg:"17%"}} borderRadius={"20px"} p={"5px 20px 5px 20px"} m={"auto"} bg={"#e7f1fd"} color={"#106eea"} mt={"10px"}>
                    <Text fontSize={"14px"} fontWeight={700} textAlign={"center"}>CONTACT</Text>
                </Box>
            </Box>
            <Box color={"#106eea"} mt={"10px"}>
                <Text textAlign={"center"} fontSize={{base:"25px",lg:"35px"}} fontWeight={600}>Contact Us</Text>
            </Box>
            <Box mt={"10px"}>
                <Text textAlign={"center"} fontSize={{base:"12px",lg:"16px"}} fontWeight={500}>Have any query in mind? Just reach at us.</Text>
            </Box>
            <Box p={{base:"20px 30px 20px 30px",lg:"20px 100px 10px 100px"}}>
                <Flex gap={"20px"} direction={{base:"column",lg:"row"}}>
                    <Box w={{base:"100%",lg:"50%"}}  justifyItems={"center"} p={{base:"20px 30px 20px 30px",lg:"20px 50px 20px 50px"}} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}>
                        <Box w={"50%"} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                            <Box m={"auto"}>
                                <GrLocation style={{fontSize:"30px",color:"#106eea"}}/>
                            </Box>
                            <Text textAlign={"center"} fontWeight={700} fontSize={{base:"15px",lg:"20px"}} color={"#787878"}>Our Address</Text>
                            <Box w={"60%"} m={"auto"}>
                                <Text textAlign={"center"} fontSize={{base:"12px",lg:"15px"}}>Ace City Gr. Noida West
                                Uttar Pradesh-201306</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Flex w={{base:"100%",lg:"50%"}} gap={"20px"} direction={{base:"column",lg:"row"}}>
                        <Box p={"20px 50px 20px 50px"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"} w={{base:"",lg:"50%"}} h={"90%"}>
                            <Box w={"70%"} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                            <Box m={"auto"}>
                                <GrLocation style={{fontSize:"30px",color:"#106eea"}}/>
                            </Box>
                            <Text textAlign={"center"} fontWeight={700} fontSize={{base:"15px",lg:"20px"}} color={"#787878"}>Email Us</Text>
                            <Box w={"100%"} m={"auto"}>
                                <Text textAlign={"center"} fontSize={{base:"12px",lg:"15px"}}>contact@wstech.in</Text>
                            </Box>
                            </Box>
                        </Box>
                        <Box p={"20px 50px 20px 50px"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"} w={{base:"",lg:"50%"}} h={"90%"}>
                            <Box w={"70%"} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                            <Box m={"auto"}>
                                <GrLocation style={{fontSize:"30px",color:"#106eea"}}/>
                            </Box>
                            <Text textAlign={"center"} fontWeight={700} fontSize={{base:"15px",lg:"20px"}} color={"#787878"}>Call Us</Text>
                            <Box w={"100%"} m={"auto"}>
                                <Text textAlign={"center"} fontSize={{base:"12px",lg:"15px"}}>+91 98716 46188</Text>
                            </Box>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Box p={{base:"20px 40px 20px 30px",lg:"20px 100px 10px 100px"}}>
                <Flex gap={"20px"} direction={{base:"column",lg:"row"}}>
                    <Box w={{base:"",lg:"50%"}} h={{lg:"300px"}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2704782213223!2d77.44975721455792!3d28.561639594037945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceeb815f53569%3A0x8bdcafbbc7aac2f5!2sNoida%20Extension%2C%20Ace%20City%20Noida%20Extension%2C%20Sector%201%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306!5e0!3m2!1sen!2sin!4v1626411718107!5m2!1sen!2sin" width="100%" height="384" allowfullscreen> </iframe>
                    </Box>
                    <Box h={{lg:"385px"}} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"} w={{base:"",lg:"50%"}} p={"20px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                        <Flex justifyContent={"space-between"} direction={{base:"column",lg:"row"}} gap={"20px"}>
                            <Box>
                                <Input placeholder='Your Name' w={"250px"} />
                            </Box>
                            <Box>
                                <Input placeholder='Your Email' w={"250px"} />
                            </Box>
                        </Flex>
                        <Box>
                            <Input placeholder='Subject' />
                        </Box>
                        <Box>
                            <Textarea placeholder='Message' h={"150px"} />
                        </Box>
                        <Box m={"auto"}>
                            <Button bg={"#106eea"} color={"white"} p={"15px 25px 15px 25px"}>Send Message</Button>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    </>
  )
}

export default ContactUs