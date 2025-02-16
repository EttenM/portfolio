"use client";

import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./about.scss";
import SplitType from "split-type";

const About = () => {
  const target_text = useRef();
  const target_title = useRef();
  const split_text = useRef();
  const split_title = useRef();

  useGSAP(() => {
    split_text.current = new SplitType(target_text.current, {
      splitClass: "split-text",
      types: "lines, words, chars",
    });
    split_title.current = new SplitType(target_title.current, {
      splitClass: "split-text",
      types: "chars",
    });

    gsap.fromTo(
      split_text.current.chars,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.5,
        ease: "ease",

        scrollTrigger: {
          trigger: target_text.current,
          start: "top +=85%",
          end: "center center",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      split_title.current.chars,
      { yPercent: 100 },
      {
        yPercent: 0,
        stagger: 0.15,
        ease: "ease",

        scrollTrigger: {
          trigger: "#about",
          start: "top +=70%",

          toggleActions: "play none play reverse",
        },
      }
    );
  }, []);

  return (
    <section
      className="w-screen relative flex  justify-center items-center py-[100px] sm:py-[20vh]"
      id="about"
    >
      <div className="flex flex-col gap-[30px] w-[95%] md:w-[70%] justify-center items-center">
        <div className=" overflow-hidden">
          <h2
            className="split_type text-stroke text-mainColor text-[10vw] md:text-[4vw] font-rubikMonoOne"
            ref={target_title}
          >
            Про меня
          </h2>
        </div>

        <p
          className="split_type text-[max(20px,_5.5vw)] md:text-[2.5vw] text-center text-secondColor font-literata hyphens-auto"
          ref={target_text}
        >
          Я создаю эффектные, индивидуальные веб-сайты. Ответственно подхожу к
          работе, уделяю внимание деталям & качеству. Использую передовые
          инструменты и всегда изучаю что-то новое.
        </p>
      </div>
      <div className=" absolute right-0 top-[15%] translate-y-[-15%] text-[15vw] md:text-[10vw]  text-secondColor font-diplomataSC opacity-10">
        01
      </div>
    </section>
  );
};

export default About;
