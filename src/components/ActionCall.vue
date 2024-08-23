<template>
  <div
      class="relative bg-cover bg-center rounded-lg overflow-hidden mx-auto"
      :style="{ backgroundImage: `url(${bgImage})`, height: '400px', width: '80%' }">
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-8 space-y-6">
      <!-- Play Button -->
      <a class="relative inline-block w-24 h-24 play-btn2" :href="videoLink">
        <div class="w-full h-full bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center relative overflow-hidden">
          <!-- Pulsating Animation -->
          <div class="absolute inset-0"></div>
          <i class="bi bi-play-fill text-white text-6xl"></i>
        </div>
      </a>

      <!-- Heading -->
      <h3 class="text-2xl font-bold text-white mb-4">Call To Action</h3>

      <!-- Paragraph -->
      <p class="text-white mb-6 text-center">
        Explore how AI and machine learning can shape the future of
        agriculture. Learn about how innovative technologies will
        revolutionize farming practices in the future.
      </p>

      <!-- Call to Action Button -->
      <a
          class="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-full transition-colors hover:bg-teal-600 hover:border-teal-600"
          :href="ctaLink"
      >
        Call To Action
      </a>
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

<style>
.play-btn2 {
  width: 94px;
  height: 94px;
  background: radial-gradient(circle at center, #008374 50%, rgba(0, 131, 116, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: relative; /* Adjusted from absolute to relative */
}

.play-btn2:before {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
  animation: pulsate-btn 2s forwards infinite;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(0, 131, 116, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

.play-btn2:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.play-btn2:hover:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  animation: none;
  border-radius: 0;
}

.play-btn2:hover:after {
  border-left: 15px solid white;
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
