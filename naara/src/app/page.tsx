"use client";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { CustomButton, Footer } from './components';
import styles from './components/MyComponent.module.css';

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
      
      
      <main className='w-full h-full min-h-screen z-0 bg-customBlack'>
        <div className="relative w-full h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/landingcover.svg)' }}>
          <div className='relative items-center justify-center pt-custom-padding-173 pb-0 text-white space-y-custom-space-12'>
            <p className='font-semibold font-lexend text-center text-5xl lg:text-5xl md-text-3xl'>Cleanup, made fun</p>
            <p className='font-thin font-segoe text-center text-custom-size-24 opacity-50'> The means to bringing about clean water bodies. </p>
          </div>

          <div className='flex flex-row gap-custom-gap-100 justify-center items-center mt-custom-margin-40'>
            <img src='/getitongoogleplay.svg' alt='get it on google play' className='object-contain'></img>
            <img src='/downloadontheappstore.svg' alt='download on appstore' className='object-contain'></img>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center mb-16'>
          <div className='mb-custom-margin-40'>
            <Image src="ipadLast.svg" alt='Ipad View' width={800} height={940} className='object-contain' />
          </div>

          <div className='mb-custom-margin-40'>
            <img src='/below ipad.svg' alt='Line' className='object-contain'></img>
          </div>

          <div className="w-auto h-custom-height-64 items-center justify-center text-center mb-20">
            <p className='font-segoe font-thin text-white text-5xl text-center'>
              Created with <span className={styles.text}>you</span> in mind.
            </p>

            <p className='text-2xl font-segoe font-thin text-white opacity-60 mt-10'>
              Constantly striving for change from within to build a healthy habit.
            </p>
          </div>
        </div>

        <div>
          <div className='mx-36'>
            <div className='w-96'>
              <img src='Figma_Beta_bXYnmTpNR9.gif' alt='phone view gif' className=' object-contain rounded-custom-border-rad-35'></img>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

