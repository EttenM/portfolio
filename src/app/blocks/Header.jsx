import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { userAgent } from "next/server";
import React, { useContext, useEffect, useRef, useState } from "react";

const Header = ({ lenis, preloadOver }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    const state = openMenu;
    setOpenMenu(!state);
  };

  useGSAP(() => {
    // gsap.set(".menu_wrapp", { yPercent: -100 });
    // gsap.set(".link", { opacity: 0 });
    const menuTl = gsap.timeline({ paused: true });
    // const links = gsap.utils.toArray(".link");
    // gsap.set(".menu_wrapp", { yPercent: 100 });
    menuTl
      .to(".menu_wrapp", { display: "block", yPercent: 0, duration: 1 })
      .to(".link", { opacity: 1, stagger: 0.05, duration: 0.25 });

    if (openMenu) {
      menuTl.play();
      lenis?.stop();
    } else if (openMenu === false) {
      gsap.to(".menu_wrapp", {
        yPercent: -100,
        duration: 0.5,
        display: "none",
        onComplete: () => {
          if (preloadOver) {
            lenis?.start();
          }
        },
      });
      gsap.to(".link", {
        opacity: 0,
        duration: 0.25,
      });
    }
  }, [openMenu]);
  return (
    <header className="w-[95%] mx-auto absolute top-0 left-0 right-0 flex flex-col items-center justify-center py-[2vh]">
      <div
        className={`w-full flex justify-between items-center  text-[4vw] sm:text-[3vw] lg:text-[1.5vw] font-medium `}
      >
        <h3 className={`${openMenu ? "text-gold" : "text-grey"} opacity-70`}>
          Михаил Е.
        </h3>
        <button
          className={`burger w-[50px] h-[25px] lg:w-[4vw] lg:h-[5vh] flex flex-col justify-center items-center gap-2 rounded-[20px] relative z-[102] ${
            openMenu
              ? "bg-gold text-accent active_burger "
              : "bg-accent text-gold"
          }`}
          onClick={() => {
            toggleMenu();
          }}
        >
          <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="cross">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className={`menu_wrapp hidden fixed inset-0 gradient z-[100]  `}>
        <div className=" w-[90%] h-full mx-auto uppercase text-[6.5vw] text-gold font-bold flex flex-col md:flex-row justify-сenter items-start gap-[5vh] md:gap-[10vw] pt-[10vh]">
          <div className="flex flex-col gap-[5vh]">
            <Link
              href="#"
              className="link"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Домой
            </Link>
            <Link
              className="link"
              href="/#about"
              onClick={() => {
                setOpenMenu(false);
              }}
              // data-scroll="#about"
            >
              Обо мне
            </Link>
            <Link
              href="/#works"
              className="link"
              onClick={() => {
                setOpenMenu(false);
              }}
              // data-scroll="#works"
            >
              Работы
            </Link>
          </div>
          <div className="flex flex-col gap-[5vh]">
            <Link
              href="/#skills"
              className="link"
              onClick={() => {
                setOpenMenu(false);
              }}
              // data-scroll="#skills"
            >
              Навыки
            </Link>
            <Link
              href="/#contact"
              className="link"
              onClick={() => {
                setOpenMenu(false);
              }}
              // data-scroll="#contact"
            >
              Связаться
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
