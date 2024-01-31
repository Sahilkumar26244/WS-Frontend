import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

function MainLoaderComponent() {
  return (
    <div>
        <Box h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Spinner thickness='7px'
                speed='0.65s'
                emptyColor='gray.200'
                color='black.500'
                size='xl' />
        </Box>
    </div>
  )
}

export default MainLoaderComponent