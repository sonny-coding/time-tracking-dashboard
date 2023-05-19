// import React from "react";
import Jeremy from "../images/image-jeremy.png";

const IntroCard = ({ timeSpan, handleClick }) => {
  return (
    <div className="w-[327px] h-[203px] bg-neutral-darkBlue lg:row-span-2 lg:h-full">
      <div className="bg-primary-blue w-full h-[60%] rounded-xl flex justify-center items-center lg:flex-col lg:items-start lg:justify-start gap-3 lg:gap-6 lg:p-5">
        <div className="w-[20%] lg:w-[30%]">
          <img className="w-full border-4 rounded-full" src={Jeremy} alt="" />
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] leading-[18px] font-normal text-neutral-paleBlue">
            Report for
          </span>
          <span className="text-[24px] lg:text-[40px] lg:leading-[47px] text-white leading-7 font-light">
            Jeremy Robson
          </span>
        </div>
      </div>
      <div className="w-full h-[40%] flex justify-around lg:flex-col lg:items-start lg:p-5 items-center text-neutral-saturatedBlue text-[18px] [&>*]:hover:cursor-pointer">
        <span
          className={
            timeSpan.daily ? "text-white" : "text-neutral-saturatedBlue"
          }
          onClick={() => handleClick("daily")}
        >
          Daily
        </span>
        <span
          className={
            timeSpan.weekly ? "text-white" : "text-neutral-saturatedBlue"
          }
          onClick={() => handleClick("weekly")}
        >
          Weekly
        </span>
        <span
          className={
            timeSpan.monthly ? "text-white" : "text-neutral-saturatedBlue"
          }
          onClick={() => handleClick("monthly")}
        >
          Monthly
        </span>
      </div>
    </div>
  );
};

export default IntroCard;
