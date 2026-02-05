import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-forest-green pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center text-white">
                    <Image src="/bird-svgrepo-com.svg" alt="Bird" width={20} height={20} />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">BirdDex</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Your companion for exploring the avian world. Identify and track your feathered friends.
            </p>
            {/* <div>
              <h4 className="font-semibold text-white mb-3">Get Bird Alerts</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                />
                <button className="bg-primary-green text-forest-green font-semibold text-sm px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>

          {/* Column 3: Community */}
          {/* <div>
            <h4 className="font-bold text-white mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-primary-green transition-colors">Global Map</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">Events</a></li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm"> Developed by Aditya Hairharan</p>
        </div>
      </div>
    </footer>
  );
}
