import React, { Suspense } from "react";
import pc from "./images/pc400_3.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="w-screen min-h-[95vh] lg:min-h-screen flex flex-col lg:flex-row  lg:mt-0 justify-around pt-[5vh] lg:pt-0 items-center  text-center lg:text-left 
    text-[11vw] sm:text-[6vw] lg:text-[3.4vw] font-medium "
    >
      <h1>
        Привет,
        <br className="hidden lg:block" /> Я Михаил
      </h1>
      <Image
        src={pc}
        alt="pc"
        priority={false}
        className="w-[100%] lg:w-[50%] h-auto "
      />

      <h1>
        Web <br className="block" /> Разработчик
      </h1>
    </section>
  );
};

export default Hero;
