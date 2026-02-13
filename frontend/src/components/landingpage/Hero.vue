<script setup>
</script>

<template>
  <section class="relative pt-16 pb-24 overflow-hidden bg-white/90 backdrop-blur-none">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        
        <!-- Left Column -->
        <div class="mb-12 lg:mb-0">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Keep track of the birds you spot with <span class="text-forest-green">BirdDex</span>
          </h1>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Snap a photo, instantly identify the bird, and build your personal collection. 
            BirdDex makes birdwatching smarter and more fun.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#signup" class="inline-flex items-center justify-center bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-forest-green/25 transition-all">
              Get Started
            </a>
            <a href="#how-it-works" class="inline-flex items-center justify-center border-2 border-gray-600 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-all">
              How It Works
            </a>
          </div>
        </div>

        <!-- Right Column -->
        <div class="relative">
           <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] w-full group">
              <!-- Hero Image -->
              <img 
                src="/images/kingfisher_2.jpg" 
                alt="Common Kingfisher" 
                class="object-cover w-full h-full"
              />
              
              <!-- Identification Card Overlay -->
              <div class="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center gap-4 border border-white/50">
                  <div class="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/check-mark-svgrepo-com.svg" alt="Check Mark" class="w-4 h-4">
                  </div>
                  <div class="flex-1 min-w-0">
                      <h3 class="font-bold text-gray-900 text-sm">Kingfisher identified!</h3>
                      <p class="text-xs text-gray-500 mt-0.5">Confidence: 96.4%</p>
                  </div>
                  <div class="bg-forest-green text-white text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0">
                    Match
                  </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  </section>
</template>
