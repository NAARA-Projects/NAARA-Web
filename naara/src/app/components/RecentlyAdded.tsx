import Image from "next/image"
import React from "react";

const RecentlyAdded = ({ number, orgName, eventName }) => {
  return (
    <div className="flex-row flex items-center justify-center">
        <p className="font-segoe font-semibold text-white">{number}</p>
        <div className="flex-row flex items-center justify-center">
            <Image src={"/orgicon.png"} alt={"orgicon"} width={45} height={45} className="max-w-[45px] max-h-[45px]"/>
            <div className="flex-col flex items-center justify-center text-white">
                <p>{orgName}</p>
                <p>{eventName}</p>
            </div>
        </div>
    </div>
  );
}

export default RecentlyAdded;