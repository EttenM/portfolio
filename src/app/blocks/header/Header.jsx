import { navigation } from "@/constants/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Header = ({ lenis }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    const state = openMenu;
    setOpenMenu(!state);
  };
  const menuTimeline = useRef();
  useGSAP(() => {
    menuTimeline.current = gsap.timeline({ paused: true });

    menuTimeline.current
      .to(".menu_wrapp", { display: "flex", duration: 0 })
      .to(".menu_wrapp", {
        yPercent: -110,
        duration: 0.75,
        ease: "ease",
        borderRadius: 0,
      })
      .to(".link", { opacity: 1, stagger: 0.05, duration: 0.25 });
  }, []);

  useGSAP(() => {
    if (openMenu) {
      lenis?.stop();
      menuTimeline.current.timeScale(1).play();
    } else if (openMenu === false) {
      lenis?.start();
      menuTimeline.current.timeScale(3).reverse();
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
        className={`menu_wrapp fixed top-[110%]  left-0 w-screen h-screen bg-secondAccent z-[100] rounded-t-[5em] overflow-auto font-rubikMonoOne text-[calc(var(--index)*5)] md:text-[calc(var(--index)*3)] text-white hidden flex-col justify-center items-center  gap-[5vh] text-center`}
      >
        {navigation.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="link hover:text-accent duration-200 opacity-0"
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
