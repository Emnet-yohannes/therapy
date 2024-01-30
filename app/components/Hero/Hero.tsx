import React from "react";
import individualTherapyImage from "../../../public/assets/HeroIndividualTherapy.png";
import coupleTherapyImage from "../../../public/assets/HeroCoupleTherapy.png";
import teensTherapyImage from "../../../public/assets/HeroTeenTherapy.png";
import HeroCards from "../HeroCards/HeroCards";

const Hero = () => {
  const therapies = [
    {
      type: "Therapy For Me",
      title: "Individual",
      image: individualTherapyImage,
      bgColor: "#E8F5EE",
    },
    {
      type: "Therapy For us",
      title: "Couples",
      image: coupleTherapyImage,
      bgColor: "#FFF0EA",
    },
    {
      type: "For My Child",
      title: "Teens",
      image: teensTherapyImage,
      bgColor: "#FFF5D4",
    },
  ];
  return (
    <div className=" bg-heroBackground">
      <div className="flex flex-row justify-center space-x-[2em] md:space-x-[5em] pt-[8em] md:pt-[7.125em]">
        <h1 className="text-textBlackLight text-[1.625rem]">Anywhere</h1>
        <h1 className="text-textBlackLight text-[1.625rem]">Anytime</h1>
        <h1 className="text-textBlackLight text-[1.625rem]">Confidential</h1>
      </div>
      <div className="flex flex-row justify-center mt-[2.125em]   md:mt-[2.8125em] ">
        <h1 className="text-white text-center text-[80px] font-bold capitalize leading-none">
          Feel better today,
          <br />
          stay calm for tomorrow
        </h1>
      </div>
      <div className="flex flex-row justify-center ">
        <div className="flex flex-row px-[2.5em] py-[1.875em] bg-rosePink rounded-[2.4375em] text-white space-x-[15px] md:mt-[3.25em]">
          <button className="font-semibold text-[1.25rem] ">Booking Now</button>
          <div className="flex flex-row justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M1.60156 2.41602L16.6016 17.416M16.6016 17.416V3.01602M16.6016 17.416H2.20156"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-charcoalGray text-[32px] font-bold capitalize text-center mt-[73px]">
        What Therapy Support Do You Need ?  
      </div>
      <div className="flex flex-row justify-center md:mt-[2.875em] ">
        <div className="grid grid-cols-3 gap-[3.5em]">
          {therapies?.map((therapy) => (
            <div key={therapy?.title}>
              <HeroCards
                therapyTitle={therapy?.title}
                therapyType={therapy?.type}
                therapyImage={therapy?.image}
                bgColor={therapy?.bgColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
