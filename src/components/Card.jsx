import { EllipsisImg } from "../images";

const Card = ({ current, previous, bgColor, BgImage, labor }) => {
  return (
    <div
      className={`w-[327px] h-[160px] flex flex-col justify-end relative bg-${bgColor}`}
    >
      <BgImage className="absolute top-0 right-0" />
      <div className="w-full h-[72%] bg-neutral-darkBlue z-10 rounded-xl flex flex-col py-7 px-6">
        <div className="w-full flex items-center justify-between my-1">
          <span className="text-[18px] leading-[21.33px] font-medium text-white capitalize">
            {labor}
          </span>
          <EllipsisImg />
        </div>
        <div className="w-full flex justify-between items-center text-center">
          <span className="text-[32px] leading-[32px] font-light text-white">
            {current} hours
          </span>
          <span className="text-[15px] font-normal leading-[18px] text-neutral-paleBlue pt-1">
            Last Week - {previous} hours
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
