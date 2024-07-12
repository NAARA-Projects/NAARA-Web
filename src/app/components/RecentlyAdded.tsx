import Image from "next/image"
import React from "react";

const RecentlyAdded = ({ number, orgName, eventName, image }) => {
  return (
    <div className="flex-row flex items-center justify-center m-1">
      <div className="bg-[#D9D9D91A] rounded-lg w-[27px] h-[27px] flex items-center justify-center mr-4">
        <p className="font-segoe font-semibold text-white text-[13px]">{number}</p>
      </div>
      <div className="flex-row flex items-center justify-center p-2 bg-[#D9D9D91A] rounded-lg w-[264px]">
          <Image src={image} alt={"orgicon"} width={45} height={45} className="max-w-[45px] max-h-[45px]"/>
          <div className="flex-col flex justify-start ml-3">
            <p className="font-segoe text-[14px] text-white">{orgName}</p>
            <p className="font-segoe text-ellipsis overflow-hidden text-nowrap text-[#FFFFFF80] text-[14px] w-[184px]">{eventName}</p>
          </div>
        </div>
    </div>
  );
}

export default RecentlyAdded;