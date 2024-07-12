"use client";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { CustomButton, Footer } from './components';

export default function Home() {
  const downloadButtonClick = () => {
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
      
      <main className='w-full h-full min-h-screen z-0 bg-customBlack'>
        <div className="relative w-full h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/landingcover.svg)' }}>
          <div className='relative items-center justify-center pt-custom-padding-173 pb-0 text-white space-y-custom-space-12'>
            <p className='font-semibold font-lexend text-center text-5xl'>Cleanup, made fun</p>
            <p className='font-thin font-segoe text-center text-custom-size-24 opacity-50'> The means to bringing about clean water bodies. </p>
          </div>

          <div className='relative flex justify-center items-center pt-11'>
          <CustomButton title='Download' containerStyles='bg-customBlue rounded-custom-border-rad-51 mt-px mb-px text-custom-size-24 text-white font-segoe font-thin w-custom-width-180 h-custom-height-47' handleClick={downloadButtonClick}/>
          </div>
        </div>

        <div style={{backgroundImage: 'url(/ipad2.svg)'}} className='flex flex-col justify-center items-center'>
          <div className='mb-custom-margin-82'>
            <Image src="ipadLast.svg" alt='Ipad View' width={800} height={940} className='object-contain' />
          </div>
          <div className="w-custom-width-575 h-custom-height-64 flex justify-center">
            <p className='font-segoe font-thin text-white text-2xl text-center'>
              Crowdsource cleanups quickly, and cultivate practices that preserve our environmental health.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

