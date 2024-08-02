"use client";
import React from "react";
import Head from "next/head";
import { Footer } from "../components";
import Image from "next/image";

export default function Home() {
    const downloadButtonClick = () => {};

    return (
        <>  
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <main className='w-full min-h-screen z-0 bg-customBlack bg-opacity-10'>
                <div className="relative w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/beachtrash.jpg)' }}>
                    <div className="absolute inset-0 bg-black opacity-55"></div>
                    <div className='relative z-10 flex flex-col items-center justify-center text-white text-center'>
                        <p className='font-semibold font-lexend text-5xl lg:text-5xl md:text-3xl'>News</p>
                        <p className='font-thin font-segoe text-custom-size-24 opacity-50 mt-4'>Relevant environmental news specially crafted just for you.</p>
                    </div>
                </div>
            
                <div className="w-full bg-black text-white py-8 px-6 shadow-md">
                    <br></br>
                    <h2 className="font-semibold text-3xl mb-4 text-center">Latest Environmental News</h2>
                    <br></br>
                    <div className="flex flex-wrap justify-around space-x-4">
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gray-800 rounded-lg">
                            <Image src="/beachtrash.jpg" alt="Ocean Pollution" width={500} height={300} className="rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl">CANAMA: War on Waste</h3>
                                <br></br>
                                <p className="text-gray-400">Discover the inspiring story of ‘CANAMA,’ a collaboration between three youth-led environmental organizations, as they unite for the ‘War on Waste’ 2024.</p>
                                <a href="/article-1">
                                    <button className="transition duration-300 mt-4 py-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded">Read More</button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gray-800 rounded-lg">
                            <Image src="/beachtrash.jpg" alt="Wildlife Conservation" width={500} height={300} className="rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl">New Wildlife Conservation Efforts</h3>
                                <br></br>
                                <p className="text-gray-400">Governments around the world are launching new initiatives to conserve endangered species and their habitats. This includes stricter regulations and increased funding.</p>
                                <a href="/article-2">
                                    <button className="transition duration-300 mt-4 py-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded">Read More</button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gray-800 rounded-lg">
                            <Image src="/beachtrash.jpg" alt="Climate Change Impact" width={500} height={300} className="rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl">Climate Change Impact on Agriculture</h3>
                                <br></br>
                                <p className="text-gray-400">Farmers are facing unprecedented challenges due to climate change. Innovative solutions are being explored to ensure food security for the future.</p>
                                <a href="URL_FOR_CLIMATE_CHANGE_IMPACT_ARTICLE">
                                    <button className="transition duration-300 mt-4 py-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>  
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h2 className="font-semibold text-3xl mt-12 mb-4 text-center">Top Environmental News</h2>
                    <br></br>
                    <div className="flex flex-wrap justify-around space-x-4">
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gray-800 rounded-lg">
                            <Image src="/beachtrash.jpg" alt="Forest Conservation" width={500} height={300} className="rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl">Major Forest Conservation Initiative</h3>
                                <br></br>
                                <p className="text-gray-400">A major initiative has been launched to protect and conserve forests worldwide, focusing on reforestation and sustainable practices.</p>
                                <a href="URL_FOR_FOREST_CONSERVATION_ARTICLE">
                                    <button className="transition duration-300 mt-4 py-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded">Read More</button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gray-800 rounded-lg">
                            <Image src="/beachtrash.jpg" alt="Marine Life Protection" width={500} height={300} className="rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl">Efforts to Protect Marine Life</h3>
                                <br></br>
                                <p className="text-gray-400">New policies and conservation efforts are being implemented to protect marine life from the adverse effects of human activities.</p>
                                <a href="URL_FOR_MARINE_LIFE_PROTECTION_ARTICLE">
                                    <button className="transition duration-300 mt-4 py-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded">Read More</button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gray-800 rounded-lg">
                            <Image src="/beachtrash.jpg" alt="Air Pollution Control" width={500} height={300} className="rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl">Innovative Air Pollution Control Methods</h3>
                                <br></br>
                                <p className="text-gray-400">Scientists and engineers are developing innovative methods to control air pollution and improve air quality in urban areas.</p>
                                <a href="URL_FOR_AIR_POLLUTION_CONTROL_ARTICLE">
                                    <button className="transition duration-300 mt-4 py-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>    
                    <br></br>     
                    <br></br>        
                </div>
                <Footer />
            </main>
        </>
    );
}