import React from "react";

const Award = () => {
  return (
    <>
      <div className="px-4 py-10 lg:px-0 lg:py-44">
        <div className="container">
          <div>
            <div className="flex flex-col items-center justify-center pb-6 md:pb-12">
              <h3 className="pb-[10px] font-Rubik text-[26px] font-extrabold uppercase text-primaryFontColor md:pb-[18px] md:text-[40px]">
                Awards
              </h3>
              <p className="max-w-[540px] text-center font-Rubik text-sm font-normal leading-5 text-primaryFontColor opacity-[50%] md:text-lg">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in.
              </p>
            </div>
            <div className="mb-[27px] w-full bg-black px-8 py-10 md:px-14">
              <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                <p className="font-Rubik text-lg font-normal text-primaryFontColor md:text-2xl">
                  Best Mobile App Design (2023)
                </p>
                <span className="font-Rubik text-sm font-bold text-primaryFontColor md:text-lg">
                  Product Design 2023
                </span>
              </div>
              <p className="max-w-[663px] pt-3 font-Rubik text-sm font-normal text-primaryFontColor opacity-[50%] md:pt-6 md:text-lg">
                Awarded by [Name of Awarding Body] for my design of the
                "Fitness+ App". The app's intuitive interface and user-friendly
                features were praised for promoting a healthy lifestyle.
              </p>
            </div>
            <div className="mb-[27px] w-full bg-black px-8 py-10 md:px-14">
              <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                <p className="font-Rubik text-lg font-normal text-primaryFontColor md:text-2xl">
                  UI/UX Design Competition (2022)
                </p>
                <span className="font-Rubik text-sm font-bold text-primaryFontColor md:text-lg">
                  Product Design 2022
                </span>
              </div>
              <p className="max-w-[663px] pt-3 font-Rubik text-sm font-normal text-primaryFontColor opacity-[50%] md:pt-6 md:text-lg">
                My design concept for a sustainable e-commerce platform was
                selected as a finalist in the [Name of Competition]. The judges
                commended the design's focus on user experience and eco-friendly
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
