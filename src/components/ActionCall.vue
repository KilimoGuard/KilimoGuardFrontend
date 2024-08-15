<template>
  <div
      class="relative bg-cover bg-center rounded-lg overflow-hidden mx-auto"
      :style="{ backgroundImage: `url(${bgImage})`, height: '400px', width: '80%' }">
    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="text-center p-8">
        <a
            class="relative inline-block w-24 h-24 mb-6"
            :href="videoLink"
        >
          <div
              class="w-full h-full bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center relative overflow-hidden"
          >
            <div
                class="absolute inset-0 animate-pulse border-4 border-teal-400 rounded-full"
            ></div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-12 h-12"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </div>
        </a>
        <h3 class="text-2xl font-bold text-white mb-4">Call To Action</h3>
        <p class="text-white mb-6">
          Explore how AI and machine learning can shape the future of
          agriculture. Learn about how innovative technologies will
          revolutionize farming practices in the future.
        </p>
        <a
            class="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-full transition-colors hover:bg-teal-600 hover:border-teal-600"
            :href="ctaLink"
        >
          Call To Action
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImage: require('@/assets/img/cta-bg.jpg'), // Path to your background image
      videoLink: 'https://www.youtube.com/watch?v=TlzbjYAMMzA', // Replace with actual video link
      ctaLink: '#' // Replace with the actual link for the CTA button
    };
  }
};
</script>

<style scoped>
/* Add additional styling if needed */
</style>
