"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { cards_array } from "@/constants/projects";
import VideoCard from "./VideoCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Projects = () => {
  const section = useRef();
  const title_up = useRef();
  const title_dawn = useRef();

  useGSAP(
    () => {
      gsap.from(title_up.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".projects_section",
          start: "+=10% bottom",
          end: "center center",
          scrub: true,
        },
      });
      gsap.from(title_dawn.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".projects_section",
          start: "center bottom",
          end: "center center",
          scrub: true,
        },
      });
      document.addEventListener(
        "wheel",
        function touchHandler(e) {
          if (e.ctrlKey) {
            e.preventDefault();
          }
        },
        { passive: false }
      );

      let mm = gsap.matchMedia(),
        breakPoint = 768;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          let { isDesktop, isMobile, reduceMotion } = context.conditions;
          let height = window.innerHeight <= 500 ? 700 : window.innerHeight;
          const tl = gsap.timeline();
          ScrollTrigger.create({
            trigger: ".projects_section",
            start: "center center",
            end: () => `+=${height * 4}px`,
            scrub: !0,
            pin: true,
            pinSpacing: true,
            anticipatePin: !0,
            animation: tl,
          });

          tl.from(".circle", { opacity: 0, width: 0, height: 0 }, "same")
            .to(title_up.current, { xPercent: 100 }, "same")
            .to(title_dawn.current, { xPercent: -100 }, "same")
            .to(".circle", {
              scale:
                window.innerWidth <= window.innerHeight
                  ? window.innerHeight / 140
                  : window.innerWidth / 140,
            })
            .to(".cards", { display: "block" }, "same2");
          cards_array.map((card, index) => {
            tl.from(
              `.card_${card.id}`,
              {
                scale: 1.5,
                y: height * 1.25,
                onStart: () => {
                  const video = document.querySelector(
                    `.card_${card.id} video`
                  );
                  if (video && typeof video.play === "function") {
                    video.play();
                  }
                },
              },
              `same${card.id + 1}`
            );
            if (cards_array.length - 1 === index) {
              return;
            } else {
              tl.to(
                `.card_${card.id}`,
                { scale: 0.85, filter: "blur(12px)" },
                `same${card.id + 2}`
              );
            }
          });
        }
      );
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
