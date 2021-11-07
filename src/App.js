import React from "react";
import "./App.css";
//import {Button} from "@mui/material"
import Navbar from "./components/Navbar"

import Home from "./components/Home"
import { ChakraProvider} from "@chakra-ui/react"
import Marketplace from "./components/Marketplace";
import ClipDescription from "./components/ClipDescription";
import CreatorPage from "./components/CreatorPage";
import {extendTheme} from "@chakra-ui/react"
import "@fontsource/nunito"
import Footer from "./components/Footer"

// 1. Using a style object
const theme = extendTheme({
  styles: {
    global: {
      "body": {
        background: "#0a0943",
      
      },
      
    },
  },
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
})


function App({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      
      <Navbar></Navbar>
      {/* <Home/> */}
      <Marketplace/>
      {/* <ClipDescription/> */}
      {/* <CreatorPage/> */}
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
