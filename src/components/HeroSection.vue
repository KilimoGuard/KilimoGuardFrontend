<template>
  <section id="hero" class="py-16 bg-[#008374]">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="flex flex-col-reverse lg:flex-row items-center lg:space-x-12">
        <!-- Text Content -->
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
          <h2 class="text-3xl lg:text-4xl font-bold text-white">
            Welcome to <span class="text-white">KilimoGuard</span>
          </h2>
          <p class="mt-4 text-white">
            Current pest management strategies often rely on reactive measures rather than proactive prevention.
            KilimoGuard addresses the need for an advanced system that predicts pest occurrences, enabling
            farmers to take preventive actions. Get started today!
          </p>
          <div
              class="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/waitlist" target="_blank"
               class="inline-block font-sans font-medium text-[15px] tracking-wider px-10 py-3.5 rounded-full transition duration-300 text-white bg-white bg-opacity-10 shadow-md hover:shadow-lg hover:bg-opacity-20 border-2 border-white border-opacity-10 hover:border-opacity-50">
              ✨ Join Waitlist
            </a>
            <a href="/predictor"
               class="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 rounded-md transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-8 h-8 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"/>
              </svg>
              <span>Pilot</span>
            </a>

          </div>
        </div>
        <!-- Hero Image -->
        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src="@/assets/img/hero-img.svg" alt="Hero Image" class="w-full h-auto"/>
        </div>
      </div>
    </div>

    <!-- Icon Boxes -->
    <div class="mt-16 py-12 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Icon Box 1 -->
          <div class="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="text-orange-500 mb-4">
              <!-- Updated SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-800">
              <a href="#" class="hover:text-orange-500">Current Weather</a>
            </h4>
          </div>
          <!-- Icon Box 2 -->
          <div class="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="text-orange-500 mb-4">
              <!-- Updated SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM12 7.5v7.5l5.5-3.75L12 7.5z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-800">
              <a href="#" class="hover:text-orange-500">Pest Forecast</a>
            </h4>
          </div>
          <!-- Icon Box 3 -->
          <div class="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
            <div class="text-orange-500 mb-4">
              <!-- Updated SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l7 7 7-7-7-7-7 7z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-800">
              <a href="#" class="hover:text-orange-500">Farming Education</a>
            </h4>
          </div>
          <!-- Icon Box 4 -->
          <div class="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
            <div class="text-orange-500 mb-4">
              <!-- Updated SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18M3 12h18m-7 6h7"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-800">
              <a href="#" class="hover:text-orange-500">Trends Analysis</a>
            </h4>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
/* AOS Animations */
[data-aos] {
  opacity: 0;
  transition-property: opacity, transform;
  transition-duration: 1s;
}

[data-aos].aos-animate {
  opacity: 1;
  transform: none;
}
</style>
