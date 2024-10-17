import React, { Suspense } from "react";
import pc from "./images/pc400_3.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero_text",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, stagger: 0.5, delay: 2.25 }
    );
  });
  return (
    <section
      className="w-screen min-h-[95vh] lg:min-h-screen flex flex-col lg:flex-row  lg:mt-0 justify-around pt-[5vh] lg:pt-0 items-center  text-center lg:text-left 
    text-[11vw] sm:text-[6vw] lg:text-[3.4vw] font-medium "
    >
      <h1 className="hero_text">
        Привет,
        <br className="hidden lg:block" /> Я Михаил
      </h1>
      <Image
        src={pc}
        alt="pc"
        priority={false}
        className="w-[100%] lg:w-[50%] h-auto "
      />

      <h1 className="hero_text">
        Web <br className="block" /> Разработчик
      </h1>
    </section>
  );
};

export default Hero;
