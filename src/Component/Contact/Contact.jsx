import React from "react";
import { TiAttachment } from "react-icons/ti";

const Contact = () => {
  return (
    <>
      <div className="px-4 pb-28 lg:px-0">
        <div className="container">
          <div>
            <div className="flex flex-col items-center justify-center">
              <p className="pb-4 font-Rubik text-sm font-semibold italic text-primaryFontColor md:text-lg">
                Contact
              </p>
              <h2 className="pb-12 font-Rubik text-[26px] font-bold uppercase text-primaryFontColor md:text-[40px]">
                Reach out me
              </h2>
            </div>
            <div className="bg-[#fd6e0023] px-12 py-8 md:px-28 md:py-16">
              <h4 className="whitespace-nowrap pb-6 font-Rubik text-[22px] font-bold uppercase text-primaryFontColor md:pb-12 md:text-[40px]">
                any project?
              </h4>
              <div className="flex flex-col items-start justify-between gap-y-7 md:flex-row md:items-center">
                <div className="w-full md:basis-2/5">
                  <h4 className="font-Rubik text-xs font-medium uppercase text-primaryFontColor md:text-base">
                    Name
                  </h4>
                  <input
                    type="text"
                    className="w-full border-b bg-transparent text-primaryFontColor"
                  />
                </div>
                <div className="w-full md:basis-2/5">
                  <h4 className="font-Rubik text-xs font-medium uppercase text-primaryFontColor md:text-base">
                    Email
                  </h4>
                  <input
                    type="text"
                    className="w-full border-b bg-transparent text-primaryFontColor"
                  />
                </div>
              </div>
              <div className="mt-7 md:mt-14">
                <h4 className="font-Rubik text-xs font-medium uppercase text-primaryFontColor md:text-base">
                  Message
                </h4>
                <input
                  type="text"
                  className="w-full border-b bg-transparent text-primaryFontColor"
                />
              </div>
              <div className="mt-4 flex cursor-pointer items-center gap-x-2 font-Rubik text-base font-medium uppercase text-primaryFontColor">
                <TiAttachment className="text-2xl" />
                <span>Attach file</span>
              </div>
              <div className="mt-10 inline-block cursor-pointer bg-thirdBgColor px-5 py-2 font-Rubik text-sm font-medium text-primaryFontColor transition-all hover:bg-[#cf6d22] active:scale-95 md:px-10 md:py-4 md:text-lg">
                Submit now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
