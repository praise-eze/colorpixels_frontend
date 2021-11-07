import React from 'react'
import {Heading, Link, Stack, Badge, Image, Box, Text, Grid} from '@chakra-ui/react'

const ClipListing = () => {
    return (
        <div>
            <Grid templateColumns="repeat(4, 2fr)" gap={8} pl={40}>
            <Box boxSize="sm" className="" pt={10}>
                
                <Heading fontSize="4xl">Clip Description</Heading>
                <Link>
                <Image pt={5} src="https://i.ytimg.com/vi/fwb9JysHYSI/maxresdefault.jpg" alt="adin and boat"></Image>
                </Link>
                <Text pt={2.5} fontSize="2xl">0.2 ETH</Text>
                <Text fontSize="xl">@shawnkd</Text>
                <Stack direction="row" pt={2.5}>
                    <Badge fontSize="md" variant="solid">Common</Badge>
                    <Badge colorScheme="green" fontSize="md" variant="solid">Uncommon</Badge>
                    <Badge colorScheme="red" fontSize="md" variant="solid">Rare</Badge>
                    <Badge colorScheme="purple" fontSize="md" variant="solid">Mythical</Badge>
                </Stack>
                
            </Box>

            
                
            
            </Grid>
        </div>
    )
}

export default ClipListing
