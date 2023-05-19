import Jeremy from "./images/image-jeremy.png";
import { useState } from "react";
import Card from "./components/Card";
import IntroCard from "./components/IntroCard";
import {
  WorkImg,
  PlayImg,
  SelfCareImg,
  SocialImg,
  StudyImg,
  ExerciseImg,
} from "./images";
import { data } from "./data";

export default function App() {
  const [timeSpan, setTimeSpan] = useState({
    daily: true,
    weekly: false,
    monthly: false,
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
    <div className="flex justify-center items-center h-auto lg:h-screen bg-neutral-veryDarkBlue lg:px-2">
      <div className=" w-full lg:h-[75%] grid lg:grid-cols-4 lg:grid-rows-2 gap-8 [&>*]:m-auto [&>*]:rounded-xl [&>*]:overflow-hidden py-5">
        <IntroCard handleClick={handleClick} timeSpan={timeSpan} />
        <Card
          currentTime={currentTime}
          labor={data[0].title}
          current={data[0].timeframes[currentTime].current}
          previous={data[0].timeframes[currentTime].previous}
          bgColor="bg-primary-lightRed1"
          BgImage={WorkImg}
        />
        <Card
          currentTime={currentTime}
          labor={data[1].title}
          current={data[1].timeframes[currentTime].current}
          previous={data[1].timeframes[currentTime].previous}
          bgColor="bg-primary-softBlue"
          BgImage={PlayImg}
        />
        <Card
          currentTime={currentTime}
          labor={data[2].title}
          current={data[2].timeframes[currentTime].current}
          previous={data[2].timeframes[currentTime].previous}
          bgColor="bg-primary-lightRed2"
          BgImage={StudyImg}
        />
        <Card
          currentTime={currentTime}
          labor={data[3].title}
          current={data[3].timeframes[currentTime].current}
          previous={data[3].timeframes[currentTime].previous}
          bgColor="bg-primary-limeGreen"
          BgImage={ExerciseImg}
        />
        <Card
          currentTime={currentTime}
          labor={data[4].title}
          current={data[4].timeframes[currentTime].current}
          previous={data[4].timeframes[currentTime].previous}
          bgColor="bg-primary-violet"
          BgImage={SocialImg}
        />
        <Card
          currentTime={currentTime}
          labor={data[5].title}
          current={data[5].timeframes[currentTime].current}
          previous={data[5].timeframes[currentTime].previous}
          bgColor="bg-primary-softOrange"
          BgImage={SelfCareImg}
        />
      </div>
    </div>
  );
}
