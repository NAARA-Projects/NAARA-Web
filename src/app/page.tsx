"use client";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { CustomButton, Footer } from './components';
import styles from './components/Navbar.module.css';

export default function Home() {
  const downloadButtonClick = () => {
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
      
      <main className='w-full h-[250vh] min-h-screen z-0 bg-customBlack'>
        <div className="relative w-full h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/landingcover.svg)' }}>
          <div className='relative items-center justify-center pt-custom-padding-173 pb-0 text-white space-y-custom-space-12'>
            <p className='font-semibold font-lexend text-center text-5xl lg:text-5xl md-text-3xl'>Cleanup, made fun</p>
            <p className='font-thin font-segoe text-center text-custom-size-24 opacity-50'> The means to bringing about clean water bodies. </p>
          </div>

          <div className='flex flex-row gap-custom-gap-100 justify-center items-center mt-custom-margin-40'>
            <Image src='/getitongoogleplay.svg' alt='get it on google play' className='object-contain' width={225} height={75}></Image>
            <Image src='/downloadontheappstore.svg' alt='download on appstore' className='object-contain' width={225} height={75}></Image>
          </div>
          <div className='mb-custom-margin-40 flex flex-col justify-center items-center mt-16'>
            <Image src="ipadlastverylast.svg" alt='Ipad View' width={800} height={940} className='object-contain' />
          </div>
          <div className='mb-custom-margin-40'>
            <img src='/below ipad.svg' alt='Line' className='object-contain'></img>
          </div>
          <div className="w-auto h-custom-height-64 items-center justify-center text-center mb-20">
            <p className='font-segoe font-thin text-white text-5xl text-center'>
              Created with<span className={styles.text}>you</span> in mind.
            </p>

            <p className='text-2xl font-segoe font-thin text-white opacity-60 mt-10'>
              Constantly striving for change from within to build a healthy habit.
            </p>
          </div>
          <div className='flex flex-row gap-x-10 w-full justify-center mt-32'>
            <div className='w-96'>
              <img src='Figma_Beta_bXYnmTpNR9.gif' alt='phone view gif' className=' object-contain rounded-custom-border-rad-35'></img>
            </div>
            <div className='text-white w-custom-width-400'>
              <p className='font-bold font-lexend text-2xl'>
                Intuitive user experience
              </p>
              <p className='font-extralight opacity-60 font-segoe text-base mt-4'>
                Wonderfully crafted to accommodate the interests of users and organizations alike. An intuitive user experience, allowing you to effortlessly navigate and engage with our features. Enjoy a seamless, user-friendly interface designed to enhance your interactions and make every task straightforward and enjoyable.
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-x-10 w-full justify-center mt-32'>
            <div className='text-white w-custom-width-400'>
              <p className='font-bold font-lexend text-2xl'>
                Seamless registration process
              </p>
              <p className='font-extralight opacity-60 font-segoe text-base mt-4'>
                Browsing, and registering for volunteer work has never been more fun and easy! Our app ensures a seamless registration process, enabling you to sign up quickly and effortlessly. Join us in just a few taps and start enjoying all our features immediately.
              </p>
            </div>
            <div className='w-96'>
              <Image src='/figmashowcase.gif' alt='phone view gif' className=' object-contain rounded-custom-border-rad-35' width={600} height={337.5}></Image>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

