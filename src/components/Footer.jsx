import React from 'react'
import footer from "../footer.png"
import {Image} from "@chakra-ui/react"


const Footer = () => {
    return (
        <div>
            <Image src={footer} w='100%' y='15' pt={40}></Image>
        </div>
    )
}

export default Footer
