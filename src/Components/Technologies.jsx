import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';


function Technologies() {

    const [technology,setTechnology] = useState([]);

    useEffect(() => {
        // Fetch data from your backend
        fetch('https://ws-tech-backend.onrender.com/technologiesSection/get')
          .then((response) => response.json())
          .then((data) => {
            // console.log(data[0]);
            setTechnology(data[0])
          })
          .catch((error) => console.error('Error fetching data: ', error));
      }, []);
    
  return (
    <div>
    
    <Box p={{base:"30px 40px 30px 40px",xl:"30px 100px 30px 105px"}} mt={{base:"150px",lg:"150px"}}>
        <Box pl={{base:"14px",lg:"20px"}}>
            <Text fontSize={{base:"10px",lg:"13px"}}>
                <ul>
                    <li>{technology.title}</li>
                </ul>
            </Text>
        </Box>
        <Box mt={"10px"}>
            <Text fontSize={{base:"20px",lg:"50px"}} fontWeight={500}>{technology.heading}</Text>
        </Box>
        <Box mt={"10px"}>
            <Text fontSize={{ base: "10px", lg: "20px" }} fontWeight={600}>{technology.description}</Text>
        </Box>
        <Grid templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(5, 1fr)",
          ]}
          direction={{ base: "column", md: "row" }} borderTop={"1px solid #e4e4e4"} borderBottom={"1px solid #e4e4e4"} mt={"50px"} gap={"40px"} p={"50px 20px 50px 20px"}>
            {technology?.content?.map((item,index) => (
                <>
                <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                    <Box display={"flex"} justifyContent={"center"}>
                        <div class="hvr-grow"><Image src={item.image} /></div>
                    </Box>
                    <Box>
                        <Text textAlign={"center"} fontSize={{base:"10px",lg:"15px"}}>{item.text}</Text>
                    </Box>
                </Box>
                </>
            ))}
        </Grid>
    </Box>
    
    
    </div>
  )
}

export default Technologies