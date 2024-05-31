import React from "react";
import { FaGithub } from "react-icons/fa";

const MyPortfolio = () => {
  return (
    <>
      <div className="px-4 pb-20 lg:px-0 lg:pb-44">
        <div className="container">
          <div>
            <div className="flex flex-col items-center justify-center pb-6 md:pb-12">
              <h3 className="pb-[10px] font-Rubik text-[26px] font-extrabold uppercase text-primaryFontColor md:pb-[18px] md:text-[40px]">
                My Portfolio
              </h3>
              <p className="max-w-[540px] text-center font-Rubik text-sm font-normal leading-5 text-primaryFontColor opacity-[50%] md:text-lg">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-4 md:flex-nowrap md:gap-y-0">
              <div className="inline-block border-[1px] border-[#ffffff36] bg-black px-3 py-[6px] font-Poppins text-base text-primaryFontColor md:px-5 md:py-[10px] lg:text-2xl">
                UI/UX
              </div>
              <div className="inline-block border-[1px] border-[#ffffff36] bg-thirdBgColor px-3 py-[6px] font-Poppins text-base text-primaryFontColor md:px-5 md:py-[10px] lg:text-2xl">
                Web Design
              </div>
              <div className="inline-block border-[1px] border-[#ffffff36] bg-black px-3 py-[6px] font-Poppins text-base text-primaryFontColor md:px-5 md:py-[10px] lg:text-2xl">
                App Design
              </div>
              <div className="inline-block border-[1px] border-[#ffffff36] bg-black px-3 py-[6px] font-Poppins text-base text-primaryFontColor md:px-5 md:py-[10px] lg:text-2xl">
                Graphic Design
              </div>
            </div>
            {/* ================== */}
            <div className="flex flex-col items-center justify-between pt-12 md:flex-row md:gap-x-10 lg:gap-x-0">
              <div className="relative mb-5 h-[280px] w-[326px] overflow-hidden bg-black px-4 md:mb-0 lg:h-[334px] lg:w-[445px] lg:px-8">
                <div className="ml-auto w-[187px] lg:w-[274px]">
                  <img
                    src="/src/assets/oreby2.png"
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute left-4 top-[131px] w-[189px] shadow-2xl shadow-black lg:left-8 lg:w-[274px]">
                  <img
                    src="/src/assets/oreby.png"
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="pb-2 font-Rubik text-sm font-semibold italic text-primaryFontColor md:text-base lg:pb-6 lg:text-lg">
                  Frontend development
                </p>
                <h2 className="font-Rubik text-[26px] font-bold text-primaryFontColor lg:text-[40px]">
                  {" "}
                  Dynamic Ecommerce Website
                </h2>
                <p className="flex max-w-[558px] flex-col gap-y-2 pt-2 font-Rubik text-sm font-normal text-primaryFontColor opacity-[50%] md:text-base lg:pt-6 lg:text-lg">
                  This is an e-commerce website and this website is fully
                  dynamic so that it can be changed and updated easily and The
                  latest technology used here is
                  <span className="text-thirdBgColor">
                    React Js, Tailwind css, React Router, Redux, Firebase,
                    Toastify.
                  </span>
                  <span>
                    This website is designed in a completely user friendly way
                    and of course it is a mobile friendly fully responsive
                    website.
                  </span>
                </p>
                <div className="mt-3 inline-block cursor-pointer font-Rubik text-sm font-normal text-thirdBgColor hover:text-primaryFontColor hover:underline md:text-base lg:text-lg">
                  <a
                    href="https://github.com/Rodro-Kumar/Ecommerce.git"
                    target="_blank"
                    className="flex items-center gap-x-2"
                  >
                    Github Repository
                    <FaGithub className="text-xl lg:text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            {/* ======================== */}
            <div className="flex flex-col items-center justify-between pt-14 md:flex-row-reverse md:gap-x-10 lg:gap-x-0">
              <div className="relative mb-5 h-[280px] w-[326px] overflow-hidden bg-black px-4 lg:mb-0 lg:h-[334px] lg:w-[445px] lg:px-8">
                <div className="ml-auto w-[187px] lg:w-[274px]">
                  <img
                    src="/src/assets/ochi2.png"
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute left-4 top-[131px] w-[189px] shadow-2xl shadow-black lg:left-8 lg:w-[274px]">
                  <img
                    src="/src/assets/ochi.png"
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="pb-2 font-Rubik text-sm font-semibold italic text-primaryFontColor md:text-base lg:pb-6 lg:text-lg">
                  Frontend development
                </p>
                <h2 className="font-Rubik text-[26px] font-bold text-primaryFontColor lg:text-[40px]">
                  {" "}
                  Modern Landing Page
                </h2>
                <p className="flex max-w-[558px] flex-col gap-y-2 pt-2 font-Rubik text-sm font-normal text-primaryFontColor opacity-[50%] md:text-base lg:pt-6 lg:text-lg">
                  This is a modern landing page and uses the latest technology
                  here
                  <span className="text-thirdBgColor">
                    React Js, Tailwind css, Framer motion, Gasp, Locomotive,
                  </span>
                  <span>
                    This website has tried to show some unique features which
                    you can see well in desktop view and this website is
                    completely mobile friendly and user friendly.
                  </span>
                </p>
                <div className="mt-3 inline-block cursor-pointer font-Rubik text-sm font-normal text-thirdBgColor hover:text-primaryFontColor hover:underline md:text-base lg:text-lg">
                  <a
                    href="https://github.com/Rodro-Kumar/Modern-Web.git"
                    target="_blank"
                    className="flex items-center gap-x-2"
                  >
                    Github Repository
                    <FaGithub className="text-xl lg:text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
