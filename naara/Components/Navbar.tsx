import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <header className="w-full fixed z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 h-14 bg-black">
                <div className="flex">
                <Link href="/" className="flex justify-center items-center gap-2">
                    <Image src="/LogoNaara.svg" alt="Logo" width={25} height={25} className="object-contain inline"/>
                </Link>

                <Link href="/" className="flex justify-center items-center gap-2">
                    <Image src="./naara..svg" alt="Logo" width={66} height={27} className="objext-contain inline"/>
                </Link>
                </div>
            </nav>
        </header>
    );
}