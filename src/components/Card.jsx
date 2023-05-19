import { useState } from "react";
import { EllipsisImg } from "../images";

const Card = ({ current, previous, bgColor, BgImage, labor, currentTime }) => {
  //   let [displayText, setDisplayText] = useState("Today");
  //   if (current === "daily") {
  //     setDisplayText("Today");
  //   } else if (current === "weekly") {
  //     setDisplayText("This Week");
  //   } else if (current === "monthly") {
  //     setDisplayText("This month");
  //   }
  return (
    <div
      className={`w-[327px] lg:w-full h-[160px] lg:h-full flex flex-col justify-end relative ${bgColor}`}
    >
      <BgImage className="absolute top-0 right-0" />
      <div className="w-full h-[72%] bg-neutral-darkBlue z-10 rounded-xl flex flex-col py-7 px-6">
        <div className="w-full flex items-center justify-between my-1">
          <span className="text-[18px] leading-[21.33px] font-medium text-white capitalize">
            {labor}
          </span>
          <EllipsisImg />
        </div>
        <div className="w-full flex justify-between items-center lg:flex-col lg:items-start">
          <span className="text-3xl lg:text-[56px] lg:leading-[66px] font-light text-white">
            {current} hours
          </span>
          <span className="text-[15px] font-normal leading-[18px] text-neutral-paleBlue pt-2">
            {currentTime === "daily"
              ? "Today"
              : currentTime === "weekly"
              ? "This week"
              : "This month"}{" "}
            - {previous} hours
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
