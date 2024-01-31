import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function BlogDetailsSidebar() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://ws-tech-backend.onrender.com/blog/get")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.blogs);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <Box>
        <Flex
          p={"5px 0px 5px 0px"}
          borderBottom={"1px solid lightgrey"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Input
              variant={"unstyled"}
              placeholder="Search"
              fontSize={"17px"}
              fontWeight={400}
            />
          </Box>
          <Box>
            <IoSearchOutline style={{ fontSize: "20px" }} />
          </Box>
        </Flex>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"} mt={"20px"}>
        <Box>
          <Text fontWeight={500} fontSize={"21px"}>
            Read Next:
          </Text>
        </Box>
        <Box
          overflowY={"scroll"}
          h={"300px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"15px"}
        >
          {data?.map((blog, index) => (
            <>
              <Flex key={index} gap={"10px"}>
                <Box w={"50%"}>
                  <div class="hvr-grow">
                    <Image w={"100%"} h={"100%"} src={blog.image} />
                  </div>
                </Box>
                <Box w={"50%"}>
                  <Box>
                    <Text fontWeight={400} fontSize={"13px"}>
                      {blog.date}
                    </Text>
                  </Box>
                  <Box>
                    <Link to={`/blogs/${blog._id}`}>
                    <Text fontWeight={500} fontSize={"21px"}>
                      {blog.title.substring(0, 20)}
                    </Text>
                    </Link>
                  </Box>
                </Box>
              </Flex>
            </>
          ))}
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"} mt={"20px"}>
        <Box>
          <Text fontWeight={500} fontSize={"21px"}>
            Instagram:
          </Text>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Flex
            _hover={{ bg: "#3db8f5", cursor: "pointer" }}
            bg={"#408bd1"}
            borderRadius={"5px"}
            p={"10px"}
            color={"white"}
            w={{base:"50%",lg:"58%"}}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <IoLogoInstagram />
            </Box>
            <Box>
              <Text fontWeight={400} fontSize={"13px"}>
                Follow on Instagram
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"} mt={"20px"}>
        <Box>
          <Text fontWeight={500} fontSize={"21px"}>
            Follow us:
          </Text>
        </Box>
        <Box>
          <Flex gap={"18px"} alignItems={"center"}>
            <div class="hvr-grow">
              <Box _hover={{ cursor: "pointer" }}>
                <GrFacebookOption style={{ fontSize: "20px" }} />
              </Box>
            </div>
            <div class="hvr-grow">
              <Box _hover={{ cursor: "pointer" }}>
                <AiOutlineInstagram style={{ fontSize: "23px" }} />
              </Box>
            </div>
            <div class="hvr-grow">
              <Box _hover={{ cursor: "pointer" }}>
                <GrTwitter style={{ fontSize: "20px" }} />
              </Box>
            </div>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default BlogDetailsSidebar;
