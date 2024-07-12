"use client"
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import Image from "next/image";


const SearchInput = ({ customClass, classInput }) => {
    return (
        <div className={`bg-[#D9D9D90D] outline-none w-full h-[38px] rounded-lg border border-[#FFFFFF0D] inline-flex px-2 ${customClass}`}>
            <Image src={"/search.svg"} alt={"search"} width={20} height={20} className="mx-2 object-contain"/>
            <input type="text"
                id="inputId"
                placeholder="Search for locations, organizations, or personalization settings..."
                className={`outline-none bg-transparent w-full h-full ${classInput}`}
            />
        </div>
    )
}

export default SearchInput;