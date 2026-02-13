import Link from 'next/link';

export default function CallToAction() {
  return (
    <section id="signup" className="py-24 relative overflow-hidden bg-white/90 backdrop-blur-none">

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Ready to start your birding journey?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Create a free account and start identifying birds today. 
          Join a growing community of birdwatchers and build your personal collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#" 
            className="inline-flex items-center justify-center bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-forest-green/25 transition-all"
          >
            Sign Up - It&apos;s Free
          </Link>
          <Link 
            href="#try" 
            className="inline-flex items-center justify-center border-2 border-gray-600 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-all"
          >
            Try It First
          </Link>
        </div>
      </div>
    </section>
  );
}
