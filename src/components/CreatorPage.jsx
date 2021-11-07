import React from 'react'

import ClipListing from "./ClipListing";
import circle from "../circle.png"
import {Image, Box, Flex, Stack, Grid, Center, Text} from "@chakra-ui/react"


const CreatorPage = () => {
    return (
        <div>
        <Stack direction="row">
         
        <Flex>
        <Center>
        <Grid templateColumns="repeat(4, 2fr)" gap={8} pl={300} w={100} pt={50}>
        <Grid templateColumns="repeat(1, 2fr)">
        <Text fontSize="4xl">@shawnkd</Text>
        <Box pt={5}>
        <Image src={circle}></Image>
            
        </Box>
        </Grid>
        <Text fontSize="3xl" pl={475}> -- followers</Text>
        <Text fontSize="3xl"> 10 collections</Text>
        <Text fontSize="3xl"> 20 sold</Text>
        </Grid>
        </Center>
        </Flex>
        </Stack> 
        <Grid templateColumns="repeat(4, 2fr)" gap={8} pl={40} w={100}>
            <Box>
                <ClipListing></ClipListing>
            </Box>
            <Box>
                <ClipListing></ClipListing>
            </Box>
        </Grid>
        </div>
    )
}

export default CreatorPage
