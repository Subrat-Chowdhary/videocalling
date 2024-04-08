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
          height={84}
          alt="logo"
          className="max-sm:size-10"
        />
        <div className="flex flex-col">
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            Viliyo
          </p>
          <p className="text-[14px] font-extrabold text-white max-sm:hidden">
            भारत का अपना वीडियो कॉलिंग
          </p>
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