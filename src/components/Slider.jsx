import React from 'react'
import { Container, VStack, Image, Box, Button, Flex, Spacer, Text, Heading  } from "@chakra-ui/react"
import mrbeast from "../mrbeast2.png"


const Slider = () => {
    return (
        <div>
        <Flex justifyContent>
        <Box pl={40}>
        <Container maxW="container.md" pt={62} pb={125}>
            <Heading fontSize="6xl" pb={5}>Collect Your Favorite Streaming Highlights</Heading>
            <Text fontSize="2xl" pt={5} pb={20}>Buy, sell and share those unforgettable moments</Text>
            <Button colorScheme="teal" size="lg" >Explore the Marketplace</Button>
        </Container>
        </Box>
 

 <Box pl={40}>
 <Flex pt={62} pb={125} pl={200}>
 <Image src={mrbeast} alt="mr beast"></Image>
 </Flex>

 </Box>
        </Flex>
        </div>
    )
}

export default Slider
