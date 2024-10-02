import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const line_one = ["JavaScript", "React", "Next.js", "Sass"];
  const line_two = ["Gsap", "Framer Motion", "Three.js", "Tailwind"];
  useGSAP(() => {
    gsap.to(".scrollingText", {
      xPercent: -15,
      scrollTrigger: {
        trigger: ".scrollingText",
        scrub: 1,
      },
    });
    gsap.to(".scrollingText2", {
      xPercent: 15,
      scrollTrigger: {
        trigger: ".scrollingText",
        scrub: 1,
      },
    });
  });
  return (
    <section
      className="w-screen flex flex-col justify-center items-center gap-[5vh] py-[max(60px,calc(var(--index)*5))] overflow-hidden text-[4vw] lg:text-[1.75vw] font-semibold"
      id="skills"
    >
      <div className="scrollingText  flex items-center py-[15px] gap-[30px] translate-x-[15%] will-change-transform whitespace-nowrap border-t border-b border-gray  rotate-[-3deg] ">
        <div className="text_slide flex items-center gap-[30px] will-change-transform ">
          {[...Array(4)].map((e, i) =>
            line_one.map((word, index) => (
              <div
                className="flex items-center gap-[30px]"
                key={`repeat-${i}-line_one${index}`}
              >
                <span>{word}</span>
                <span>
                  <svg
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8638 22.2997C9.81498 22.3549 9.09556 22.1197 8.70548 21.594C8.3135 21.0319 8.21946 20.2721 8.42333 19.3145L9.57528 13.2451L5.76852 17.4331C5.1193 18.1956 4.37879 18.5987 3.547 18.6425C2.71521 18.6863 1.98346 18.215 1.35176 17.2285C0.760007 16.3128 0.611711 15.5559 0.906869 14.9577C1.20013 14.3232 1.79314 13.8731 2.68589 13.6077L8.71916 11.4329L3.09781 10.0353C1.9977 9.80187 1.24882 9.34966 0.851163 8.67866C0.451609 7.97134 0.514616 7.09402 1.04018 6.04668C1.501 5.14842 2.07403 4.66304 2.75927 4.59056C3.44261 4.48177 4.12777 4.75525 4.81474 5.41102L9.43905 9.59233L7.84713 4.10429C7.53712 3.02809 7.58204 2.15172 7.9819 1.47517C8.41603 0.760395 9.19366 0.373507 10.3148 0.314504C11.2912 0.263114 11.9926 0.499332 12.4188 1.02316C12.8431 1.51066 12.9372 2.27047 12.7009 3.30259L11.5033 9.53831L15.4728 5.34173C16.2286 4.5372 17.0053 4.13215 17.8028 4.12659C18.6365 4.11913 19.3501 4.59141 19.9438 5.54343C20.4975 6.42472 20.6448 7.16352 20.3858 7.75982C20.1268 8.35613 19.5167 8.82524 18.5554 9.16717L12.4651 11.2903L18.1435 12.7395C19.1713 12.9768 19.8849 13.449 20.2845 14.1564C20.7202 14.8618 20.6934 15.7372 20.204 16.7826C19.7431 17.6809 19.1701 18.1663 18.4849 18.2387C17.8358 18.3093 17.1488 17.9995 16.4237 17.3093L11.6966 13.2427L13.2772 18.5128C13.5834 19.5164 13.5384 20.3928 13.1424 21.1419C12.7444 21.8548 11.9849 22.2407 10.8638 22.2997Z"
                      fill="#1E3D2E"
                    />
                  </svg>
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <h2 className="text-[13vw] lg:text-[4vw] text-gray/70 font-semibold">
        Навыки
      </h2>
      <div className="scrollingText2  flex items-center py-[15px] gap-[30px] will-change-transform whitespace-nowrap border-t border-b border-gray rotate-[-3deg] ">
        <div className="text_slide-reverse flex items-center gap-[30px] will-change-transform">
          {[...Array(4)].map((e, i) =>
            line_two.map((word, index) => (
              <div
                className="flex items-center gap-[30px]"
                key={`line_two-${i}-line_two${index}`}
              >
                <span>{word}</span>
                <span>
                  <svg
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8638 22.2997C9.81498 22.3549 9.09556 22.1197 8.70548 21.594C8.3135 21.0319 8.21946 20.2721 8.42333 19.3145L9.57528 13.2451L5.76852 17.4331C5.1193 18.1956 4.37879 18.5987 3.547 18.6425C2.71521 18.6863 1.98346 18.215 1.35176 17.2285C0.760007 16.3128 0.611711 15.5559 0.906869 14.9577C1.20013 14.3232 1.79314 13.8731 2.68589 13.6077L8.71916 11.4329L3.09781 10.0353C1.9977 9.80187 1.24882 9.34966 0.851163 8.67866C0.451609 7.97134 0.514616 7.09402 1.04018 6.04668C1.501 5.14842 2.07403 4.66304 2.75927 4.59056C3.44261 4.48177 4.12777 4.75525 4.81474 5.41102L9.43905 9.59233L7.84713 4.10429C7.53712 3.02809 7.58204 2.15172 7.9819 1.47517C8.41603 0.760395 9.19366 0.373507 10.3148 0.314504C11.2912 0.263114 11.9926 0.499332 12.4188 1.02316C12.8431 1.51066 12.9372 2.27047 12.7009 3.30259L11.5033 9.53831L15.4728 5.34173C16.2286 4.5372 17.0053 4.13215 17.8028 4.12659C18.6365 4.11913 19.3501 4.59141 19.9438 5.54343C20.4975 6.42472 20.6448 7.16352 20.3858 7.75982C20.1268 8.35613 19.5167 8.82524 18.5554 9.16717L12.4651 11.2903L18.1435 12.7395C19.1713 12.9768 19.8849 13.449 20.2845 14.1564C20.7202 14.8618 20.6934 15.7372 20.204 16.7826C19.7431 17.6809 19.1701 18.1663 18.4849 18.2387C17.8358 18.3093 17.1488 17.9995 16.4237 17.3093L11.6966 13.2427L13.2772 18.5128C13.5834 19.5164 13.5384 20.3928 13.1424 21.1419C12.7444 21.8548 11.9849 22.2407 10.8638 22.2997Z"
                      fill="#1E3D2E"
                    />
                  </svg>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
