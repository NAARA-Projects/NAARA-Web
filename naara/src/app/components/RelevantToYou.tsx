'use client';
import Image from "next/image"
import React from "react";
import CustomButton from "./CustomButton";

const RecentlyAdded = ({ eventName, eventDesc, image, userIcon, userName }) => {
  return (
    <div className="flex-col flex items-center justify-center m-1 w-[350px]">
      <div className="flex-row flex items-start justify-center">
        <Image src={image} alt={"orgicon"} width={67.5} height={67.5} className="w-[67.5px] h-[67.5px]"/>
        <div>
          <p className="text-white font-segoe font-[16px]">{eventName}</p>
          <p className="w-[250px] font-segoe font-[13px] text-[#FFFFFF99]">{eventDesc}</p>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-row">
          <Image src={userIcon} alt={"usericon"} width={18} height={18} className="w-[18px] h-[18px]"/>
          <p>{`Posted by ${userName}`}</p>
        </div>
        <CustomButton title={""} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default RecentlyAdded;