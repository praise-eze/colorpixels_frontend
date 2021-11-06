import React from "react";
import "./App.css";
//import {Button} from "@mui/material"
import Navbar from "./components/Navbar"

import Home from "./components/Home"
import { ChakraProvider } from "@chakra-ui/react"



function App({ Component }) {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
