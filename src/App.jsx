import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import MyWork from "./components/MyWork/MyWork";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
    </div>
  );
};

export default App;
