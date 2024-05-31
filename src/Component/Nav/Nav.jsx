import React from "react";
import { RiBarChartHorizontalFill } from "react-icons/ri";

const Nav = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center justify-between px-4 py-6 lg:px-0">
            <div>
              <a
                href="#"
                className="font-Rubik text-[26px] font-bold uppercase tracking-widest text-thirdBgColor lg:text-[32px]"
              >
                Rodro
              </a>
            </div>
            <div className="hidden items-center gap-x-6 md:flex">
              <ul className="flex items-center gap-x-6 font-Rubik text-xl font-normal text-primaryFontColor md:text-base lg:text-xl">
                <li>
                  <a href="#" className="navlist">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="navlist">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#" className="navlist">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="navlist">
                    Testimonials
                  </a>
                </li>
              </ul>
              <div className="cursor-pointer bg-thirdBgColor px-6 py-3 font-Rubik text-xl font-normal text-primaryFontColor transition-all hover:bg-[#cf6d22] active:scale-90 md:px-3 md:py-2 md:text-base lg:text-xl">
                Downlaod CV
              </div>
            </div>
            <div className="cursor-pointer md:hidden">
              <span>
                <RiBarChartHorizontalFill className="text-2xl text-primaryFontColor" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
