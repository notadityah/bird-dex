import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: (
        <Image src="/camera-svgrepo-com.svg" alt="Camera" width={28} height={28} />
      ),
      title: "Snap a Photo",
      description: "Take a picture of any bird you spot — in your backyard, at the park, or anywhere outdoors."
    },
    {
      number: "02",
      icon: (
        <Image src="/bulb-on-svgrepo-com.svg" alt="Identify" width={28} height={28} />
      ),
      title: "Get Instant ID",
      description: "Our bird detection model analyses your photo and identifies the bird species in seconds."
    },
    {
      number: "03",
      icon: (
        <Image src="/collection-data-database-document-svgrepo-com.svg" alt="Collection" width={28} height={28} />
      ),
      title: "Build Your Collection",
      description: "Every identified bird gets added to your personal collection. Track your progress and share sightings."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-white/90 backdrop-blur-none">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="block text-forest-green font-bold tracking-wide uppercase text-sm mb-2">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Three simple steps</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Getting started with BirdDex is easy. No expertise required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-forest-green/20 via-forest-green/40 to-forest-green/20"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step number circle */}
              <div className="w-14 h-14 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-forest-green">
                {step.icon}
              </div>
              
              {/* Step number badge */}
              <span className="inline-block text-xs font-bold text-forest-green bg-forest-green/10 px-3 py-1 rounded-full mb-3">
                Step {step.number}
              </span>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
