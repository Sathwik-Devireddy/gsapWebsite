import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <div className="flex-center text-[300px] text-indigo-600 h-[100vh]">
        App
      </div>
      <div className="flex-center">hello</div>
    </>
  );
}

export default App;
