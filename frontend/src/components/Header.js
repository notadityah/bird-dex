import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-forest-green border-b border-light-gray sticky top-0 z-50 margin-bottom-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
             <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center text-white">
                <Image src="/bird-svgrepo-com.svg" alt="Bird" width={20} height={20} />
             </div>
             <span className="font-bold text-xl text-white tracking-tight">BirdDex</span>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-primary-green font-medium transition-colors">
              Features
            </Link>
            <Link href="#community" className="text-gray-600 hover:text-primary-green font-medium transition-colors">
              Community
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary-green font-medium transition-colors">
              Log In
            </Link>
          </nav> */}

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#"
              className="bg-primary-green text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-opacity shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
