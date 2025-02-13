import gsap from "gsap";

export const projectAnim = ({ projectsTl }) => {
  projectsTl
    .from(".circle", { opacity: 0, width: 0, height: 0 }, "same")
    .to(title_up.current, { xPercent: 100 }, "same")
    .to(title_dawn.current, { xPercent: -100 }, "same")
    .to(".circle", {
      scale:
        window.innerWidth <= window.innerHeight
          ? window.innerHeight / 140
          : window.innerWidth / 140,
    })
    .to(".cards", { display: "block" }, "same2");
  cards_array.map((card, index) => {
    projectsTl.from(
      `.card_${card.id}`,
      {
        scale: 1.5,
        y: height * 1.25,
        onStart: () => {
          const video = document.querySelector(`.card_${card.id} video`);
          video.play();
        },
      },
      `same${card.id + 1}`
    );
    if (cards_array.length - 1 === index) {
      return;
    } else {
      projectsTl.to(
        `.card_${card.id}`,
        { scale: 0.85, filter: "blur(12px)" },
        `same${card.id + 2}`
      );
    }
  });
};
