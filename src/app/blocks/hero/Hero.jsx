import React, { Suspense, useRef } from "react";
import pc from "./images/pc400_3.svg";
import ring_back from "./images/ring_back.png";
import ring from "./images/ring.png";
import ring_front from "./images/ring_front.png";
import lines from "./images/lines.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RingSvg from "./RingSvg";
import "./hero.scss";
import CustomEase from "gsap/CustomEase";
const Hero = () => {
  const hero_section = useRef();
  useGSAP(() => {
    const heroTl = gsap.timeline({ paused: true });

    gsap.fromTo(
      ".lines",
      { opacity: 0, scale: 2, visibility: "visible" },
      {
        opacity: 1,
        scale: 1,
        duration: 1.25,
        ease: "easeOut",
        delay: 0.5,
        onComplete: () => {
          heroTl.play();
        },
      }
    );

    heroTl
      .fromTo(
        ".hero_image",
        { scale: 0.5, opacity: 0, visibility: "visible" },
        { scale: 1, opacity: 1, duration: 0.75, ease: "ease" }
      )
      .to(
        "body",
        {
          overflow: "inherit",
        },
        "same"
      )
      .fromTo(
        ".hero_subtitle",
        { scale: 0.5, y: 150, opacity: 0, visibility: "visible" },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.25,
          ease: "ease",
        },
        "same"
      );
    // .fromTo(
    //   ".header",
    //   { yPercent: -100, opacity: 0, visibility: "visible" },
    //   {
    //     yPercent: 0,
    //     opacity: 1,
    //     duration: 0.75,
    //     stagger: 0.25,
    //     ease: "ease",
    //   },
    //   "same"
    // )

    hero_section.current.addEventListener("mousemove", (e) => {
      const rotateY = (e.clientX / window.innerWidth) * 30 - 15;
      const rotateX = (e.clientY / window.innerHeight) * -30 + 15;

      gsap.to(".hero_image", {
        rotateY: rotateY,
        rotateX: rotateX,
        transformPerspective: 1000,
        ease: "power2.out",
      });
    });
  });
  return (
    <section
      className="hero_section w-screen min-h-screen relative flex flex-col justify-center items-center overflow-hidden"
      ref={hero_section}
    >
      <div className="w-[90%] sm:w-[70%] xl:w-[45%] flex justify-center items-center  z-[1] ">
        <RingSvg className=" hero_image w-full h-full invisible" />
      </div>{" "}
      <h1 className="hero_subtitle text-accent text-[10vw] md:text-[6vw] text-center font-rubikMonoOne sm:mt-[-70px] md:mt-[-80px] xl:mt-[-13vh] z-[1] invisible ">
        Frontend Developer
      </h1>
      <Image
        src={lines}
        alt="lines"
        className="lines w-full h-full absolute inset-0 object-cover z-[0] invisible"
      />
    </section>
  );
};

export default Hero;
