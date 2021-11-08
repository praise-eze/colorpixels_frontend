import React from "react";
import {
	Heading,
	Image,
	Text,
	Center,
	Button,
	Badge,
	Stack,
	Box,
	Grid,
	Flex,
} from "@chakra-ui/react";

function ClipDescription() {
	return (
		<div>
			<Center pt={200}>
				<Stack direction="row">
					<Center>
						<Box boxSize="670" className="">
							<Image
								src="https://i.ytimg.com/vi/fwb9JysHYSI/maxresdefault.jpg"
								alt="adin and boat"
							></Image>

							<Stack direction="row" pt={2.5} pb={5}>
								<Badge fontSize="md" variant="solid">
									Common
								</Badge>
								<Badge colorScheme="green" fontSize="md" variant="solid">
									Uncommon
								</Badge>
								<Badge colorScheme="red" fontSize="md" variant="solid">
									Rare
								</Badge>
								<Badge colorScheme="purple" fontSize="md" variant="solid">
									Mythical
								</Badge>
							</Stack>
							<Text fontSize="2xl">@shawnkd</Text>
						</Box>
					</Center>
					<Box pl={20}>
						<Heading>Clip Description</Heading>
						<Text pt={5} fontSize="2xl">
							{" "}
							This is a cool photo, one of a kind{" "}
						</Text>
						<Text pt={5} fontSize="4xl">
							0.02 ETH
						</Text>

						<Center>
							<Button w={70}>Buy</Button>
						</Center>
					</Box>
				</Stack>
			</Center>
		</div>
	);
}

export default ClipDescription;
