import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex w-full h-full min-h-screen flex-col items-center justify-between p-24 bg-[#0F0F0F]">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a>
          test
        </a>
      </div>
      <Head>
        <title>
          naara.
        </title>
      </Head>
    </main>
  );
}
