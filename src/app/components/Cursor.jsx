import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Cursor = () => {
  const cursor = useRef();
  useGSAP(() => {
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".cursor", "x", {
        duration: 0.2,
        ease: "power3",
      }),
      yTo = gsap.quickTo(".cursor", "y", {
        duration: 0.2,
        ease: "power3",
      });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    const hover_items = document.querySelectorAll(
      ".hovered, .link, .footer_link"
    );
    hover_items.forEach((hover_item) => {
      hover_item.addEventListener("mouseenter", () => {
        cursor.current.classList.add("active");
      });
      hover_item.addEventListener("mouseleave", () => {
        cursor.current.classList.remove("active");
      });
    });
  });

  return (
    <>
      {/* <div className="cursor w-[40px] aspect-square fixed top-0 left-0 pointer-events-none  z-[999] rounded-full border border-gray"></div> */}
      <div
        className="cursor w-[10px] aspect-square fixed top-0 left-0 pointer-events-none  z-[999] rounded-full bg-white"
        ref={cursor}
      ></div>
    </>
  );
};

export default Cursor;
