import Jeremy from "./images/image-jeremy.png";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import { WorkImg, StudyImg } from "./images";
import { data } from "./data";

export default function App() {
  const [timeSpan, setTimeSpan] = useState({
    daily: false,
    weekly: false,
    monthly: true,
  });
  const [currentTime, setCurrentTime] = useState("daily");
  const handleClick = (time) => {
    let newTimeSpan = {};
    for (const key in timeSpan) {
      if (key === time) {
        setCurrentTime(time);
        newTimeSpan[key] = true;
      } else {
        newTimeSpan[key] = false;
      }
    }
    // console.log(newTimeSpan);
    console.log(currentTime);
    setTimeSpan(newTimeSpan);
  };
  return (
    <div className="bg-neutral-veryDarkBlue w-full h-auto grid gap-5 [&>*]:mx-auto [&>*]:rounded-xl [&>*]:overflow-hidden pt-5">
      <div className="w-[327px] h-[203px] bg-neutral-darkBlue">
        <div className="bg-primary-blue w-full h-[60%] rounded-xl flex justify-center items-center gap-3">
          <div className="w-[20%]">
            <img className="w-full" src={Jeremy} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] leading-[18px] font-normal text-neutral-paleBlue">
              Report for
            </span>
            <span className="text-[24px] text-white leading-7 font-light">
              Jeremy Robson
            </span>
          </div>
        </div>
        <div className="w-full h-[40%] flex justify-around items-center text-neutral-saturatedBlue text-[18px] [&>*]:hover:cursor-pointer">
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
      <Card
        currentTime={currentTime}
        labor={data[0].title}
        current={data[0].timeframes[currentTime].current}
        previous={data[0].timeframes[currentTime].previous}
        bgColor="primary-lightRed1"
        BgImage={WorkImg}
      />
    </div>
  );
}
