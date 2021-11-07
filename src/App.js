import React from "react";
import "./App.css";
//import {Button} from "@mui/material"
import Navbar from "./components/Navbar"

import Home from "./components/Home"
import { ChakraProvider} from "@chakra-ui/react"
import Marketplace from "./components/Marketplace";
import ClipDescription from "./components/ClipDescription";
import CreatorPage from "./components/CreatorPage";




function App({ Component }) {
  return (
    <ChakraProvider>
      
      <Navbar></Navbar>
      <Home/>
      {/* <Marketplace/> */}
      {/* <ClipDescription/> */}
      {/* <CreatorPage/> */}
    
    </ChakraProvider>
  );
}

export default App;
