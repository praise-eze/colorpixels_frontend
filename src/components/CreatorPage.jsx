import React from 'react'

import ClipListing from "./ClipListing";
import circle from "../circle.png"
import {Image} from "@chakra-ui/react"


const CreatorPage = () => {
    return (
        <div>
        <Image src={circle}></Image>
            <h1>username</h1>
            <h1>followers</h1>
            <h1>collections</h1>
            <h1>sold</h1>
        </div>
    )
}

export default CreatorPage
