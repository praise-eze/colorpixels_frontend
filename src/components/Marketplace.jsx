import React from 'react'
import {Heading, Box, Flex, Input, Container, Tabs, TabList, Tab, Center} from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    //ChevronDownIcon,
    Button,
    InputGroup,
    InputLeftElement
  } from "@chakra-ui/react";
  import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'

  import ClipListing from "./ClipListing";
  import ClipDescription from "./ClipDescription";

const Marketplace = () => {
    return (
        <div>
            <Container pt={125} pb={125} maxW="container.xl" >
            <Center>
            <Heading pb={10} size="3xl">Browse by streamer, game, or category</Heading>
            </Center>
            <InputGroup size="lg" variant="filled">
                <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="white" />}
                />
                <Input type="tel" placeholder="Search" />
            </InputGroup>
            </Container>

        

            <div >
                <Flex>
                <Box>
                <Tabs pl={40} px={40}>
                    <TabList>
                        <Tab fontSize="2xl">Popular</Tab>
                        <Tab fontSize="2xl">Staff-Picked</Tab>
                        <Tab fontSize="2xl">Music</Tab>
                        <Tab fontSize="2xl">Gaming</Tab>
                        <Tab fontSize="2xl">Sports</Tab>
                        <Tab fontSize="2xl">Indie</Tab>
                    </TabList>
                </Tabs>
                </Box>

                <Box pl={700}>
                <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Date
                </MenuButton>
                <MenuList>
                    <MenuItem>Today</MenuItem>
                    <MenuItem>This Week</MenuItem>
                    <MenuItem>This Month</MenuItem>
                    <MenuItem>This Year</MenuItem>
                    <MenuItem>All Time</MenuItem>
                </MenuList>
                </Menu>
                </Box>
                </Flex>
            </div>

            <ClipListing></ClipListing>
        </div>
    )
}

export default Marketplace
