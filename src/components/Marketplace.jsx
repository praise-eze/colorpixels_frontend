import React from 'react'
import {Heading, Input, Container, Tabs, TabList, Tab} from "@chakra-ui/react"
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
  } from "@chakra-ui/react";
  import ClipListing from "./ClipListing";
  import ClipDescription from "./ClipDescription";

const Marketplace = () => {
    return (
        <div>
            <Container pt={125} pb={125}>
            <Heading>Browse by streamer, game, or category</Heading>
            <Input placeholder="Search" size="lg"></Input>
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
