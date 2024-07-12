'use client'
import {CustomButton, ProfileCards } from "../components";

export default function Profile() {
    const uselessFunction = () => {
    };
    return (
        <main className='w-full h-full min-h-screen z-0 bg-customBlack'>
            <div className="relative w-full h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/background-profile.svg)' }}>{/* Background Area */}
                <div className="absolute w-full h-full mt-16 flex justify-left z-10">
                    <div className="flex flex-col mx-16 mt-60 text-white">
                        <p className="font-lexend font-bold text-4xl">Hi, John Doe</p>
                        <p className="text-xl font-segoe font-thin opacity-60"> Manage your account settings here </p>
                    </div>
                </div>
            </div>
            
            <div> {/*All Bottom Part*/}
                <div className="w-[668]">
                    <div> {/*Personal Info */}
                        <div className="ml-52">
                            <p className="font-segoe font-extralight text-3xl tracking-tight text-white">Details</p>
                            <div className="mt-3 flex flex-row gap-x-7">
                                <div className="flex flex-col gap-y-5">
                                    <ProfileCards title="Display Name" text="John Doe"/>
                                    <ProfileCards title="First Name" text="John"/>    
                                </div>
                                <div className="flex flex-col gap-y-5">
                                    <ProfileCards title="Email Address" text="johndoe@gmail.com"/>
                                    <ProfileCards title="Last Name" text="Doe"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ml-52 mt-10">
                            <p className="font-segoe font-extralight text-3xl tracking-tight text-white">Address</p>
                            <div className="mt-3 flex flex-row gap-x-7">
                                <div className="flex flex-col gap-y-5">
                                    <ProfileCards title="Address Line 1" text="St. Anywhere 123"/>
                                    <ProfileCards title="City" text="Delhi"/>
                                    <ProfileCards title="Country/Region" text="India"/>    
                                </div>
                                <div className="flex flex-col gap-y-5">
                                    <ProfileCards title="Address Line 2" text="St. Anywhere 456"/>
                                    <div className="flex flex-row gap-x-5">
                                        <div className="flex flex-col gap-y-2">
                                            <div className="font-segoe font-extralight text-white opacity-50 text-lg">
                                                <p>
                                                    Region
                                                </p>
                                            </div>
                                            <div className="w-36 h-14 object-contain rounded-custom-border-rad-69 justify-center bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(217, 217, 217, 0.10)] border border-[rgba(255,255,255,0.1)]">
                                                <p className="text-lg py-4 pl-7 font-segoe font-extralight text-white opacity-25">
                                                    Region
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-y-2">
                                            <div className="font-segoe font-extralight text-white opacity-50 text-lg">
                                                <p>
                                                    Postal Code
                                                </p>
                                            </div>
                                            <div className="w-40 h-14 object-contain rounded-custom-border-rad-69 justify-center bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(217, 217, 217, 0.10)] border border-[rgba(255,255,255,0.1)]">
                                                <p className="text-lg py-4 pl-7 font-segoe font-extralight text-white opacity-25">
                                                    Postal Code
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ml-52 mt-8">
                            <CustomButton title="Save" containerStyles="text-white border-0 bg-[#2457B5] font-segoe font-extralight rounded-custom-border-rad-69 border-[rgba(255,255,255,0.1)] px-8 py-3" handleClick={uselessFunction}/>
                        </div>
                    </div>


                    <div className="ml-52 mt-10"> {/* Delete Account */}
                        <div className="flex flex-col gap-y-7 w-[670px]">
                            <p className="font-segoe font-extralight text-3xl tracking-tight text-white"> Delete Account</p>
                            <div><p className="text-lg font-segoe font-extralight text-white opacity-60">Click REQUEST ACCOUNT DELETE to start the process of permanently deleting your naara. account including all of its personal information.</p></div>
                            <div className="text-lg mb-8 font-segoe font-semibold text-white opacity-60">
                                <p>If you request to delete your account, your account will be deleted in 14 days. During this time, you can login to reactivate your account, which will cancel your deletion. After 14 days deletion will be irreversible.</p>
                            </div>
                        </div>

                        <div>
                            <CustomButton title="REQUEST ACCOUNT DELETE" containerStyles="bg-[#B60000] border-[rgba(255, 255, 255, 0.10)] rounded-custom-border-rad-69 text-white font-segoe font-extralight py-4 px-12" handleClick={uselessFunction}/>
                        </div>
                    </div>
                </div>

                <div> {/*Right side*/}

                    <div className="flex flex-col"> {/*John Doe Card*/}
                        <div className="p-5 w-80 h-36 bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(217, 217, 217, 0.1)] border border-[rgba(255,255,255,0.1)] rounded-3xl">
                            <div className="flex flex-col gap-y-1">
                                <div className="flex flex-row gap-x-5">
                                    <img src="/dharman.svg" alt="dharman" className="object-contain w-20"></img>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-white font-segoe font-semibold">John Doe</p>
                                        <p className="text-white opacity-50">johndoe@gmail.com</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-white opacity-50 tracking-tight">ID: 05540209969236768948</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div> {/*Right bottom*/}

                    </div>
                </div>
            </div>
        </main>
    );
}
