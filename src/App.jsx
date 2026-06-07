import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStack from "./Navigation/MainStack";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";


function App() {
 

  return (
    <BrowserRouter>
      <Navbar/>
      <MainStack /> 
      <Chatbot />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
