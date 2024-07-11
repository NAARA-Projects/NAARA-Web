import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-full h-full min-h-screen items-center justify-between bg-[#0F0F0F]">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm">
        <Image src={`/bg-image.png`} width={1920} height={556} className='w-fit h-auto' alt={'ocean'}/>
        <h1 className='text-white'>
          <Link href='/map'>map</Link>
        </h1>
      </div>
    </main>
  );
}
