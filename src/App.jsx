import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import NavBar from "./components/NavBar";
import { navLinks } from "../constants";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/art.jsx";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </>
  );
}

export default App;
