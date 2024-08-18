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
            <a href="/login"
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
    <div class="relative mt-12">
      <!-- Decorative Background -->
      <div class="absolute bottom-0 left-0 right-0 h-[calc(50%+20px)]"></div>
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Icon Box 1 -->
          <div
              class="relative flex flex-col items-center text-center p-8 bg-[#008d7d] text-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:bg-[#009786]">
            <div class="mb-4 text-4xl">
              <!-- Updated SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3">
              <a href="#" class="hover:text-white">Current Weather</a>
            </h4>
          </div>
          <!-- Icon Box 2 -->
          <div
              class="relative flex flex-col items-center text-center p-8 bg-[#008d7d] text-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:bg-[#009786]">
            <div class="mb-4 text-4xl">
              <!-- Updated SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"/>
              </svg>

            </div>
            <h4 class="text-xl font-bold mb-3">
              <a href="#" class="hover:text-white">Pest Forecast</a>
            </h4>
          </div>
          <!-- Icon Box 3 -->
          <div
              class="relative flex flex-col items-center text-center p-8 bg-[#008d7d] text-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:bg-[#009786]">
            <div class="mb-4 text-4xl">
              <!-- Updated SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
              </svg>

            </div>
            <h4 class="text-xl font-bold mb-3">
              <a href="#" class="hover:text-white">Farming Education</a>
            </h4>
          </div>
          <!-- Icon Box 4 -->
          <div
              class="relative flex flex-col items-center text-center p-8 bg-[#008d7d] text-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:bg-[#009786]">
            <div class="mb-4 text-4xl">
              <!-- Updated SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"/>
              </svg>

            </div>
            <h4 class="text-xl font-bold mb-3">
              <a href="#" class="hover:text-white">Trends Analysis</a>
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
