import React from 'react'
import { Flex, Spacer, Box, Image} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import logo from "../colorpixelslogo.png"


const Navbar = () => {
    return (
        <div>
            <Flex>
            <Box pt={50} pr={5} pl={44}>
            <Image src={logo}></Image>
            </Box>
    <Box pt={50} px={10} >
      
      <Button size="lg" variant="ghost"> MARKETPLACE </Button>
      <Button size="lg" variant="ghost"> LIVE AUCTIONS </Button>
      <Button size="lg" variant="ghost"> CREATORS </Button>   
      <Button size="lg" variant="ghost"> COMMUNITY </Button>  
    </Box>

    <Spacer/>
    
    <Box pt={50} px={40} >
      <Button className="align-text-top" mr='5' size="lg" >Log In</Button>
      
      <Button className="align-text-top" colorScheme="teal" size="lg"  >Sign Up</Button>
    </Box>
    
    </Flex>
        </div>
    )
}

export default Navbar
