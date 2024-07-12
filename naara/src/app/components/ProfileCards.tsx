const ProfileCards = ({title, text}) => {
    return(
        <div className="flex flex-col gap-y-2">
            <div className="font-segoe font-extralight text-white opacity-50 text-xl">
                <p>
                    {title}
                </p>
            </div>
            <div className="w-80 h-14 object-contain rounded-custom-border-rad-69 justify-center bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(217, 217, 217, 0.10)] border border-[rgba(255,255,255,0.1)]">
                <p className="text-xl py-4 pl-7 font-segoe font-extralight text-white opacity-25">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default ProfileCards;