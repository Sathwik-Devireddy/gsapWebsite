import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin (it's safe to call multiple times; registration is idempotent)
gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    // animate background + backdrop blur
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "rgba(0,0,0,0.31)", // more compatible than 8-digit hex
        backdropFilter: "blur(10px)", // animates the backdrop blur
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <>
      <nav role="navigation" aria-label="Main navigation">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Velvet Pour logo"
              className="h-8 w-auto"
            />
            <p>Velvet Pour</p>
          </a>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
