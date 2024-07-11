import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex w-full h-full min-h-screen flex-col items-center justify-between p-24 bg-[#0F0F0F]">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className='text-white'>
          <Link href='/RequestPage'>map</Link>
        </h1>
      </div>
    </main>
  );
}
