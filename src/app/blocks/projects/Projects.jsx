import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import Arrow from "../svg/Arrow";
import Link from "next/link";
// import card from "./images/WrapMe.mp4";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const section = useRef();
  const title_up = useRef();
  const title_dawn = useRef();
  const cards_array = [
    {
      id: 1,
      name: "pr1",
      src: "/WrapMe.mp4",
      poster: "/posters/deepact_poster.jpg",
      link: "https://wm-lend.vercel.app",
    },
    {
      id: 2,
      name: "pr2",
      src: "/Deepact.mp4",
      poster: "/posters/gt3_poster.jpg",
      link: "https://deepact-next2.vercel.app",
    },
    {
      id: 3,
      name: "pr3",
      src: "/Porsche2.mp4",
      poster: "/posters/ordi_poster.jpg",
      link: "https://gt3-rs-one.vercel.app",
    },
    {
      id: 4,
      name: "pr4",
      src: "/Ordi.mp4",
      poster: "/posters/wrapme_poster.jpg",
      link: "https://ordinals-world.vercel.app",
    },
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
                  video.play();
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
          // .to(".projects_btn", { display: "flex", opacity: 1 }, "same2")

          // .from(".card_2", { scale: 1.5, y: height * 1.25 }, "same3")
          // .to(".card_2", { scale: 0.85, filter: "blur(12px)" }, "same4")
          // .from(".card_3", { scale: 1.5, y: height * 1.25 }, "same4");
        }
      );
    },

    { scope: section.current }
  );
  return (
    <section
      ref={section}
      className="projects_section relative w-screen h-screen overflow-hidden will-change-transform"
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
      aspect-square flex justify-center items-center will-change-auto"
      ></div>
      <div className="cards w-screen h-screen ">
        {cards_array.map((card, index) => (
          <div
            className={`card_${card.id} w-[95%] sm:w-[60%] h-auto aspect-video fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  
            rounded-[20px] overflow-hidden will-change-transform `}
            key={"card_link" + card.id}
          >
            <video
              src={card.src}
              className="video w-full h-full object-cover focus:outline-none "
              loop
              preload="none"
              playsInline
              poster={card.poster}
              muted
            ></video>
            <Link
              href={card.link}
              target="_blank"
              className="project__link w-[7.5%] h-auto aspect-square rounded-full absolute bottom-[5%] right-[5%] translate-x-[-5%] translate-y-[-5%]  bg-gold text-[#0c1f16] 
       flex justify-center items-center hovered overflow-hidden"
            >
              <Arrow
                className={
                  "arrow arrow-1 w-[30%] h-auto absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] duration-300 ease-out pointer-events-none"
                }
              />
              <Arrow
                className={
                  "arrow arrow-2 w-[30%] h-auto absolute top-[50%] left-[-50%] translate-y-[-50%] translate-x-[50%] duration-300 ease-out pointer-events-none"
                }
              />
            </Link>
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
