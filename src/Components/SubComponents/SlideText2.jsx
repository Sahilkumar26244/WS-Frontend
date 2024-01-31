import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function SlideText2({text}) {

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

export default SlideText2