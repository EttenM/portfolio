import React from "react";
import MailSvg from "../svg/MailSvg";
import TelegramSvg from "../svg/TelegramSvg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto flex flex-wrap gap-[30px] justify-between items-center py-[15px] text-white text-[4vw] xs:text-[2.5vw] md:text-[2vw] xl:text-[1vw]">
      <div className="">©️ Разработано мной</div>
      <div className="flex gap-[10px]">
        <Link
          href="mailto:nettecrptwork@gmail.com"
          target="_blank"
          className="footer_link bg-gray w-[1.5em] xl:w-[2em] aspect-square rounded-[100%] flex items-center justify-center hover:bg-gold  duration-300 ease-out "
        >
          <MailSvg className={"mail w-[50%] h-auto duration-300 ease-out"} />
        </Link>
        <Link
          href="https://t.me/Mixail_e"
          target="_blank"
          className="footer_link bg-gray w-[1.5em] xl:w-[2em] aspect-square rounded-[100%] flex items-center justify-center hover:bg-gold  duration-300 ease-out "
        >
          <TelegramSvg />
        </Link>
        <Link
          href="https://t.me/Mixail_e"
          target="_blank"
          className="footer_link bg-gray w-[1.5em] xl:w-[2em] aspect-square rounded-[100%] flex items-center justify-center hover:bg-gold  duration-300 ease-out "
        >
          <TelegramSvg />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
