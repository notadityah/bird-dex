<script setup>
import Header from '@/components/landingpage/Header.vue'
import Hero from '@/components/landingpage/Hero.vue'
import HowItWorks from '@/components/landingpage/HowItWorks.vue'
import Community from '@/components/landingpage/Community.vue'
import CallToAction from '@/components/landingpage/CallToAction.vue'
import Footer from '@/components/landingpage/Footer.vue'
</script>

<template>
  <div class="min-h-screen font-sans flex flex-col">
    <Header />
    <main class="flex-grow">
      <Hero />
      <HowItWorks />
      <Community />
      <CallToAction />
    </main>
    <Footer />
  </div>
</template>