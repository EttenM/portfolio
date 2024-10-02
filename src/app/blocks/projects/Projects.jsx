import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import card from "./images/card.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const section = useRef();
  const title_up = useRef();
  const title_dawn = useRef();
  const cards_array = [
    { name: "pr1", src: card },
    { name: "pr2", src: card },
    { name: "pr3", src: card },
  ];

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
          let height = window.innerHeight;
          const tl = gsap.timeline();
          ScrollTrigger.create({
            trigger: ".projects_section",
            start: "center center",
            end: () => `+=${height * 4}px`,
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
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
            .to(".cards", { display: "block" }, "same2")
            // .to(".projects_btn", { display: "flex", opacity: 1 }, "same2")
            .from(".card_1", { scale: 1.5, y: height * 1.25 }, "same2")
            .to(".card_1", { scale: 0.85, filter: "blur(12px)" }, "same3")
            .from(".card_2", { scale: 1.5, y: height * 1.25 }, "same3")
            .to(".card_2", { scale: 0.85, filter: "blur(12px)" }, "same4")
            .from(".card_3", { scale: 1.5, y: height * 1.25 }, "same4");
        }
      );
    },

    { scope: section.current }
  );
  return (
    <section
      ref={section}
      className="projects_section relative w-screen h-screen overflow-hidden"
      id="works"
    >
      <h2
        ref={title_up}
        className="text-[15vw] sm:text-[10vw] absolute top-[15%] lg:top-[5%] left-[5%] translate-x-[-5%] translate-y-[-15%] sm:translate-y-[-5%] leading-[1] font-bold opacity-70 will-change-transform"
      >
        Недавние
      </h2>
      <h2
        ref={title_dawn}
        className="text-[15vw] sm:text-[10vw] absolute bottom-[15%] lg:bottom-[5%] right-[5%] translate-x-[-5%] translate-y-[-15%] sm:translate-y-[-5%] leading-[1] font-bold opacity-70 will-change-transform"
      >
        Проекты
      </h2>

      <div
        className="circle w-[200px] h-auto bg-[#0c1f16]  rounded-full  fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] 
      aspect-square flex justify-center items-center will-change-transform"
      ></div>
      <div className="cards w-screen h-screen ">
        {cards_array.map((card, index) => (
          <div
            className={`card_${
              index + 1
            } card_shadow w-[95%] sm:w-[60%] h-auto aspect-video fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-[20px] overflow-hidden`}
            key={"card_link" + index}
          >
            <Image src={card.src} alt={card.name} className="w-full h-full " />
            <a
              href="#"
              className="w-[10%] h-auto aspect-square rounded-full absolute bottom-[5%] right-[5%] translate-x-[-5%] translate-y-[-5%]  bg-gold text-[#0c1f16] 
       flex justify-center items-center"
            >
              {card.name}
            </a>
          </div>
        ))}
      </div>

      {/* <button
        className="projects_btn hidden w-[5vw] h-auto aspect-square rounded-full fixed top-[50%] right-[5%] translate-x-[-5%] translate-y-[-50%] z-[10] bg-gold text-[#0c1f16] 
       justify-center items-center text-[1.2vw] opacity-0"
      >
        Links
      </button> */}
    </section>
  );
};

export default Projects;
