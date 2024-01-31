import React from 'react'
import { Box, Container, Heading, IconButton, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io'
import Slider from 'react-slick';

const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

function HeroSectionSlider({heroSection}) {

  const [slider, setSlider] = React.useState(null)

  const top = useBreakpointValue({ base: '90%', md: '85%' })
  const side = useBreakpointValue({ base: '30%', md: '160px' })

  
  return (
    <>
    <Box m={"auto"} position={'relative'} height={{base:"500px",lg:'500px'}} width={{base:"80%",lg:'500px'}} overflow={'hidden'} mt={{base:"20px",lg:"",xl:"100px"}} mb={{base:"20px",lg:""}}>
    {/* CSS files for react-slick */}
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    {/* Left Icon */}
    <IconButton
      aria-label="left-arrow"
      variant="ghost"
      position="absolute"
      left={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickPrev()}>
      <IoIosArrowBack size="35px" />
    </IconButton>
    {/* Right Icon */}
    <IconButton size={"10px"}
      aria-label="right-arrow"
      variant="ghost"
      position="absolute"
      right={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickNext()}>
      <IoIosArrowForward size="35px" />
    </IconButton>
    {/* Slider */}
    <Slider {...settings} ref={(slider) => setSlider(slider)}>
      {heroSection.map((card, index) => (
        <Box
          key={index}
          height={'100%'}

          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          bg={"white"} >
          {/* This is the block you need to change, to customize the caption */}
          <Container pl={"20px"} pr={"20px"} size="container.lg" height={{base:"600px",lg:"700px"}} position="relative" display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Stack
              spacing={6}
              h={{base:"auto",lg:"auto"}}
              w={'90%'}
              m={"auto"}
              maxW={'lg'}
              
              
              transform="translate(0, -50%)">
              <Heading w={{base:"100%",lg:"100%"}} textAlign={{base:"center",lg:"center"}} fontSize={{ base: '1xl', md: '4xl', lg: '1xl' }}>
                {card.title}
              </Heading>
              <Box pl={{base:"0px",lg:"0px"}} display={"flex"} justifyContent={"center"}>
              <Text fontWeight={"thin"} textAlign={{base:"center",lg:"center"}} w={"60%"} fontSize={{ base: '13px', lg: '14px' }} color="GrayText">
                {card.text}
              </Text>
              </Box>
            </Stack>
          </Container>
        </Box>
      ))}
    </Slider>
  </Box>
    </>
  )
}

export default HeroSectionSlider