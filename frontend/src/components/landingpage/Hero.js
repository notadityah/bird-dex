import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-white/90 backdrop-blur-none">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Keep track of the birds you spot with <span className="text-forest-green">BirdDex</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Snap a photo, instantly identify the bird, and build your personal collection. 
              BirdDex makes birdwatching smarter and more fun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="#signup" className="inline-flex items-center justify-center bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-forest-green/25 transition-all">
                Get Started
              </Link>
              <Link href="#how-it-works" className="inline-flex items-center justify-center border-2 border-gray-600 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-all">
                How It Works
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] w-full group">
                {/* Hero Image */}
                <Image 
                  src="/images/kingfisher_2.jpg" 
                  alt="Common Kingfisher" 
                  fill 
                  className="object-cover"
                  priority
                />
                
                {/* Identification Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center gap-4 border border-white/50">
                    <div className="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm">Kingfisher identified!</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Confidence: 96.4%</p>
                    </div>
                    <div className="bg-forest-green text-white text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0">
                      Match
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
