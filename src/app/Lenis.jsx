"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Footer from "./blocks/footer/Footer";
import Header from "./blocks/Header";
import Preloader from "./blocks/Preloader";
import Cursor from "./components/Cursor";

const Lenis = ({ children }) => {
  const [preloadOver, setPreload] = useState(false);
  const lenis = useLenis();
  const lenisRef = useRef();
  useEffect(() => {
    // lenis?.stop();
    // // lenisRef.current?.lenis?.stop()
    // if (preloadOver) {
    //   lenis?.start();
    // }
  }, [lenis, preloadOver]);
  const lenisOptions = {
    easing: (t) => Math.sin((t * Math.PI) / 2),
    duration: 0.75,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions} ref={lenisRef}>
      <Cursor />
      <Preloader setPreload={setPreload} preloadOver={preloadOver} />
      <div className=" bg-mainColor rounded-b-[40px]">
        <Header lenis={lenis} preloadOver={preloadOver} />
        {children}
      </div>
      <Footer />
    </ReactLenis>
  );
};

export default Lenis;
