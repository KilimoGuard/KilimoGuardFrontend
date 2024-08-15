<template>
  <!-- About Us Section -->
  <section id="about" class="relative py-12">
    <div class="container mx-auto px-6 lg:px-8" data-aos="fade-up">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 relative text-center">
          About Us
          <span
              class="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-[#008374] mt-4"></span>
        </h2>
        <p class="text-lg text-gray-600 mt-8">Learn more about our pest prediction system and how it helps you stay
          ahead of
          pest threats.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Content Section -->
        <div class="flex flex-col justify-center lg:pr-8">
          <h3 class="text-2xl font-bold mb-4">Predicting Pest Threats for Better Protection</h3>
          <img src="@/assets/img/analysis.jpg" alt="Analysis" class="w-full h-auto rounded-lg mb-4 shadow-lg">
          <p class="mb-4">Our system utilizes advanced algorithms to forecast pest outbreaks, allowing farmers to take
            proactive measures to protect their crops. We prioritize accuracy and reliability to ensure timely
            warnings.</p>
          <p>We understand the importance of staying informed about potential pest risks. Our platform empowers users
            with detailed insights and actionable recommendations to mitigate pest damage effectively.</p>
        </div>

        <!-- Additional Content Section -->
        <div class="flex flex-col justify-center lg:pl-8">
          <p class="italic mb-6">Stay informed and prepared with our pest prediction system.</p>
          <ul class="list-none space-y-4 mb-6">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008374" class="w-6 h-6 mr-3">
                <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"/>
              </svg>
              Receive timely alerts about potential pest outbreaks.
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008374" class="w-6 h-6 mr-3">
                <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"/>
              </svg>
              Access accurate forecasts based on
              comprehensive data analysis.
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008374" class="w-6 h-6 mr-3">
                <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"/>
              </svg>
              Utilize actionable recommendations to
              protect your crops effectively.
            </li>
          </ul>
          <p class="mb-6">Our mission is to support farmers in safeguarding their livelihoods through reliable pest
            prediction and proactive pest management strategies.</p>

          <div class="relative mt-4">
            <img src="@/assets/img/farmer.jpeg" alt="Farmer" class="w-full h-auto rounded-lg shadow-lg">
            <a href="https://www.youtube.com/watch?v=TlzbjYAMMzA"
               class="play-btn absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div
                  class="relative w-24 h-24 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 animate-pulse border-4 border-teal-400 rounded-full"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="white" class="w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"/>
                </svg>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
}
</script>

<style>
.play-btn {
  width: 94px;
  height: 94px;
  background: radial-gradient(circle at center, #008374 50%, rgba(0, 131, 116, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: absolute;
  left: calc(50% - 47px);
  top: calc(50% - 47px);
}

.play-btn:before {
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

.play-btn:after {
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
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.play-btn:hover:before {
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
  z-index: 200;
  animation: none;
  border-radius: 0;
}

.play-btn:hover:after {
  border-left: 15px solid #008374;
  transform: scale(5);
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
