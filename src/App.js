import React from "react";
import "./App.css";
//import {Button} from "@mui/material"
import Navbar from "./components/Navbar"

import Home from "./components/Home"
import { ChakraProvider, Container } from "@chakra-ui/react"
import Marketplace from "./components/Marketplace";




function App({ Component }) {
  return (
    <ChakraProvider>
      
      <Navbar></Navbar>
      {/* <Home/> */}
      <Marketplace/>
    
    </ChakraProvider>
  );
}

export default App;
