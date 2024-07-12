"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./searchBar";
import CustomButton from "./CustomButton";

const Navbar = () => {
    const subscribeButtonClick = () => {
    };
    return(
        <header className="fixed z-10 w-full">
            <nav className="fixed bg-[#0F0F0F] w-full px-10">
                <div className="container flex text-white py-[8px] px-16 flex-row items-center align-center justify-center">
                    <div className="flex my-[6px] mr-5 justify-self-start">
                        <div className="flex shrink-0">
                            <Link href='/'><Image src={'/naara.svg'} alt={"logo"} height={25} width={25} className="object-contain"/></Link>
                            <Link href='/' className="ml-4 mr-2 pt-[7px]"><Image src={'/naara..svg'} alt={"logo"} height={24} width={66} className="object-contain"/></Link>
                        </div>
                        <Image src={'/line.svg'} alt={"logo"} height={24} width={1} className="mx-6"/>
                        <Link href='/' className="mx-2"><p>Home</p></Link>
                        <Link href='/map' className="mx-2"><p>Map</p></Link>
                    </div>
                    <div className="flex-initial flex w-full mx-40">
                        <SearchInput customClass='min-w-[300px] max-width-[800px] shrink-0' classInput='w-full' />
                    </div>
                    <div className="flex flex-initial my-[2px] ml-auto justify-self-end">
                        <Link href='/login' className="mx-2 my-[2px] shrink-0"><p>Log in</p></Link>
                        <CustomButton title={"Subscribe"} handleClick={subscribeButtonClick} containerStyles="mx-2 bg-gradient-to-r from-[#CA8F36] to-[#D04C00] rounded-lg px-3 py-[2px]" />
                        <Image src={"/profileHolder.svg"} alt={"profile"} width={32} height={32} className="mx-4"/>
                    </div>
                </div>
            </nav>
        </header> 
    );
}

export default Navbar;