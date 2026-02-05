import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: (
        <Image src="/camera-svgrepo-com.svg" alt="Camera" width={24} height={24} />
      ),
      title: "Bird Detection",
      description: "Detect birds by simply uploading a photo. Get instant identification and information about the bird."
    },
    {
      icon: (
        <Image src="/list-check-svgrepo-com.svg" alt="Progress" width={24} height={24} />
      ),
      title: "Track Your Progress",
      description: "Keep track of all the birds you have seen so far."
    },
    {
      icon: (
        <Image src="/image-square-svgrepo-com.svg" alt="Community" width={24} height={24} />
      ),
      title: "Community Bird Gallery",
      description: "Explore our vast community bird gallery. Share your sightings and connect with friends worldwide."
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="block text-primary-green font-bold tracking-wide uppercase text-sm mb-2">Why BirdDex?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your companion for birdwatching.</h2>
            <p className="text-lg text-gray-600">From the backyard to the backcountry, our tools help you identify, track, and share your sightings.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-light-gray p-8 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
