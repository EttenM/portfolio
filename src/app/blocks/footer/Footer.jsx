import React from "react";
import MailSvg from "../svg/MailSvg";
import TelegramSvg from "../svg/TelegramSvg";

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto flex flex-wrap gap-[30px] justify-between items-center py-[15px] text-white text-[4vw] xs:text-[2.5vw] md:text-[2vw] xl:text-[1vw]">
      <div className="">©️ Разработано мной</div>
      <div className="flex gap-[10px]">
        <a
          href="mailto:nettecrptwork@gmail.com"
          target="_blank"
          className="footer_link bg-gray w-[7vw] sm:w-[2vw] aspect-square rounded-[100%] flex items-center justify-center hover:bg-gold  duration-300 ease-out "
        >
          <MailSvg />
        </a>
        <a
          href="https://t.me/Mixail_e"
          target="_blank"
          className="footer_link bg-gray w-[7vw] sm:w-[2vw] aspect-square rounded-[100%] flex items-center justify-center hover:bg-gold  duration-300 ease-out "
        >
          <TelegramSvg />
        </a>
        <a
          href="https://t.me/Mixail_e"
          target="_blank"
          className="footer_link bg-gray w-[7vw] sm:w-[2vw] aspect-square rounded-[100%] flex items-center justify-center hover:bg-gold  duration-300 ease-out "
        >
          <TelegramSvg />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
