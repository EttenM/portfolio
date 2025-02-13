"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { cards_array } from "@/constants/projects";
import VideoCard from "./VideoCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const section = useRef();
  const title_up = useRef();
  const title_dawn = useRef();
  const projectsTl = useRef();

  useGSAP(
    () => {
      let height = window.innerHeight <= 500 ? 700 : window.innerHeight;
      let width = window.innerWidth;

      const handleResize = () => {
        height = window.innerHeight;
        width = window.innerWidth;
        ScrollTrigger.refresh(true);
      };

      window.addEventListener("resize", handleResize);
      projectsTl.current = gsap.timeline({
        // delay: 0.5,
        scrollTrigger: {
          trigger: section.current,
          start: "center center",
          end: `+=400%`,
          scrub: !0,
          pin: true,
          pinSpacing: true,
          anticipatePin: !0,
          invalidateOnRefresh: true,
        },
      });
      gsap.from(title_up.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section.current,
          start: "+=10% bottom",
          end: "center center",
          scrub: true,
        },
      });
      gsap.from(title_dawn.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section.current,
          start: "center bottom",
          end: "center center",
          scrub: true,
        },
      });

      projectsTl.current
        .from(".circle", { opacity: 0, width: 0, height: 0 }, "same")
        .to(title_up.current, { xPercent: 100 }, "same")
        .to(title_dawn.current, { xPercent: -100 }, "same")
        .to(".circle", {
          scale: () => {
            return width <= height ? height / 140 : width / 140;
          },
        })
        .to(".cards", { display: "block" }, "same2");
      cards_array.map((card, index) => {
        projectsTl.current.from(
          `.card_${card.id}`,
          {
            scale: 1.5,
            y: () => {
              return height * 1.25;
            },
            onStart: () => {
              const video = document.querySelector(`.card_${card.id} video`);
              video.play();
            },
          },
          `same${card.id + 1}`
        );
        if (cards_array.length - 1 === index) {
          return;
        } else {
          projectsTl.current.to(
            `.card_${card.id}`,
            { scale: 0.85, filter: "blur(12px)" },
            `same${card.id + 2}`
          );
        }
      });

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: section.current }
  );

  return (
    <section
      ref={section}
      className="projects_section relative w-full h-screen overflow-hidden will-change-transform"
      id="works"
    >
      <h2
        ref={title_up}
        className="text-[15vw] sm:text-[10vw] absolute top-[15%] lg:top-[5%] left-[5%] translate-x-[-5%] translate-y-[-15%] sm:translate-y-[-5%] leading-[1] font-medium text-secondColor will-change-transform "
      >
        Недавние
      </h2>
      <h2
        ref={title_dawn}
        className="text-[15vw] sm:text-[10vw] absolute bottom-[15%] lg:bottom-[5%] right-[5%] translate-x-[-5%] translate-y-[-15%] sm:translate-y-[-5%] leading-[1] font-medium  text-secondColor will-change-transform  "
      >
        Проекты
      </h2>

      <div
        className="circle w-[200px] h-auto bg-secondAccent  rounded-full  fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] 
      aspect-square flex justify-center items-center will-change-auto"
      ></div>
      <div className="cards w-screen h-screen ">
        {cards_array.map((card, index) => (
          <VideoCard card={card} key={"card_link" + card.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
