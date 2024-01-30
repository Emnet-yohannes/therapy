import React from "react";
import Image from "next/image";
import Link from "next/link";
type HeroCardProps = {
  therapyTitle: string;
  therapyType: string;
  therapyImage: string;
  bgColor: string;
};
const HeroCards = ({
  therapyTitle,
  therapyType,
  therapyImage,
  bgColor,
}: HeroCardProps) => {
  return (
    <div
      className="rounded-tr-[3.75em] rounded-bl-[3.75em] first:border-[#A3E3BB] first:border-[0.5px]"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="flex flex-row justify-center text-[16px] mt-[1.125em] mx-[20px]">
        {therapyType}
      </div>
      <div className="mt-[12px]  mx-auto text-[32px] font-bold text-center">
        {therapyTitle}
      </div>
      <div className="mt-[31px] mx-auto flex flex-row justify-center underline">
        <Link href="/getstarted">Get Started</Link>
        <div>&gt;</div>
      </div>
      <div className="mt-[21px] flex flex-row justify-center">
        <Image alt="therapyImage" src={therapyImage} />
      </div>
    </div>
  );
};

export default HeroCards;
