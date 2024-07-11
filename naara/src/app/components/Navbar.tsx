import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./searchBar";

const Navbar = () => {
    return(
        <header>
            <nav className="bg-[#0F0F0F]">
                <div className="relative container flex text-white py-[8px] px-16">
                    <div className="flex my-[6px]">
                        <div className="flex shrink-0">
                            <Link href='/'><Image src={'/naara.svg'} alt={"logo"} height={25} width={25} className="object-contain"/></Link>
                            <Link href='/' className="ml-4 mr-2 pt-[7px]"><Image src={'/naara..svg'} alt={"logo"} height={24} width={66} className="object-contain"/></Link>
                        </div>
                        <Image src={'/line.svg'} alt={"logo"} height={24} width={1} className="mx-6"/>
                        <Link href='/' className="mx-2"><p>Home</p></Link>
                        <Link href='/map' className="mx-2"><p>Map</p></Link>
                    </div>
                    <SearchInput customClass='max-w-[600px] flex shrink ml-40' classInput={undefined} />
                </div>
            </nav>
        </header> 
    );
}

export default Navbar;