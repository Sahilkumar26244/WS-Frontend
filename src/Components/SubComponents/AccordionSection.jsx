import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

function AccordionSection({content}) {
  return (
    <>
      <Accordion allowToggle>
        {content?.map((item,index) => (
          <div key={index}>
          <AccordionItem p={{base:"10px 0px 10px 0px",lg:"20px 0px 20px 0px"}}>
      <h2>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Text fontSize={{ base: "10px", lg: "20px" }}>{index+1}</Text>
            <Text fontSize={{ base: "10px", lg: "20px" }} fontWeight={600}>
              {item.question}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel
        pb={4}
        pl={"45px"}
        fontSize={{ base: "10px", lg: "18px" }}
        fontWeight={"light"}
      >
        {item.answer}
      </AccordionPanel>
    </AccordionItem>
          </div>
        ))}
      </Accordion>
    </>
  );
}

export default AccordionSection;
