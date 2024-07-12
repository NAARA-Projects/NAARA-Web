import { ProfileCards } from "../components";

export default function Profile() {
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
            
            <div>
                <div>
                    <div className="ml-80">{/*Personal Info */}
                        <p className="font-segoe font-extralight text-3xl tracking-tight text-white">Details</p>
                        <div className="mt-3 flex flex-row gap-x-7">
                            <div className="flex flex-col gap-y-5">
                                <ProfileCards title="Display Name" text="John Doe"/>
                            </div>
                            <div>
                                <ProfileCards title="Email Address" text="johndoe@gmail.com"/>
                            </div>
                        </div>
                    </div>

                    <div> {/*Cards*/}

                    </div>
                </div>
            </div>
        </main>
    );
}
