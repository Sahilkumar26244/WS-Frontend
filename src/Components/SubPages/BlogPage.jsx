import React, { useEffect, useState } from "react";
import Navbar2 from "../Navbar2";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function BlogPage() {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    fetch('https://ws-tech-backend.onrender.com/blog/get')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setData(data.blogs)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchData()
  },[])

  const reversedData = [...data].reverse();

  
  return (
    <div>
      <Navbar2 />
      <Box pt={{base:"80px",lg:"120px",xl:"120px"}} w={{base:"90%",xl:"1310px"}} m={"auto"}
      >
        <Box p={{base:"",xl:""}}>
        <Box borderBottom={"1px solid lightgrey"} pt={"30px"} pb={"30px"}>
          <Text fontWeight={500} fontSize={{base:"25px",lg:"50px"}}>
            Blogs
          </Text>
        </Box>
        </Box>
        {loading ? <>
          <Box h={"400px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Spinner thickness='5px'
            speed='0.65s'
            emptyColor='gray.200'
            color='black.500'
            size='xl'/>
          </Box>
          </>:<>
          <Box p={{base:"",xl:""}} display={"flex"} flexDirection={"column"} gap={"150px"} mt={{base:"50px",lg:"50px"}}>
          {reversedData?.map((blog, index) => (
            <>
              <Box key={index} display={"flex"} flexDirection={"column"} gap={"15px"}>
                <Box>
                  <Image w={"100%"} h={"100%"} objectFit={"cover"} src={blog.image} />
                </Box>
                <Box mt={"10px"}>
                  <Text fontWeight={400} fontSize={"13px"}>{blog.date} / By {blog.owner}</Text>
                </Box>
                <Box>
                  <Link to={`/blogs/${blog._id}`}>
                  <Text fontWeight={500} fontSize={{base:"30px",lg:"39px"}}>{blog.title}</Text>
                  </Link>
                </Box>
                <Box w={"90%"}>
                  <Text fontWeight={400} fontSize={{base:"12px",lg:"17px"}}>{blog.description}</Text>
                </Box>
                <Box mt={"10px"}>
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
              </Box>
            </>
          ))}
        </Box>
          </>}
      </Box>
    </div>
  );
}

export default BlogPage;
