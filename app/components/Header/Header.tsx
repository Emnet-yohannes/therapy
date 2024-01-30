
'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GroupSvg from "../../../public/assets/Group.svg";
import LogoSvg from "../../../public/assets/Logo.svg";
import navMenuIcon from "../../../public/assets/navMenuIcon.svg";
import NavLinks from "./nav-links";
const Header = () => {
  
  return (
    <header className="flex flex-row justify-between md:relative bg-headerBG py-[1.25em]">
      <div className="flex flex-row justify-between  items-center bg-[#D9D9D9] bg-opacity-0 md:flex-grow">
        <div className="flex flex-row ml-[4.0625em] ">
          <div className="flex flex-row justify-center items-center">
            <Image src={GroupSvg} alt="main icon" />
          </div>
          <Image src={LogoSvg} alt="Logo" />
        </div>
      </div>
      <div className="hidden md:flex md:absolute md:w-full md:mx-auto ">
        <NavLinks />
      </div>
      <div className="flex md:hidden">
        <Image src={navMenuIcon} alt="menu Icon" />
      </div>
    </header>
  );
};

export default Header;
