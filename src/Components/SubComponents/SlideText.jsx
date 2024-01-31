import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function SlideText() {

  const [text,setText] = useState("");

  useEffect(()=>{
    fetch('https://ws-tech-backend.onrender.com/movingTextSection/get')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        
        // console.log(data[0].text)
        setText(data[0].text)
      })
      .catch((error) => console.error(error));
},[])
  return (
    <>
    <Box
        w="100%"
        h="130px"
        overflow="hidden"
        position="relative"
        mt={{base:"20px",lg:"70px"}}
      >
        <marquee style={{fontSize:"90px",textShadow:"-1px -1px 0 #16191c,1px -1px 0 #16191c,-1px 1px 0 #16191c,1px 1px 0 #16191c",color:"white",fontWeight:600}}
          position="absolute"
          whiteSpace="nowrap"
          animation="slide 30s linear infinite"
          fontSize={"90px"}
          fontWeight={600}
          fontFamily={"DM Sans"}
          textShadow={"-1px -1px 0 #16191c,1px -1px 0 #16191c,-1px 1px 0 #16191c,1px 1px 0 #16191c"}
          color={"white"}
          letterSpacing={"5px"}
        >
          {text}
        </marquee>
      </Box>
    </>
  )
}

export default SlideText