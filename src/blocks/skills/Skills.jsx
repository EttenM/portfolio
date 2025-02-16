"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileCode2, X } from "lucide-react";
import "./skills.scss";
import SkillGroupList from "./SkillGroupList";
import { backend_list, frontend_list, tools_list } from "@/constants/skills";
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
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
          if (currentValue >= 100) {
            return;
          }
          currentValue += Math.round(skills_tl.progress() * 2);
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
            - загрузка навыков - [
            <span className="counter inline-block text-end min-w-[30px] sm:min-w-0"></span>
            % / 100%]
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
  );
};

export default Skills;
