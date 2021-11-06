import React from 'react'
import { Flex, Spacer, Box, Container, Grid, HStack } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <div>
            <Flex>
    <Box >
      <Button colorScheme="teal" size="md"> ColorPixels </Button>
      <Button colorScheme="teal" size="md" variant="ghost"> Marketplace </Button>
      <Button colorScheme="teal" size="md" variant="ghost"> Live Auctions </Button>
      <Button colorScheme="teal" size="md" variant="ghost"> Creators </Button>   
      <Button colorScheme="teal" size="md" variant="ghost"> Community </Button>  
    </Box>

    <Spacer/>
    
    <Box >
      <Button className="align-text-top" mr='5' >Log In</Button>
      
      <Button className="align-text-top" >Sign Up</Button>
    </Box>
    
    </Flex>
        </div>
    )
}

export default Navbar
