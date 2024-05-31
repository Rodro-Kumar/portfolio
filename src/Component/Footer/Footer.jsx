import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container">
          <div className="pb-8 pt-10 md:pb-16 md:pt-28">
            <div className="flex flex-col items-center justify-center gap-y-8">
              <a
                href="#"
                className="font-Poppins text-[32px] font-bold uppercase leading-none text-thirdBgColor md:text-[40px] lg:text-[64px]"
              >
                Rodro
              </a>
              <div>
                <ul className="flex flex-col items-center gap-x-4 font-Poppins text-base font-normal text-primaryFontColor sm:flex-row md:text-lg lg:text-xl">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Me</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-x-4 md:gap-x-6">
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
          </div>
          {/* Footer bottom  */}
          <div className="text-md border-t border-[#ffffff27] bg-[#121212] py-4 text-center font-Poppins font-normal text-primaryFontColor md:py-6 md:text-xl">
            © 2023 <span className="font-bold text-thirdBgColor">Rodro</span>{" "}
            All Rights Reserved , Inc.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
