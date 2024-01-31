'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  // Add a scroll event listener to check if the user has scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position
  const background = isSticky ? "white" : "black";
  const color = isSticky ? "black": "white"
  const h = isSticky ? "20px" : "40px"
  const opacity = isSticky ? 0.9 : 1

  const [services, setServices] = useState([]);

    const fetchServices = async () => {
      fetch("https://ws-tech-backend.onrender.com/servicesSection/get")
        .then((res) => res.json())
        .then((result) => {
          console.log(result.services);
          setServices(result.services);
        });
    };

    useEffect(() => {
      fetchServices();
    }, []);

  return (
    <Box>
      <Flex
        bg={background}
        color={color}
        minH={h}
        px={{ base: 10,md: "50px",xl:"100px" }}
        py={{base:"0px",md:"0px"}}
        borderBottom={1}
        align={'center'}
        position="fixed" // Add sticky positioning
        top="0" // Stick to the top of the viewport
        zIndex="1000"
        as='nav'
        w={"100%"}
        opacity={opacity}
        gap={"20px"}
        >
        <Flex w={"100%"}
        py={{ base: 2, lg: 1 }}
        justify={{ base: "center", md: "start" }}
        justifyContent={"space-between"}>

          <Flex py={{ base: 6,lg:h }} flex={{ base: 1 }}  justifyContent={{base:"",xl:"space-between"}} alignItems={"center"}>
            <Link to='/'>
              <Box w={{base:"100%",lg:"100%"}} display={"flex"}>
                <Text fontWeight={800} fontSize={"20px"} >WSTECH</Text>
              </Box>
            </Link>

            <Flex display={{ base: 'none', md: 'none',lg:"none",xl:"flex" }} alignItems={"center"}>
              <DesktopNav color={color} background={background} services={services} />
            </Flex>
          </Flex>

          <Flex
            alignItems={"center"}
            flex={{ base: 0, md: 0 }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }} >
            <IconButton
              color={color}
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          
        </Flex>

        
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav opacity={opacity} background={background} color={color} services={services} />
      </Collapse>
    </Box>
    
  )
}

const DesktopNav = ({color,background,services}) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  


  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <div class='hvr-grow'>
              <Link to={navItem.href ?? "#"}>
              <Box
                as="a"
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={color}
                _hover={{
                  textDecoration: 'none',
                  color: color,
                }}>
                {navItem.label}
              </Box>
              </Link>
              </div>
              
            </PopoverTrigger>

            {navItem.label == "Services" ? 
            <>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={background}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {services?.map((service,index) => (
                    <DesktopSubNav key={index} service={service} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
            </>:
            <>
            {navItem.children && (
              <PopoverContent border={0}
              boxShadow={'xl'}
              bg={background}
              p={4}
              rounded={'xl'}
              minW={'sm'} >
                <Stack>
                  <Box as='a' p={2} rounded={'md'} _hover={{ bg: useColorModeValue('linear-gradient(90deg, rgba(115,122,172,1) 0%, rgba(237,167,120,1) 100%)', 'gray.900') }}>
                    <Link to="/pdfviewer" >
                    <Text transition={'all .3s ease'}
                    _hover={{ color: 'black' }}
                    fontWeight={500} cursor={"pointer"}>View Profile PPT</Text>
                    </Link>
                  </Box>
                </Stack>
              </PopoverContent>
            )}
            </>}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ service }) => {
  return (
    <Box
      as="a"
      href={`/service/${service._id}`}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('linear-gradient(90deg, rgba(115,122,172,1) 0%, rgba(237,167,120,1) 100%)', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          
        <Link to={`/service/${service._id}`}>
        <Text
          transition={'all .3s ease'}
          _groupHover={{ color: 'black' }}
          fontWeight={500}>
          {service.stack}
        </Text>
        </Link>
          
          
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'black'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = ({opacity,background,color,services}) => {
  return (
    <Stack opacity={opacity} position="fixed" // Add sticky positioning
    top="0" // Stick to the top of the viewport
    zIndex="1000" w={"100%"} bg={background} p={4} display={{ xl: 'none' }} mt={"78px"} color={color}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} color={color} services={services} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href , color , services }) => {
  const { isOpen, onToggle } = useDisclosure()

  console.log(services,"nav")

  return (
    <Stack borderBottom={`1px solid ${color}`} spacing={4}  p={"10px"}>
      <Box display={"flex"} w={"20%"}
        py={2}
        as="a"
        
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <a href={href ?? '#'} color={color} fontWeight={600}>
          {label}
        </a>
        {children && (
          <><Icon onClick={children && onToggle}
          as={ChevronDownIcon}
          transition={'all .25s ease-in-out'}
          transform={isOpen ? 'rotate(180deg)' : ''}
          w={6}
          h={6}
        /></>
        )}
      </Box>

      {label == "Services" ? <>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {services.map((e,i) => (
            <>
            <Link to={`/service/${e._id}`}>
            <Box py={2}>
            {e.stack}
            </Box>
            </Link>
            </>
          ))}
            
        </Stack>
      </Collapse>
      </>:
    <>
    <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          <Link to="/pdfviewer">
          <Box py={2}>
            View Profile PPT
          </Box>
          </Link>
            
        </Stack>
      </Collapse>
    </>}
    </Stack>
  )
}



const NAV_ITEMS = [
  {
    label: 'Home',
    href:"/"
  },
  {
    label: 'About',
    href:"/aboutDetails"
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Web Development',
        subLabel: 'Find your dream design job',
        href: '/webDevelopment',
      },
      {
        label: 'Web Design',
        subLabel: 'An exclusive list for contract work',
        href: '/webDesign',
      },
      {
        label: 'Mobile Development',
        subLabel: 'An exclusive list for contract work',
        href: '/mobileDevelopment',
      },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolioDetails',
    children: [
      {
        label: 'Web Development',
        subLabel: 'Find your dream design job',
        href: '/webDevelopment',
      }
    ],
  },
  {
    label: 'Blogs',
    href: '/blogs',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]