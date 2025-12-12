import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true, // boolean, not a string
      },
    });

    parallaxTimeLine
      .from(
        "#c-left-leaf",
        {
          x: -100,
          y: 100,
          duration: 1.2,
          ease: "power1.out",
        },
        0
      )
      .from(
        "#c-right-leaf",
        {
          x: 100,
          y: 100,
          duration: 1.2,
          ease: "power1.out",
        },
        0
      );
  });

  return (
    <section id="cocktails" className="noisy overflow-hidden relative">
      {/* decorative leaves - keep small, non-interactive, lazy-loaded */}
      <img
        src="/images/cocktail-left-leaf.png"
        id="c-left-leaf"
        alt="Decorative left leaf"
        loading="lazy"
        className="pointer-events-none select-none absolute left-0 top-0 max-w-[40vw] md:max-w-[30vw] w-auto"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        id="c-right-leaf"
        alt="Decorative right leaf"
        loading="lazy"
        className="pointer-events-none select-none absolute right-0 top-0 max-w-[40vw] md:max-w-[30vw] w-auto"
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most Loved Cocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
