import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import NavBar from "./components/NavBar";
import { navLinks } from "../constants";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </>
  );
}

export default App;
