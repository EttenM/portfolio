import Image from "next/image";
import React, { useRef } from "react";
import ava from "./images/ava.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

const About = () => {
  const text = ["Скорость", "Качество", "Эстетика", "Поддержка"];
  const target = useRef();
  // const split_text = new SplitType.create(ref.current);

  useGSAP(() => {
    const split_text = new SplitType(target.current, {
      splitClass: "split-text",
      types: "chars",
    });

    let tl = gsap.timeline().pause();
    tl.fromTo(
      ".benefit",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.35,
        duration: 0.2,
        ease: "power3.inOut",
      }
    );

    gsap.fromTo(
      split_text.chars,
      { opacity: 0.25 },
      {
        opacity: 1,
        stagger: 0.01,
        duration: 0.25,
        onComplete: () => {
          tl.play();
        },
        scrollTrigger: {
          trigger: "#about",
          start: "top +=70%",
          end: "bottom bottom",
          // scrub: 0.6,
          toggleActions: "play play reverse reverse",
        },
      }
    );
    // gsap.fromTo(
    //   split_text.words,
    //   { y: -20, scaleY: 0, transformOrigin: "top" },
    //   {
    //     y: 0,
    //     scaleY: 1,
    //     stagger: 0.1,
    //     duration: 0.25,
    //     scrollTrigger: {
    //       trigger: "#about",
    //       start: "+=15% center",
    //       end: "bottom bottom",
    //       toggleActions: "play play reverse reverse",
    //     },
    //   }
    // );
  });

  return (
    <section
      className="w-screen flex  justify-center items-center mt-[40px] sm:mt-[5vh]"
      id="about"
    >
      <div className="w-[95%] sm:w-[90%] flex flex-col justify-center items-center gap-[20px] md:gap-[60px]">
        <h2 className="text-[7vw] sm:text-[5vw] lg:text-[3.4vw] w-[80%] sm:w-auto font-medium self-start text-gray/70">
          Почему вам стоит работать со мной?
        </h2>
        <div className="w-[90%] lg:w-[80%] flex flex-col md:flex-row items-center gap-[20px] sm:gap-[2.5vw]">
          <div className="w-[50vw] sm:w-[20vw] h-auto aspect-square rounded-full border border-[#000] flex justify-center items-center shrink-0 ">
            <Image
              src={ava}
              alt="photo"
              className="w-[90%] md:w-[80%] h-auto rounded-full"
            />
          </div>

          <div className="flex flex-col gap-[15px] md:gap-[30px] shrink-1">
            <p
              className="about_text split_type text-[3.5vw] sm:text-[2.3vw] lg:text-[1.6vw] hyphens-auto"
              ref={target}
              id="target"
            >
              Мои работы - это интерактивные представления, которые эффектно
              преподносят продукт. Я уделяю большое внимание деталям и качеству,
              чтобы пользовательский опыт был интересным и стабильным.
            </p>
            <div className="flex gap-[15px] text-[3vw] sm:text-[1.5vw]">
              {text.map((item, index) => (
                <span
                  key={index}
                  className="benefit border border-[#000] rounded-[0.5em] px-[0.75em] py-[0.25em] hover:bg-accent hover:text-white duration-[0.25s] ease-in-out "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
