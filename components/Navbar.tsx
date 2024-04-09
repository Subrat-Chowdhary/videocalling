import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo3.png"
          width={84}
          height={60}
          alt="logo"
          className="max-sm:size-200"
        />
        <div className="flex flex-col">
          <p className='text-[28px] text-white font-extrabold'>Viliyo</p>
          <p className='text-[12px] text-white font-extrabold'>Video Meeting App</p>
        </div>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
