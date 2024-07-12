'use client';
import Image from "next/image"
import React from "react";
import CustomButton from "./CustomButton";
import styles from './Navbar.module.css';

const RecentlyAdded = ({ eventName, eventDesc, image, userIcon, userName }) => {
  const Tab = () => {
  }
  return (
    <div className="flex-col flex items-center justify-center m-1 w-[350px] bg-[#FFFFFF1A] rounded-lg p-3">
      <div className="flex-row flex items-start justify-center">
        <Image src={image} alt={"orgicon"} width={67.5} height={67.5} className="w-[67.5px] h-[67.5px] mr-3"/>
        <div>
          <p className="text-white font-segoe font-[16px]">{eventName}</p>
          <p className={`w-[250px] font-segoe font-[13px] text-[#FFFFFF99] line-clamp-2`}>{eventDesc}</p>
        </div>
      </div>
      <div className="flex-row flex mt-2 justify-between">
        <div className="flex-row flex">
          <Image src={userIcon} alt={"usericon"} width={18} height={18} className="w-[18px] h-[18px] mt-1"/>
          <p className="font-[13px] text-white font-segoe ml-2">{`Posted by ${userName}`}</p>
        </div>
        <div className="ml-3">
          <CustomButton title={"Read more"} handleClick={Tab} containerStyles="bg-[#FFFFFF80] rounded-lg px-3 py-0.5 font-segoe font-[13px]"/>
        </div>

      </div>
    </div>
  );
}

export default RecentlyAdded;