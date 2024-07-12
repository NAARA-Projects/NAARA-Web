import React from "react";

const Footer = () => {
  return (
    <footer className="relative flex flex-col pt-custom-padding-44 pb-custom-padding-45 pl-custom-padding-44 pr-custom-padding-36 bg-black">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-300 to-blue-700 opacity-80"></div>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-y-10 sm:px-16 py-10">
        <div className="flex flex-col justify-start items-start gap-y-custom-gap-15">
          <p className="text-white text-lg font-lexend font-bold ">
            SUPPLEMENTARY RESOURCES
          </p>
          <div className="text-sm text-white opacity-50 flex flex-col gap-y-custom-gap-12 font-segoe font-thin hover:cursor-pointer">
            <p>About Us</p>
            <p>FAQ</p>
            <p>Contact & Support</p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-y-custom-gap-15">
          <p className="text-white text-lg font-lexend font-bold">
            ADDITIONAL INFORMATION
          </p>
          <div className="text-sm text-white opacity-50 font-segoe font-thin flex flex-col gap-y-custom-gap-12 hover: cursor-pointer">
            <div className="flex flex-col">
              <p>
                Vida Bumiwedari, Jl. Saraswati No.1, Padurenan, Kec. Mustika
                Jaya,
              </p>
              <p>Kota Bekasi, Jawa Barat 17156, Indonesia</p>
            </div>
            <p>+62 817-5172-221</p>
          </div>
        </div>

        <div className="text-white flex flex-col justify-start items-start gap-y-custom-gap-16">
          <div className="font-lexend font-bold text-lg">FOLLOW US</div>
          <div className="flex flex-row gap-x-custom-gap-51 hover:cursor-pointer">
            <div className="flex flex-col gap-y-custom-gap-12 h-custom-height-27">
              <div className="flex flex-row gap-x-custom-gap-12">
                <img
                  src="/Xlogo.svg"
                  alt="X"
                  className="h-full object-contain"
                ></img>
                <p className="font-segoe font-thin text-sm h-full">
                  @NAARAProjects
                </p>
              </div>
              <div className="flex flex-row gap-x-custom-gap-12">
                <img
                  src="/instaLogo.svg"
                  alt="Instagram"
                  className="h-full object-contain"
                ></img>
                <p className="font-segoe font-thin text-sm h-full">
                  naaraprojects.id
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-custom-gap-12 h-custom-height-27">
              <div className="flex flex-row gap-x-custom-gap-12">
                <img
                  src="/linkedinLogo.svg"
                  alt="linkedin"
                  className="h-full object-contain"
                ></img>
                <p className="font-segoe font-thin text-sm h-full">
                  <u>https://www.linkedin.com/company/naaraprojects</u>
                </p>
              </div>
              <div className="flex flex-row gap-x-custom-gap-12">
                <img
                  src="/linktreeLogo.svg"
                  alt="Linktree"
                  className="h-full object-contain"
                ></img>
                <p className="font-segoe font-thin text-sm h-full">
                  <u>https://linktr.ee/naaraprojects</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
