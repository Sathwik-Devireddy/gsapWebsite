import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Contact = () => {
  useGSAP(() => {
    // correct SplitText usage
    const titleSplit = new SplitText("#contact h2", { type: "words" });

    // timeline with correct 'scrollTrigger' key and sensible defaults
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      defaults: { duration: 0.8, ease: "power1.out" },
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "30",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      ); //a magic trick is here <
  });
  return (
    <>
      <div>
        <footer id="contact">
          <img src="/images/footer-right-leaf.png" id="f-right-leaf"></img>
          <img src="/images/footer-left-leaf.png" id="f-left-leaf"></img>
          <div className="content">
            <h2>Where To Find Us</h2>
            <div>
              <h3>Visit Our Store</h3>
              <p>Bay Of Bengal,India</p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>(+91) 111111111</p>
              <p>Saitama@onepunch.com</p>
            </div>
            <div>
              <h3>Open Every Day</h3>
              {openingHours.map((time) => (
                <p key={time.day}>
                  {time.day}:{time.time}
                </p>
              ))}
            </div>
            <div>
              <h3>Social Network</h3>
              <div className="flex-center gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <img src={social.icon}></img>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
