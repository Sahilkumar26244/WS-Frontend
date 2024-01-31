import React from 'react'
import Navbar2 from '../Navbar2'
import { Box, Image, Text } from '@chakra-ui/react'
import SlideText from '../SubComponents/SlideText'
import ContactForm from '../SubComponents/ContactForm'

function ContactUs2() {
  return (
    <>
        <Navbar2/>
        <Box p={{base:"20px 25px 20px 25px",lg:"30px 50px",xl:"30px 100px 30px 100px"}} mt={{base:"70px",lg:"100px"}}>
            <Box>
                <Box>
                    <Box p={{base:"20px 10px 10px 15px",lg:"20px 10px 0px 20px"}}>
                        <Text fontSize={{base:"10px",lg:"13px"}}>
                            <ul>
                                <li>OUR LOCATIONS</li>
                            </ul>
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize={{base:"30px",lg:"50px"}} fontWeight={500}>Contact Us</Text>
                    </Box>
                    <Box>
                        <Text>Have any query in mind? Just reach at us..</Text>
                    </Box>
                </Box>
            </Box>
            <Box mt={"50px"}>
                <Image w={"100%"} h={"100%"} objectFit={"cover"} src='https://cyberdom.qodeinteractive.com/wp-content/uploads/2021/09/contact-us-img-2048x732.jpg' />
            </Box>
            <Box>
                <SlideText/>
            </Box>
            <Box mt={"50px"}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2704782213223!2d77.44975721455792!3d28.561639594037945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceeb815f53569%3A0x8bdcafbbc7aac2f5!2sNoida%20Extension%2C%20Ace%20City%20Noida%20Extension%2C%20Sector%201%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306!5e0!3m2!1sen!2sin!4v1626411718107!5m2!1sen!2sin" width="100%" height="384" allowfullscreen> </iframe>
            </Box>
            <Box boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"} w={{base:"100%",xl:"60%"}} m={"auto"} mt={"50px"} p={{base:"40px 30px",lg:"40px 80px 60px 80px"}}>
                <ContactForm/>
            </Box>
        </Box>
    </>
  )
}

export default ContactUs2