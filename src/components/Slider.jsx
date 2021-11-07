import React from 'react'
import { Container, Image, Box, Button, Flex, Text, Heading  } from "@chakra-ui/react"
import mrbeast from "../mrbeast2.png"
import { Link } from "react-router-dom";


const Slider = () => {
    return (
        <div>
        <Flex justifyContent>
        <Box pl={40}>
        <Container maxW="container.md" pt={62} pb={125}>
            <Heading fontSize="6xl" pb={5}>Collect Your Favorite Streaming Highlights</Heading>
            <Text fontSize="2xl" pt={5} pb={20}>Buy, sell and share those unforgettable moments</Text>
            <Link to="/Marketplace">
            <Button colorScheme="teal" size="lg" >Explore the Marketplace</Button>
            </Link>
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
