import React from 'react'
import { Container, VStack, Box, Button, Flex, Spacer, Text, Heading  } from "@chakra-ui/react"



const Slider = () => {
    return (
        <div>
        <Flex justifyContent>
        <Box pl={40}>
        <Container maxW="container.md" pt={62} pb={125}>
            <Heading fontSize="6xl" pb={5}>Collect Your Favorite Streaming Highlights</Heading>
            <Text fontSize="2xl" pt={5} pb={20}>Buy, sell, share, and share those unforgettable moments</Text>
            <Button colorScheme="teal" size="lg" >Explore the Marketplace</Button>
        </Container>
        </Box>
 
        </Flex>
        </div>
    )
}

export default Slider
