"use client";
import React, { useRef } from "react";

import lines from "./images/lines.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RingSvg from "./RingSvg";
import "./hero.scss";

const Hero = () => {
  const hero_sectionRef = useRef(null);
  const linesRef = useRef();
  const hero_imageRef = useRef(null);
  const hero_subtitleRef = useRef(null);
  const heroTl = useRef(null);

  useGSAP(() => {
    heroTl.current = gsap.timeline({ delay: 1 });

    heroTl.current
      .to(linesRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.75,
        ease: "easeOut",
      })
      .to(
        hero_imageRef.current,
        { scale: 1, opacity: 1, duration: 0.5, ease: "ease" },
        "same"
      )
      .to(
        "body",
        {
          overflow: "inherit",
        },
        "same"
      )
      .to(hero_subtitleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.75,
        stagger: 0.25,
        ease: "ease",
        onComplete: () => {
          heroTl.current.kill();
        },
      });
  }, []);

  useGSAP(() => {
    hero_sectionRef.current.addEventListener("mousemove", (e) => {
      const rotateY = (e.clientX / window.innerWidth) * 30 - 15;
      const rotateX = (e.clientY / window.innerHeight) * -30 + 15;
      gsap.to(hero_imageRef.current, {
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
      ref={hero_sectionRef}
    >
      <div
        className="hero_image w-[90%] sm:w-[70%] xl:w-[45%] flex justify-center items-center  z-[1]  opacity-0 will-change-transform scale-[0.5]"
        ref={hero_imageRef}
      >
        <RingSvg className="  w-full h-full" />
      </div>{" "}
      <h1
        className="hero_subtitle text-accent text-[10vw] md:text-[6vw] text-center font-rubikMonoOne mt-[-5vh] sm:mt-[-70px] md:mt-[-80px] xl:mt-[-13vh] z-[1] opacity-0 will-change-transform scale-[0.5]"
        ref={hero_subtitleRef}
      >
        Frontend Developer
      </h1>
      <Image
        src={lines}
        alt="lines"
        className="lines w-full h-full absolute inset-0 object-cover z-[0] opacity-0 will-change-transform scale-[2]"
        priority
        ref={linesRef}
      />
    </section>
  );
};

export default Hero;
