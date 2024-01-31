import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

function ContactForm() {
  return (
    <div>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Box>
                <Text textAlign={"center"} fontSize={{base:"30px",lg:"40px"}} fontWeight={700}>Contact Us</Text>
            </Box>
            <Box>
                <Flex gap={"30px"} direction={{base:"column",lg:"row"}} fontSize={"17px"} fontWeight={600}>
                    <Box w={{base:"100%",lg:"50%"}}>
                        <Text>Name</Text>
                        <Input borderRadius={"0px"} placeholder='Enter Your Name'  />
                    </Box>
                    <Box w={{base:"100%",lg:"50%"}}>
                        <Text>Email</Text>
                        <Input borderRadius={"0px"} placeholder='Enter Your Email'  />
                    </Box>
                </Flex>
            </Box>
            <Box fontSize={"17px"} fontWeight={600}>
                <Text>Subject</Text>
                <Input borderRadius={"0px"} placeholder='Subject' />
            </Box>
            <Box fontSize={"17px"} fontWeight={600}>
                <Text>Message</Text>
                <Textarea borderRadius={"0px"} placeholder='Enter Your Message' />
            </Box>
            <Box>
                <Button p={"10px 40px"} fontSize={"16px"} fontWeight={600} borderRadius={"0px"} bg={"black"} color={"white"}>SUBMIT</Button>
            </Box>
        </Box>
    </div>
  )
}

export default ContactForm