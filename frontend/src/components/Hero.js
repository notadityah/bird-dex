import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gray-100 pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Keep track of the birds you spot with <span className="text-primary-green">BirdDex</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="#" className="flex items-center justify-center bg-primary-green text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-md">
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] w-full group">
                {/* Hero Image */}
                <Image 
                  src="/images/hero.png" 
                  alt="Common Kingfisher" 
                  fill 
                  className="object-cover"
                  priority
                />
                
                {/* Identification Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 border border-white/50">
                    <div>
                        <h3 className="font-bold text-primary-green">Kingfisher identified!</h3>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
