import React from 'react'
import {Heading, Input, Container, Tabs, TabList, Tab, Center} from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    ChevronDownIcon,
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    InputGroup,
    InputLeftAddon,
    InputLeftElement
  } from "@chakra-ui/react";
  import { SearchIcon } from '@chakra-ui/icons'

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

        

            <div>
                
                <Tabs>
                    <TabList>
                        <Tab>Popular</Tab>
                        <Tab>Staff-Picked</Tab>
                        <Tab>Music</Tab>
                        <Tab>Gaming</Tab>
                        <Tab>Sports</Tab>
                        <Tab>Indie</Tab>
                    </TabList>
                </Tabs>
            </div>

            <ClipListing></ClipListing>
        </div>
    )
}

export default Marketplace
