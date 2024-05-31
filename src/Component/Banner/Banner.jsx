import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div id="banner" className="overflow-hidden pt-0 md:pt-7 lg:pt-28">
        <div className="container">
          <div className="flex flex-col-reverse items-center justify-between overflow-hidden px-4 sm:items-start md:flex-row md:items-center lg:px-0">
            <div>
              <div className="font-Rubik text-[24px] font-extrabold uppercase text-primaryFontColor md:text-[26px] lg:text-[40px]">
                <h1>
                  HI, I’m{" "}
                  <span className="text-thirdBgColor">Rodro Karmakar</span>
                </h1>
                <p className="flex items-center gap-x-2 md:gap-x-5">
                  A creative{" "}
                  <span>
                    <img src="/src/assets/star.png" alt="" className="w-5" />
                  </span>
                  Designer
                </p>
                <h2>
                  Based in <span className="text-thirdBgColor">Dhaka</span>
                </h2>
              </div>

              <p className="max-w-[527px] pt-3 font-Rubik text-base font-normal text-primaryFontColor opacity-[50%] lg:text-lg">
                Dynamic Frontend Developer 💻 Transforming Vision into Stunning
                Web Experiences
              </p>
              <div className="flex items-center gap-x-1 pt-8 font-Rubik text-base font-light uppercase text-primaryFontColor md:pt-4 lg:gap-x-5 lg:pt-8 lg:text-2xl">
                <p>Design</p>
                <span>
                  <img src="/src/assets/star.png" alt="" className="w-4" />
                </span>
                <p>Development</p>
                <span>
                  <img src="/src/assets/star.png" alt="" className="w-4" />
                </span>
                <p>Webflow</p>
              </div>
              <div className="mt-8 flex w-[231px] items-center gap-x-2 rounded-[50px] border-2 border-[#FFFFFF] bg-[#ffffff31] p-[5px] lg:w-[367px] lg:p-[10px]">
                <div className="text-md flex cursor-pointer items-center gap-x-1 rounded-[50px] bg-thirdBgColor px-4 py-2 font-Rubik font-normal text-primaryFontColor lg:px-8 lg:py-4 lg:text-2xl">
                  <p>Portfolio</p>
                  <span>
                    <GoArrowUpRight className="text-xl lg:text-3xl" />
                  </span>
                </div>
                <div className="text-md cursor-pointer whitespace-nowrap rounded-[50px] px-4 py-2 font-Rubik font-normal text-primaryFontColor hover:bg-thirdBgColor lg:px-8 lg:py-4 lg:text-2xl">
                  <p>Hire me</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4 pt-8 md:gap-x-6">
                <a
                  href="https://www.facebook.com/kumar.rodro"
                  target="_blank"
                  className="text-md flex h-7 w-7 items-center justify-center rounded-full bg-[#ffffff6b] text-current transition-all hover:bg-white hover:text-sky-500 md:h-9 md:w-9 md:text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com/Rodro087"
                  target="_blank"
                  className="text-md flex h-7 w-7 items-center justify-center rounded-full bg-[#ffffff6b] text-current transition-all hover:bg-sky-500 hover:text-white md:h-9 md:w-9 md:text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/rodro-karmakar-41579b2b1/"
                  target="_blank"
                  className="text-md flex h-7 w-7 items-center justify-center rounded-full bg-[#ffffff6b] text-current transition-all hover:bg-sky-500 hover:text-white md:h-9 md:w-9 md:text-xl"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/Rodro-Kumar"
                  target="_blank"
                  className="text-md flex h-7 w-7 items-center justify-center rounded-full bg-[#ffffff6b] text-current transition-all hover:bg-black hover:text-white md:h-9 md:w-9 md:text-xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div>
              <div className="relative mb-9 h-[246px] w-[246px] overflow-hidden rounded-full border-4 border-thirdBgColor bg-secondaryBgColor md:mb-0 md:h-[340px] md:w-[340px] lg:h-[485px] lg:w-[485px]">
                <img
                  id="bannerimg"
                  src="/src/assets/rodro.png"
                  alt=""
                  className="w- absolute top-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="z-10 mb-14 flex h-[100px] w-[1500px] -rotate-[4deg] items-center gap-x-10 whitespace-nowrap bg-secondaryBgColor md:h-[145px] md:gap-x-12 lg:mb-32">
          {[
            "UX Design",
            "App Design",
            "Dashboard",
            "Wireframe",
            "User Research",
            "UX Design",
            "App Design",
          ].map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-x-2 overflow-hidden font-Rubik text-[24px] font-normal text-primaryFontColor md:gap-4 md:text-[32px]">
                <p>{item}</p>
                <span>
                  {" "}
                  <img
                    src="/src/assets/star2.png"
                    alt=""
                    className="absolute bottom-[30px] z-50 w-8 md:bottom-[53px] md:w-[34px]"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-16 pt-12 lg:px-0 lg:pt-16">
        <div className="container">
          <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
            <div>
              <h3 className="pb-2 font-Rubik text-[26px] font-extrabold uppercase text-primaryFontColor lg:pb-4 lg:text-[40px]">
                About Me
              </h3>
              <p className="max-w-[550px] pb-4 font-Rubik text-sm font-normal text-primaryFontColor opacity-[50%] sm:w-[480px] md:pb-0 lg:w-[550px] lg:text-lg">
                I'm Rodro Karmakar, a passionate frontend developer dedicated to
                creating exceptional digital experiences. With a blend of
                creativity and technical expertise, I specialize in crafting
                responsive and user-friendly interfaces that not only meet but
                exceed client expectations.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-1 text-[20px] text-yellow-500 lg:text-[32px]">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
              <div className="items-star flex flex-col sm:items-end">
                <h5 className="pb-1 pt-2 font-Rubik text-3xl font-bold text-primaryFontColor lg:pt-5 lg:text-5xl">
                  1 Years
                </h5>
                <p className="text-md font-Rubik font-normal text-primaryFontColor lg:text-xl">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
