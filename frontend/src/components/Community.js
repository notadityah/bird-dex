import Image from 'next/image';

export default function Community() {
  // Utilizing different aspect ratios or just a grid for the photos
  const photos = [
    { src: "/images/crow.jpg", name: "Crow" },
    { src: "/images/owl.jpg", name: "Owl" },
    { src: "/images/kingfisher_1.jpg", name: "Kingfisher" },
    { src: "/images/myna.jpg", name: "Myna" },
    { src: "/images/peacock.jpg", name: "Peacock" },
    { src: "/images/pigeon.jpg", name: "Pigeon" },
    { src: "/images/sparrow.jpg", name: "Sparrow" },
  ];

  return (
    <section id="community" className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stunning shots captured by the BirdDex community. Join today to get featured!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
           {/* Photo Grid with Images */}
           {/* Large item */}
           <div className={`col-span-2 row-span-2 relative rounded-2xl overflow-hidden group shadow-md`}>
              <Image 
                src={photos[0].src} 
                alt={photos[0].name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{photos[0].name}</div>
           </div>

           {/* Regular items */}
           {photos.slice(1).map((photo, i) => (
             <div key={i} className={`relative rounded-2xl overflow-hidden group shadow-md ${i === 2 || i === 5 ? 'col-span-2 md:col-span-1' : ''}`}>
                <Image 
                  src={photo.src} 
                  alt={photo.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{photo.name}</div>
             </div>
           ))}
        </div>

        <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-primary-green font-semibold hover:text-opacity-80 transition-colors gap-2">
                View Gallery
                <Image src="/right-arrow-svgrepo-com.svg" alt="Menu" width={20} height={20} />
            </a>
        </div>
      </div>
    </section>
  );
}
