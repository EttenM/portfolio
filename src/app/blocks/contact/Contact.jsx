import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import CopySvg from "../svg/CopySvg";
import MailSvg from "../svg/MailSvg";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contact_section = useRef();
  const boxRef = useRef();
  const [alert, setAlert] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText("nettecrptwork@gmail.com");
    setAlert(true);
    // setTimeout(() => {
    //   setAlert(false);
    // }, 3000);
  };
  useGSAP(() => {
    const bh = boxRef.current.getBoundingClientRect().height;
    console.log(bh);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contact_section.current,
        start: "bottom bottom",
      },
    });
    tl.fromTo(
      ".work_pill2",
      { y: -bh - 100 },
      { y: 0, ease: "bounce.out", duration: 1.5 }
    ).fromTo(
      ".work_pill1",
      { y: -bh - 100 },
      { y: 0, ease: "bounce.out", duration: 1.25 }
    );
  });
  useEffect(() => {
    gsap.set(".copy_message", { yPercent: -100 });
    if (alert) {
      gsap.to(".copy_message", { yPercent: 0 });
      setTimeout(() => {
        gsap.to(".copy_message", {
          yPercent: -100,
          onComplete: () => {
            setAlert(false);
          },
        });
      }, 3000);
    }
  }, [alert]);
  return (
    <div
      className="flex flex-col md:flex-row  gap-[30px] w-[95%] sm:w-[90%] 2xl:min-h-[60vh] pb-[30px] overflow-hidden "
      id="contact"
      ref={contact_section}
    >
      <div className="flex flex-col flex-1 gap-[20px] md:gap-[5vh]">
        <h2 className="text-[13vw] sm:text-[4vw] text-gray/70 font-medium ">
          Связаться
        </h2>
        <div className="flex flex-col gap-[15px] lg:gap-[30px] text-[4vw] sm:text-[2vw] text-white">
          <a
            href="https://t.me/Mixail_e"
            target="_blank"
            className="bg-gray py-[0.25em] rounded-[0.5em] text-center hover:bg-accent hover:text-gold duration-300 ease-out"
          >
            Telegram
          </a>
          <div className="flex gap-[5px] sm:gap-[15px]">
            <button
              onClick={copyLink}
              className="relative bg-gray py-[0.25em] rounded-[0.5em] text-center hover:bg-accent hover:text-gold duration-300 ease-out w-full 
            flex justify-center items-center gap-[10px] overflow-hidden"
            >
              <span>nettecrptwork@gmail.com</span>
              <CopySvg />
              <div className="copy_message absolute top-0 left-0 w-full h-full py-[0.25em] rounded-[0.5em] bg-gold text-accent font-medium">
                Скопировано
              </div>
            </button>
            <a
              href="mailto:nettecrptwork@gmail.com"
              target="_blank"
              className="bg-gray py-[0.25em] px-[0.75em] sm:px-[0.5em]   h-full w-fit sm:w-auto aspect-square rounded-[0.5em] flex items-center justify-center hover:bg-accent hover:text-gold duration-300 ease-out "
            >
              <MailSvg />
            </a>
          </div>

          <a
            href="https://t.me/Mixail_e"
            target="_blank"
            className="bg-gray py-[0.25em] rounded-[0.5em] text-center hover:bg-accent hover:text-gold duration-300 ease-out"
          >
            Telegram
          </a>
        </div>
      </div>
      <div
        ref={boxRef}
        className="boxRef relative w-full sm:w-[80%] h-[30vh] md:h-auto md:w-[30vw] mx-auto rounded-[40px] border border-[#000] text-[8vw] sm:text-[3vw] text-white font-bold
      flex flex-col items-center justify-end gap-[0.25px] overflow-hidden"
      >
        <div className="work_pill1 w-[60%]  py-[0.25em] px-[0.5em] border border-[#000] bg-accent text-center rounded-[0.5em] self-end mr-[4vw]  md:mr-[3vw] will-change-transform">
          Work
        </div>
        <div className="work_pill2 w-[60%]  py-[0.25em] px-[0.5em] border border-[#000] bg-accent text-center rounded-[0.5em] self-start ml-[7vw] md:ml-[3vw] lg:ml-[1.5vw] will-change-transform">
          Let&apos;s
        </div>
        {/* <div className="w-[60%] absolute bottom-0 left-[10px] rotate-[20deg] py-[0.25em] px-[1em]">Let's</div> */}
      </div>
    </div>
  );
};
export default Contact;
