import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";

const Preloader = ({ setPreload, preloadOver }) => {
  const target = useRef();
  useGSAP(() => {
    const split_text = new SplitType(target.current, {
      splitClass: "preload-text",
      types: "chars",
    });

    // gsap.set("html", { overflow: "hidden" });
    let tlLoader = gsap.timeline();
    tlLoader
      .to(split_text.chars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.25,
      })
      .to(".preload__col", {
        yPercent: -100,
        stagger: 0.25,
        duration: 0.55,
        onComplete: () => {
          setPreload(true);
        },
      })
      .to("body", {
        overflow: "inherit",
      })
      .to(".preload", {
        display: "none",
      });
  });
  return (
    <div className="preload fixed inset-0 z-[999] grid grid-cols-5 text-[8vw] md:text-[3vw]">
      <div className="preload__col bg-accent h-full"></div>
      <div className="preload__col bg-accent h-full"></div>
      <div className="preload__col bg-accent h-full"></div>
      <div className="preload__col bg-accent h-full"></div>
      <div className="preload__col bg-accent h-full"></div>
      <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] overflow-hidden">
        <p className="preload__text text-white split_type" ref={target}>
          Портфолио
        </p>
      </div>
    </div>
  );
};

export default Preloader;
