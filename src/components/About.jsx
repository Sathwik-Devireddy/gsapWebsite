import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  useGSAP(() => {
    // Split the h2 text into words
    const titleSplit = new SplitText("#about h2", { type: "words" });

    // Scroll animation timeline
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    // Animate title words
    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "expo.out",
        stagger: 0.02,
      })
      // Animate the image grid boxes
      .from(".top-grid div, .bottom-grid div", {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      });
  });

  return (
    <section id="about" className="px-5 md:px-0">
      {/* Header section */}
      <div className="mb-16">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Mocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="max-w-lg leading-relaxed">
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-gray-300">More than +1000 customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image grid section */}
      <div className="grid md:grid-cols-12 gap-4 top-grid">
        <div className="md:col-span-3 noisy">
          <img src="/images/abt1.png" alt="Mocktail preparation" />
        </div>
        <div className="md:col-span-6 noisy">
          <img src="/images/abt2.png" alt="Bar setup" />
        </div>
        <div className="md:col-span-3 noisy">
          <img src="/images/abt5.png" alt="Refreshing mocktail" />
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-4 mt-6 bottom-grid">
        <div className="md:col-span-8 noisy">
          <img src="/images/abt3.png" alt="Drink presentation" />
        </div>
        <div className="md:col-span-4 noisy">
          <img src="/images/abt4.png" alt="Cocktail detail" />
        </div>
      </div>
    </section>
  );
};

export default About;
