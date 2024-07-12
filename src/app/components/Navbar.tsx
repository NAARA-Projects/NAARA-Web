"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./searchBar";
import CustomButton from "./CustomButton";
import styles from './Navbar.module.css';
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const hoverTimeoutRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = window.setTimeout(() => {
            setIsDropdownOpen(false);
        }, 3550); //adjust for longer time if needed (1000 = 1 second) -winner-
    };

    return (
        <header className="fixed z-10 w-full">
            <nav className="fixed bg-[#0F0F0F] w-full px-10">
                <div className="container flex text-white py-[8px] px-16 flex-row items-center align-center justify-center">
                    <div className="flex my-[6px] mr-5 justify-self-start">
                        <div className="flex shrink-0">
                            <Link href='/'><Image src={'/naara.svg'} alt={"logo"} height={25} width={25} className="object-contain" /></Link>
                            <Link href='/' className="ml-4 mr-2 pt-[7px]"><Image src={'/naara..svg'} alt={"logo"} height={24} width={66} className="object-contain" /></Link>
                        </div>
                        <Image src={'/line.svg'} alt={"logo"} height={24} width={1} className="mx-6" />
                        <Link href="/" className={`mr-[4px] ${styles.link3}`}><span className={styles.text3}>Home</span></Link>
                        <Link href="/map" className={styles.link}><span className={styles.text}><b>Explore</b></span></Link>
                        <Link href='/' className={`mx-[5px] ml-[3.5px] ${styles.link3}`}><span className={styles.text3}>News</span></Link>
                    </div>
                    <div className="flex-initial flex w-full mx-40">
                        <SearchInput customClass='min-w-[300px] max-width-[800px] shrink-0' classInput='w-full' />
                    </div>
                    <div className="flex flex-initial my-[2px] ml-auto justify-self-end">
                    <Link href='/' className={`mx-[2px] mt-[3.5px] mb-[2px] mr-[4.7px] shrink-0 ${styles.link3}`}><span className={styles.text3}>Log in</span></Link>
                        <Link href="/subscribe" className={`mt-[4px] ${styles.link2}`}><span className={styles.text2}><b>Subscribe</b></span></Link>
                        <div
                            className="flex flex-initial my-[2px] ml-auto justify-self-end relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image src="/profileHolder.svg" alt="profile" width={32} height={32} className="mx-4" />
                            <ProfileDropdown isOpen={isDropdownOpen} onClose={handleMouseLeave} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
