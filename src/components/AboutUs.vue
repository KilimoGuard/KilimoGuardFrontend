<template>
  <!-- About Us Section -->
  <section id="about" class="relative py-12 bg-gray-50">
    <div class="container mx-auto px-6 lg:px-8" data-aos="fade-up">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">About Us</h2>
        <p class="text-lg text-gray-600">Learn more about our pest prediction system and how it helps you stay ahead of pest threats.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Content Section -->
        <div class="flex flex-col justify-center lg:pr-8">
          <h3 class="text-2xl font-bold mb-4">Predicting Pest Threats for Better Protection</h3>
          <img src="@/assets/img/analysis.jpg" alt="Analysis" class="w-full h-auto rounded-lg mb-4 shadow-lg">
          <p class="mb-4">Our system utilizes advanced algorithms to forecast pest outbreaks, allowing farmers to take proactive measures to protect their crops. We prioritize accuracy and reliability to ensure timely warnings.</p>
          <p>We understand the importance of staying informed about potential pest risks. Our platform empowers users with detailed insights and actionable recommendations to mitigate pest damage effectively.</p>
        </div>

        <!-- Additional Content Section -->
        <div class="flex flex-col justify-center lg:pl-8">
          <p class="italic mb-6">Stay informed and prepared with our pest prediction system.</p>
          <ul class="list-none space-y-4 mb-6">
            <li class="flex items-center">
              <i class="bi bi-check-circle-fill text-green-500 text-xl mr-3"></i> Receive timely alerts about potential pest outbreaks.
            </li>
            <li class="flex items-center">
              <i class="bi bi-check-circle-fill text-green-500 text-xl mr-3"></i> Access accurate forecasts based on comprehensive data analysis.
            </li>
            <li class="flex items-center">
              <i class="bi bi-check-circle-fill text-green-500 text-xl mr-3"></i> Utilize actionable recommendations to protect your crops effectively.
            </li>
          </ul>
          <p class="mb-6">Our mission is to support farmers in safeguarding their livelihoods through reliable pest prediction and proactive pest management strategies.</p>

          <div class="relative">
            <img src="@/assets/img/farmer.jpeg" alt="Farmer" class="w-full h-auto rounded-lg shadow-lg">
            <a href="https://www.youtube.com/watch?v=TlzbjYAMMzA" class="absolute inset-0 flex items-center justify-center">
              <div class="w-24 h-24 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center relative">
                <div class="animate-pulse absolute inset-0 border-4 border-teal-400 rounded-full"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-6.135 4.835A1.5 1.5 0 017 15.12V8.88a1.5 1.5 0 012.617-1.884l6.135 4.835a1.5 1.5 0 010 2.968z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '@/assets/css/custom.css';
</script>
