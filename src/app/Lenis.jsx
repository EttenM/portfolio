"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Footer from "../blocks/footer/Footer";
import Header from "../blocks/header/Header";
import Cursor from "../components/cursor/Cursor";

const Lenis = ({ children }) => {
  const lenis = useLenis();
  const lenisRef = useRef();

  const lenisOptions = {
    easing: (t) => Math.sin((t * Math.PI) / 2),
    duration: 0.55,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions} ref={lenisRef}>
      <Cursor />
      <div className="bg-mainColor rounded-b-[40px]">
        <Header lenis={lenis} />
        {children}
      </div>
      <Footer />
    </ReactLenis>
  );
};

export default Lenis;
