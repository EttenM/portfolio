import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileCode2, X } from "lucide-react";
import "./style.scss";
import SkillGroupList from "./SkillGroupList";
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const frontend_list = [
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Gsap",
    "Tailwind",
    "Scss",
    "Framer Motion",
    "Three.js",
    "Zustand",
    "TanStack Query",
  ];
  const backend_list = ["Postgresql", "MongoDB", "Prisma ORM"];
  const tools_list = ["ShadCn", "Gulp", "Ubuntu/Nginx"];

  useGSAP(() => {
    const items = document.querySelectorAll(".skill_group_title");

    if (items.length > 0) {
      items[0].classList.add("active");
    }
    const span = document.querySelector(".counter");

    const skills_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills_section",
        start: "+=30% bottom",
      },
    });
    let currentValue = 0;

    skills_tl
      .to(".line-code", {
        duration: 0.1,
        opacity: 1,
        stagger: 1.5,
      })

      .to(".counter", {
        duration: 1.5,
        ease: "power1.out",
        onUpdate: function () {
          if (currentValue === 100) {
            return;
          }
          currentValue += 2;
          span.textContent = currentValue;
        },
      })
      .to(".list_skills", { opacity: 1 });
  });
  const toggleList = (e) => {
    const list = e.target;
    list.classList.toggle("active");
  };
  return (
    <section className="skills_section w-screen min-h-[max(500px,_80vh)] h-[100vh] py-[10vh]">
      <div className="w-[95%] sm:w-[80%] h-full flex flex-col border-accent border-[4px] rounded-[7px] mx-auto bg-[#1E1E1E] ">
        <div className="mx-[10px] mt-[10px] px-[15px] py-[5px] bg-accent  rounded-[7px] flex justify-between items-center">
          <div className="w-[2.5em] xl:w-[1.8em]  aspect-square">
            <FileCode2 width="100%" height="100%" stroke="#1E1E1E" />
          </div>
          <p className="text-[max(16px,_1vw)] font-literata text-[#1E1E1E]">
            Console
          </p>
          <div className="w-[2.5em] xl:w-[1.8em]  aspect-square">
            <X width="100%" height="100%" stroke="#1E1E1E" />
          </div>
        </div>
        <div className="terminal flex flex-col gap-[10px] text-white font-rubikMonoOne text-[max(12px,_0.85vw)] pl-[2em] py-[2em] overflow-y-auto text-balance">
          <p className="line-code opacity-0">- установка соединения ...</p>
          <p className="line-code opacity-0">- подключение к серверу ...</p>
          <p className="line-code opacity-0">
            - загрузка навыков - [<span className="counter"></span>% / 100%]
          </p>
          <ul className="list_skills flex flex-col gap-[10px] opacity-0">
            <p>- Навыки:</p>
            <SkillGroupList
              liTitle="Frontend"
              list={frontend_list}
              toggleList={toggleList}
            />
            <SkillGroupList
              liTitle="Backend"
              list={backend_list}
              toggleList={toggleList}
            />
            <SkillGroupList
              liTitle="Инструменты"
              list={tools_list}
              toggleList={toggleList}
            />
          </ul>
        </div>
      </div>
    </section>
    // <section
    //   className="w-screen flex flex-col justify-center items-center gap-[5vh] py-[max(60px,calc(var(--index)*5))] overflow-hidden text-[4vw] lg:text-[1.75vw] font-semibold"
    //   id="skills"
    // >
    //   <div className="scrollingText  flex items-center py-[15px] gap-[30px] translate-x-[15%] will-change-transform whitespace-nowrap border-t border-b border-gray  rotate-[-3deg] ">
    //     <div className="text_slide flex items-center gap-[30px] will-change-transform ">
    //       {[...Array(4)].map((e, i) =>
    //         line_one.map((word, index) => (
    //           <div
    //             className="flex items-center gap-[30px]"
    //             key={`repeat-${i}-line_one${index}`}
    //           >
    //             <span>{word}</span>
    //             <span>
    //               <svg
    //                 width="21"
    //                 height="23"
    //                 viewBox="0 0 21 23"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M10.8638 22.2997C9.81498 22.3549 9.09556 22.1197 8.70548 21.594C8.3135 21.0319 8.21946 20.2721 8.42333 19.3145L9.57528 13.2451L5.76852 17.4331C5.1193 18.1956 4.37879 18.5987 3.547 18.6425C2.71521 18.6863 1.98346 18.215 1.35176 17.2285C0.760007 16.3128 0.611711 15.5559 0.906869 14.9577C1.20013 14.3232 1.79314 13.8731 2.68589 13.6077L8.71916 11.4329L3.09781 10.0353C1.9977 9.80187 1.24882 9.34966 0.851163 8.67866C0.451609 7.97134 0.514616 7.09402 1.04018 6.04668C1.501 5.14842 2.07403 4.66304 2.75927 4.59056C3.44261 4.48177 4.12777 4.75525 4.81474 5.41102L9.43905 9.59233L7.84713 4.10429C7.53712 3.02809 7.58204 2.15172 7.9819 1.47517C8.41603 0.760395 9.19366 0.373507 10.3148 0.314504C11.2912 0.263114 11.9926 0.499332 12.4188 1.02316C12.8431 1.51066 12.9372 2.27047 12.7009 3.30259L11.5033 9.53831L15.4728 5.34173C16.2286 4.5372 17.0053 4.13215 17.8028 4.12659C18.6365 4.11913 19.3501 4.59141 19.9438 5.54343C20.4975 6.42472 20.6448 7.16352 20.3858 7.75982C20.1268 8.35613 19.5167 8.82524 18.5554 9.16717L12.4651 11.2903L18.1435 12.7395C19.1713 12.9768 19.8849 13.449 20.2845 14.1564C20.7202 14.8618 20.6934 15.7372 20.204 16.7826C19.7431 17.6809 19.1701 18.1663 18.4849 18.2387C17.8358 18.3093 17.1488 17.9995 16.4237 17.3093L11.6966 13.2427L13.2772 18.5128C13.5834 19.5164 13.5384 20.3928 13.1424 21.1419C12.7444 21.8548 11.9849 22.2407 10.8638 22.2997Z"
    //                   fill="#1E3D2E"
    //                 />
    //               </svg>
    //             </span>
    //           </div>
    //         ))
    //       )}
    //     </div>
    //   </div>

    //   <h2 className="text-[13vw] lg:text-[4vw] text-gray/70 font-semibold">
    //     Навыки
    //   </h2>
    //   <div className="scrollingText2  flex items-center py-[15px] gap-[30px] will-change-transform whitespace-nowrap border-t border-b border-gray rotate-[-3deg] ">
    //     <div className="text_slide-reverse flex items-center gap-[30px] will-change-transform">
    //       {[...Array(4)].map((e, i) =>
    //         line_two.map((word, index) => (
    //           <div
    //             className="flex items-center gap-[30px]"
    //             key={`line_two-${i}-line_two${index}`}
    //           >
    //             <span>{word}</span>
    //             <span>
    //               <svg
    //                 width="21"
    //                 height="23"
    //                 viewBox="0 0 21 23"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M10.8638 22.2997C9.81498 22.3549 9.09556 22.1197 8.70548 21.594C8.3135 21.0319 8.21946 20.2721 8.42333 19.3145L9.57528 13.2451L5.76852 17.4331C5.1193 18.1956 4.37879 18.5987 3.547 18.6425C2.71521 18.6863 1.98346 18.215 1.35176 17.2285C0.760007 16.3128 0.611711 15.5559 0.906869 14.9577C1.20013 14.3232 1.79314 13.8731 2.68589 13.6077L8.71916 11.4329L3.09781 10.0353C1.9977 9.80187 1.24882 9.34966 0.851163 8.67866C0.451609 7.97134 0.514616 7.09402 1.04018 6.04668C1.501 5.14842 2.07403 4.66304 2.75927 4.59056C3.44261 4.48177 4.12777 4.75525 4.81474 5.41102L9.43905 9.59233L7.84713 4.10429C7.53712 3.02809 7.58204 2.15172 7.9819 1.47517C8.41603 0.760395 9.19366 0.373507 10.3148 0.314504C11.2912 0.263114 11.9926 0.499332 12.4188 1.02316C12.8431 1.51066 12.9372 2.27047 12.7009 3.30259L11.5033 9.53831L15.4728 5.34173C16.2286 4.5372 17.0053 4.13215 17.8028 4.12659C18.6365 4.11913 19.3501 4.59141 19.9438 5.54343C20.4975 6.42472 20.6448 7.16352 20.3858 7.75982C20.1268 8.35613 19.5167 8.82524 18.5554 9.16717L12.4651 11.2903L18.1435 12.7395C19.1713 12.9768 19.8849 13.449 20.2845 14.1564C20.7202 14.8618 20.6934 15.7372 20.204 16.7826C19.7431 17.6809 19.1701 18.1663 18.4849 18.2387C17.8358 18.3093 17.1488 17.9995 16.4237 17.3093L11.6966 13.2427L13.2772 18.5128C13.5834 19.5164 13.5384 20.3928 13.1424 21.1419C12.7444 21.8548 11.9849 22.2407 10.8638 22.2997Z"
    //                   fill="#1E3D2E"
    //                 />
    //               </svg>
    //             </span>
    //           </div>
    //         ))
    //       )}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Skills;
