import React from "react";
import Arrow from "../../components/svg/Arrow";
import Link from "next/link";
const VideoCard = ({ card }) => {
  return (
    <div
      className={`card_${card.id} w-[95%] sm:w-[60%] h-auto aspect-video fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
    rounded-[2em] overflow-hidden will-change-transform`}
    >
      <video
        className="video w-full h-full object-cover focus:outline-none "
        loop
        preload="auto"
        playsInline
        muted
      >
        <source src={card.src} type="video/mp4" />
      </video>
      <Link
        href={card.link}
        target="_blank"
        className="project__link w-[15%] md:w-[7.5%] h-auto aspect-square rounded-full absolute bottom-[5%] right-[5%] translate-x-[-5%] translate-y-[-5%]  bg-accent text-[#141414] border-2 border-[#141414]
flex justify-center items-center  overflow-hidden hovered"
        tabIndex={-1}
      >
        <Arrow
          className={
            "arrow arrow-1 w-[30%] h-auto absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rotate-[315deg] duration-[0.5s] ease-out pointer-events-none"
          }
        />
        <Arrow
          className={
            "arrow arrow-2 w-[30%] h-auto absolute top-[105%] left-[-50%] translate-y-[105%] translate-x-[50%] rotate-[315deg] duration-[0.5s] ease-out pointer-events-none"
          }
        />
      </Link>
    </div>
  );
};

export default VideoCard;
