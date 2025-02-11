import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { userAgent } from "next/server";
import React, { useContext, useEffect, useRef, useState } from "react";

const Header = ({ lenis, preloadOver }) => {
  const links = [
    { title: "Домой", href: "#" },
    { title: " Про меня", href: "/#about" },
    { title: "Работы", href: "/#works" },
    { title: "Навыки", href: "/#skills" },
    { title: "Связаться", href: "/#contact" },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    const state = openMenu;
    setOpenMenu(!state);
  };

  useGSAP(() => {
    const menuTl = gsap.timeline({ paused: true });
    menuTl
      .to(".menu_wrapp", {
        visibility: "visible",
        yPercent: 0,
        duration: 0.75,
        ease: "ease",
        borderRadius: 0,
        onStart: () => {
          lenis?.stop();
        },
      })
      .to(".link", { opacity: 1, stagger: 0.05, duration: 0.25 });

    if (openMenu) {
      menuTl.play();
    } else if (openMenu === false) {
      lenis?.start();
      gsap.to(".menu_wrapp", {
        yPercent: 100,
        borderRadius: "40%",
        duration: 0.5,
      });
      gsap.to(".link", {
        opacity: 0,
        duration: 0.25,
      });
    }
  }, [openMenu]);
  return (
    <header className="header w-[95%] mx-auto absolute top-0 left-0 right-0 flex flex-col items-center justify-center py-[2vh] ">
      <div
        className={`w-full flex justify-between items-center  text-[4vw] sm:text-[3vw] lg:text-[1.5vw] font-medium `}
      >
        <h3 className="text-secondColor">Михаил Е.</h3>
        <button
          name="burger_menu"
          role="button"
          className={`burger w-[50px] h-[25px] lg:w-[4vw] lg:h-[5vh] flex flex-col justify-center items-center gap-2 rounded-[20px] relative z-[102]  ${
            openMenu ? "text-accent active_burger " : " text-gold"
          } hovered`}
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
      <div
        className={`menu_wrapp fixed inset-0 bg-secondAccent z-[100] overflow-auto invisible font-rubikMonoOne text-[calc(var(--index)*5)] md:text-[calc(var(--index)*3)] text-white flex flex-col justify-center items-center  gap-[5vh] text-center`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="link hover:text-accent duration-200"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
