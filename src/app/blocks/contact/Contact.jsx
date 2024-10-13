import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contact_section = useRef();
  const boxRef = useRef();
  const [alert, setAlert] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    socialLink: "",
    description: "",
  });

  useGSAP(() => {
    const bh = boxRef.current.getBoundingClientRect().height;
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

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const response = await axios.post("/api", formData);
      // await send();
      const emailResponse = await axios.post("/api/send", formData);
      toast.success(response.data.msg);
      setFormData({
        name: "",
        socialLink: "",
        description: "",
      });
      setSending(false);
    } catch (error) {
      toast.error("Ошибка. Попробуйте позже");
      setSending(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        className="flex flex-col  gap-[50px] w-[95%] lg:w-[90%] 2xl:w-[70%] justify-center items-center  pb-[30px] overflow-hidden "
        id="contact"
        ref={contact_section}
      >
        <h2 className="text-[13vw] lg:text-[4vw] text-gray/70 font-medium ">
          Связаться
        </h2>
        <div className="w-full grid grid-rows-[1fr_300px] grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-[30px] lg:gap-[80px] justify-center items-center">
          {/* <div className="w-full flex flex-col lg:flex-row gap-[30px] lg:gap-[80px] justify-center items-center"> */}
          <form
            action=""
            onSubmit={onSubmitHandler}
            className="flex items-start flex-col gap-2 w-full "
          >
            <div className="w-full">
              <label htmlFor="name" className="form_label ">
                Ваше имя
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={onChangeHandler}
                placeholder="Михаил"
                className="appearance-none	 px-1 py-2 sm:px-[0.9em] sm:py-[0.9em] w-full border-b-2 border-gray/50 rounded-t-[8px] 
              focus-within:border-b-[3px] focus-within:bg-gray/5  hover:bg-gray/5 text-gray/80 mt-1 mb-2 duration-150"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="socialLink" className="form_label ">
                Где с вами связаться?
              </label>

              <input
                type="text"
                name="socialLink"
                id="socialLink"
                value={formData.socialLink}
                onChange={onChangeHandler}
                placeholder="Почта / социальная сеть / мессенджер"
                className="appearance-none	 px-1 py-2 sm:px-[0.9em] sm:py-[0.9em] w-full border-b-2 border-gray/50 rounded-t-[8px] focus-within:border-b-[3px] focus-within:bg-gray/5  hover:bg-gray/5 text-gray/80 mt-1 mb-2 duration-150 autofill:bg-black"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="description" className="form_label ">
                Над чем поработаем?
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={onChangeHandler}
                placeholder="Я фотограф, мне нужно сделать привлекательный сайт-портфолио. Мне хочется видеть современные анимации. Давайте обсудим сотрудничество"
                className="appearance-none	min-h-[120px] md:min-h-[140px] xl:min-h-[calc(var(--index)*8)] max-h-[calc(var(--index)*15)] px-1 py-2 sm:px-[0.9em] sm:py-[0.9em]  w-full border-b-2 border-gray/50 rounded-t-[8px] focus-within:border-b-[3px] focus-within:bg-gray/5  hover:bg-gray/5 text-gray/80 mt-1 mb-2 duration-150"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent rounded-[8px] py-3 px-11 text-white  text-[24px] lg:text-[1vw] font-medium hover:bg-gold hover:text-accent duration-150 ease-out"
            >
              {sending && "Отправка..."}
              {!sending && "Отправить"}
            </button>
          </form>
          {/* <div className="flex flex-col gap-[15px] lg:gap-[30px] text-[4vw] lg:text-[2vw] text-white">
          <Link
            href="https://t.me/Mixail_e"
            target="_blank"
            className="bg-gray py-[0.25em] rounded-[0.5em] text-center hover:bg-accent hover:text-gold duration-300 ease-out hovered"
          >
            Telegram
          </Link>
          <div className="flex gap-[5px] lg:gap-[15px] hovered">
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
            <Link
              href="mailto:nettecrptwork@gmail.com"
              target="_blank"
              className="bg-gray py-[0.25em] px-[0.75em] lg:px-[0.5em]   h-full w-fit lg:w-auto aspect-square rounded-[0.5em] flex items-center justify-center 
              hover:bg-accent hover:text-gold duration-300 ease-out hovered"
            >
              <MailSvg
                className={"mail w-[1em] h-auto duration-300 ease-out"}
              />
            </Link>
          </div>

          {/* <Link
            href="https://t.me/Mixail_e"
            target="_blank"
            className="bg-gray py-[0.25em] rounded-[0.5em] text-center hover:bg-accent hover:text-gold duration-300 ease-out hovered"
          >
            Telegram
          </Link> 
        </div> */}

          <div
            ref={boxRef}
            className="boxRef relative w-full h-full mx-auto rounded-[40px] border border-[#000] text-[8vw]  sm:text-[5vw] lg:text-[3vw] text-white font-bold
      flex flex-col items-center justify-end gap-[0.25px] overflow-hidden "
          >
            <div className="work_pill1 w-[60%]  py-[0.25em] px-[0.5em] border border-[#000] bg-accent text-center rounded-[0.5em] self-end mr-[4vw]  md:mr-[3vw] will-change-transform">
              Work
            </div>
            <div className="work_pill2 w-[60%]  py-[0.25em] px-[0.5em] border border-[#000] bg-accent text-center rounded-[0.5em] self-start ml-[7vw] md:ml-[3vw] lg:ml-[1.5vw] will-change-transform">
              Let&apos;s
            </div>
            {/* <div className="w-[60%] absolute bottom-0 left-[10px] rotate-[20deg] py-[0.25em] px-[1em]">Let's</div> */}
          </div>
        </div>{" "}
      </div>
    </>
  );
};
export default Contact;
