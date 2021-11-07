import React from 'react'
import { Flex, Spacer, Box, Container, Grid, HStack, Heading } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <div>
            <Flex>
            <Box pt={25} pr={5} pl={44}>
            <Heading >ColorPixels</Heading>
            </Box>
    <Box pt={25} px={5} >
      
      <Button size="lg" variant="ghost"> Marketplace </Button>
      <Button size="lg" variant="ghost"> Live Auctions </Button>
      <Button size="lg" variant="ghost"> Creators </Button>   
      <Button size="lg" variant="ghost"> Community </Button>  
    </Box>

    <Spacer/>
    
    <Box pt={25} px={40} >
      <Button className="align-text-top" mr='5' >Log In</Button>
      
      <Button className="align-text-top" colorScheme="teal" >Sign Up</Button>
    </Box>
    
    </Flex>
        </div>
    )
}

export default Navbar
