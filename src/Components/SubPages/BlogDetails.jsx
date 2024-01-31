import React, { useEffect, useState } from "react";
import Navbar2 from "../Navbar2";
import { Box, Flex, Image, Input, Spinner, Text } from "@chakra-ui/react";
import BlogDetailsSidebar from "../SubComponents/BlogDetailsSidebar";
import { useParams } from "react-router-dom";

function BlogDetails() {

    const {id} = useParams();

    const [data,setData] = useState({});
    const [loading,setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        fetch(`https://ws-tech-backend.onrender.com/blog/${id}`)
        .then((response) => response.json())
        .then((data) => {
        console.log(data)
        setData(data)
        setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    },[id])
  return (
    <div>
      <Navbar2 />
      <Box w={{lg:"100%",xl:"1500px"}} m={"auto"}
        bg={"white"}
        p={{ base: "30px", lg: "30px 100px 30px 100px" }}
        mt={"150px"}
      >
      <Flex gap={"20px"} direction={{base:"column",lg:"row"}}>
        <Box w={{base:"100%",lg:"75%"}} display={"flex"} flexDirection={"column"} gap={"20px"}>
            {loading ? <>
                <Box h={"400px"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                    <Spinner thickness='5px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='black.500'
                    size='xl' />
                </Box>
                </>:<>
                <Box>
                <Image src={data?.image} />
            </Box>
            <Box>
                <Text fontWeight={400} fontSize={"13px"}>{data?.date} / By {data.owner}</Text>
            </Box>
            <Box>
                <Text fontWeight={500} fontSize={{base:"30px",lg:"55px"}} lineHeight={{base:"45px",lg:"65px"}}>{data.title}</Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            {data?.paragraph?.map((e,i) => (
                <>
                <Box key={i}>
                    <Text fontWeight={400} fontSize={"17px"} lineHeight={"27px"}>
                    {e}
                    </Text>
                </Box>
                </>
            ))}
            </Box>
            <Box mt={{base:"0px",lg:"15px"}}>
                <Flex gap={"20px"}>
                    <Box
                      cursor={"pointer"}
                      border={"1px solid black"}
                      p={"4px 8px 4px 8px"}
                      fontSize={"12px"}
                      borderRadius={"20px"}
                      _hover={{
                        background: "black",
                        color: "white",
                        transition: "0.5s",
                      }}
                    >
                      Augemented
                    </Box>
                    <Box
                      cursor={"pointer"}
                      border={"1px solid black"}
                      p={"4px 8px 4px 8px"}
                      fontSize={"12px"}
                      borderRadius={"20px"}
                      _hover={{
                        background: "black",
                        color: "white",
                        transition: "0.5s",
                      }}
                    >
                      Hardware
                    </Box>
                  </Flex>
            </Box>
                </>}
        </Box>
        <Box w={{base:"100%",lg:"25%"}} p={{base:"10px 0px 0px 0px",lg:"0px 20px 0px 20px"}}>
            <BlogDetailsSidebar/>
        </Box>
      </Flex>
      </Box>
    </div>
  );
}

export default BlogDetails;
