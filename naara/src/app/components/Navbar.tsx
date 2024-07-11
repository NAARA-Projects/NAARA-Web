import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return(
        <nav className="bg-[#0F0F0F]">
            <div className="container flex text-white py-[14.5px] px-16">
                <div className="flex">
                <Link href='/'><Image src={'/naara.svg'} alt={"logo"} height={25} width={25}/></Link>
                <Link href='/' className="ml-4 mr-2 pt-[7px]"><Image src={'/naara..svg'} alt={"logo"} height={24} width={66}/></Link>
                </div>
                <Image src={'/line.svg'} alt={"logo"} height={24} width={1} className="mx-6"/>
                <Link href='/' className="mx-2"><p>Home</p></Link>
                <Link href='/map' className="mx-2"><p>Map</p></Link>
            </div>
        </nav>
    );
}

export default Navbar;