import Link from 'next/link';
import Image from 'next/image';
import Nav from './components/Navbar'

export default function Home() {
  return (
    <main className="w-full h-full">
      <header>
        <Nav />
      </header>
      <div className='bg-[#0F0F0F]'>
        <h1 className='w-full text-white'>Hello world!</h1>
      </div>
    </main>
  );
}

