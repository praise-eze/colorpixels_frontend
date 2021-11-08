import React from "react";
import { Flex, Spacer, Box, Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import logo from "../colorpixelslogo.png";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<Flex>
				<Link to="/">
					<Box pt={50} pr={5} pl={44}>
						<Image w="75%" src={logo}></Image>
					</Box>
				</Link>
				<Box pt={50} px={0}>
					<Link to="/Marketplace">
						<Button size="sm" variant="ghost">
							{"   "}
							MARKETPLACE{"  "}
						</Button>
					</Link>
					<Button size="sm" variant="ghost">
						{"   "}
						LIVE AUCTIONS{" "}
					</Button>
					<a target="_blank" href="https://discord.gg/pU555KRkJG">
						<Button size="sm" variant="ghost">
							{"   "}
							COMMUNITY{"   "}
						</Button>
					</a>
					<Button size="sm" colorScheme="teal" variant="solid">
						{"   "}
						MINT{"   "}
					</Button>
				</Box>

				<Spacer />

				<Box pt={50} px={40}>
					<Button className="align-text-top" mr="5" size="lg">
						Log In
					</Button>

					<Button className="align-text-top" colorScheme="teal" size="lg">
						Sign Up
					</Button>
				</Box>
			</Flex>
		</div>
	);
}

export default Navbar;
