<!--<template>-->
<!--  <main-layout>-->
<!--    <div class="mt-4 pl-6">-->
<!--      <p class="text-2xl font-semibold">Welcome back, {{ user?.username }}!</p>-->
<!--    </div>-->

<!--    &lt;!&ndash; Statistics Section &ndash;&gt;-->
<!--    <div class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">-->
<!--      &lt;!&ndash; KilimoAI Stat Card &ndash;&gt;-->
<!--      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">-->
<!--        <div class="flex justify-between items-center mb-4">-->
<!--          <h2 class="text-xl font-semibold text-custom-green">KilimoAI</h2>-->
<!--          <i class="bi bi-chat-square-text text-3xl text-custom-green"></i>-->
<!--        </div>-->
<!--        <div class="text-3xl font-bold text-black mb-2">12,345</div>-->
<!--        <p class="text-gray-600">Total Queries Answered</p>-->
<!--        <div class="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">-->
<!--          <p>Accuracy Rate: <strong>98%</strong></p>-->
<!--          <p class="sm:ml-4">Active Users: <strong>1,234</strong></p>-->
<!--        </div>-->
<!--        <router-link to="/kilimoai" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">-->
<!--          View Details &rarr;-->
<!--        </router-link>-->
<!--      </div>-->

<!--      &lt;!&ndash; KilimoEye Stat Card &ndash;&gt;-->
<!--      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">-->
<!--        <div class="flex justify-between items-center mb-4">-->
<!--          <h2 class="text-xl font-semibold text-custom-green">KilimoEye</h2>-->
<!--          <i class="bi bi-eye text-3xl text-custom-green"></i>-->
<!--        </div>-->
<!--        <div class="text-3xl font-bold text-black mb-2">5,678</div>-->
<!--        <p class="text-gray-600">Images Analyzed</p>-->
<!--        <div class="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">-->
<!--          <p>Diseases Detected: <strong>456</strong></p>-->
<!--          <p class="sm:ml-4">Avg. Processing Time: <strong>2.5 sec</strong></p>-->
<!--        </div>-->
<!--        <router-link to="/kilimoeye" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">-->
<!--          View Details &rarr;-->
<!--        </router-link>-->
<!--      </div>-->

<!--      &lt;!&ndash; Articles Stat Card &ndash;&gt;-->
<!--      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">-->
<!--        <div class="flex justify-between items-center mb-4">-->
<!--          <h2 class="text-xl font-semibold text-custom-green">Articles & Resources</h2>-->
<!--          <i class="bi bi-bookmarks text-3xl text-custom-green"></i>-->
<!--        </div>-->
<!--        <div class="text-3xl font-bold text-black mb-2">789</div>-->
<!--        <p class="text-gray-600">Total Articles</p>-->
<!--        <div class="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">-->
<!--          <p>New This Month: <strong>12</strong></p>-->
<!--          <p class="sm:ml-4">Popular Topic: <strong>Sustainable Farming</strong></p>-->
<!--        </div>-->
<!--        &lt;!&ndash; <router-link to="/articles" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">-->
<!--          Explore Resources &rarr;-->
<!--        </router-link> &ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; KilimoGuard Information Section &ndash;&gt;-->
<!--    <div class="p-6 mt-2 bg-white text-gray-800 rounded-lg shadow-md">-->
<!--      <h2 class="text-2xl font-bold mb-4">About KilimoGuard</h2>-->
<!--      <p class="mb-4">KilimoGuard is at the forefront of agricultural innovation, dedicated to tackling the most pressing challenges faced by farmers today. Our mission is to deliver cutting-edge solutions that enhance crop protection, boost productivity, and promote sustainable farming practices. By harnessing the power of artificial intelligence and advanced data analytics, KilimoGuard provides farmers with the tools they need to make informed decisions and overcome the obstacles of modern agriculture.</p>-->

<!--      <h3 class="text-xl font-semibold mb-2">Our Focus Areas</h3>-->
<!--      <p class="mb-4">KilimoGuard addresses critical issues in agriculture through a multi-faceted approach:</p>-->
<!--      <ul class="list-disc pl-5 mb-4">-->
<!--        <li class="mb-2">**Pest Management:** Persistent pest infestations are a major threat to crop yields. Our AI-driven pest prediction model analyzes environmental conditions and historical data to forecast pest activity with high precision, enabling farmers to implement timely and effective management strategies.</li>-->
<!--        <li class="mb-2">**Chemical Overuse:** The overuse of harmful chemicals poses serious environmental and health risks. KilimoGuard advocates for sustainable farming practices that reduce dependency on pesticides, promoting eco-friendly alternatives that protect both the crops and the surrounding ecosystem.</li>-->
<!--        <li class="mb-2">**Sustainable Practices:** Our approach emphasizes the importance of adopting practices that conserve natural resources, improve soil health, and support biodiversity. We offer guidance on implementing sustainable techniques that ensure long-term agricultural viability and environmental stewardship.</li>-->
<!--      </ul>-->

<!--      <h3 class="text-xl font-semibold mb-2">Key Features</h3>-->
<!--      <p class="mb-4">KilimoGuard offers a suite of advanced features designed to revolutionize agricultural practices:</p>-->
<!--      <ul class="list-disc pl-5 mb-4">-->
<!--        <li class="mb-2">**AI-Driven Pest Predictions:** Our sophisticated AI algorithms analyze real-time weather data and historical pest trends to predict pest outbreaks with remarkable accuracy. This allows farmers to take proactive measures, minimizing crop damage and reducing the need for reactive treatments.</li>-->
<!--        <li class="mb-2">**Sustainable Farming Practices:** We provide actionable insights and recommendations for adopting sustainable farming methods. By focusing on reducing chemical inputs and enhancing soil health, our solutions help farmers achieve better yields while preserving the environment.</li>-->
<!--        <li class="mb-2">**Enhanced Crop Protection:** KilimoGuard's technology integrates with existing farm management systems to offer real-time alerts and guidance on pest threats. This comprehensive approach ensures that farmers can implement effective crop protection strategies and maximize productivity.</li>-->
<!--      </ul>-->

<!--      <h3 class="text-xl font-semibold mb-2">Our Vision</h3>-->
<!--      <p>KilimoGuard envisions a future where agriculture is not only more productive but also more sustainable. Our goal is to transform the agricultural landscape by integrating innovative technologies that address both current and future challenges. We aim to create a healthier environment and a more prosperous future for farmers, ensuring that agricultural practices contribute positively to the global food supply and ecosystem.</p>-->
<!--    </div>-->
<!--  </main-layout>-->
<!--</template>-->

<!--<script>-->
<!--import { computed } from 'vue';-->
<!--import { useAuthStore } from '@/stores/auth';-->
<!--import MainLayout from "@/layout/MainLayout.vue";-->

<!--export default {-->
<!--  name: 'DashboardPage',-->
<!--  components: {-->
<!--    MainLayout,-->
<!--  },-->
<!--  setup() {-->
<!--    const authStore = useAuthStore();-->
<!--    const user = computed(() => authStore.user);-->

<!--    return {-->
<!--      user,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.bg-custom-green {-->
<!--  background-color: #008374;-->
<!--}-->

<!--.font-semibold {-->
<!--  font-weight: 600;-->
<!--}-->

<!--.text-3xl {-->
<!--  font-size: 1.875rem;-->
<!--}-->

<!--.text-xl {-->
<!--  font-size: 1.25rem;-->
<!--}-->

<!--.bg-white {-->
<!--  background-color: #ffffff;-->
<!--}-->

<!--.text-gray-800 {-->
<!--  color: #2d3748;-->
<!--}-->

<!--.rounded-lg {-->
<!--  border-radius: 0.5rem;-->
<!--}-->

<!--.shadow-lg {-->
<!--  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);-->
<!--}-->

<!--.transition-shadow {-->
<!--  transition: box-shadow 0.3s ease-in-out;-->
<!--}-->

<!--.list-disc {-->
<!--  list-style-type: disc;-->
<!--}-->

<!--.pl-5 {-->
<!--  padding-left: 1.25rem;-->
<!--}-->

<!--@media (max-width: 640px) {-->
<!--  .text-3xl {-->
<!--    font-size: 1.5rem;-->
<!--  }-->

<!--  .text-xl {-->
<!--    font-size: 1.125rem;-->
<!--  }-->
<!--}-->
<!--</style>-->


<template>
  <main-layout class="mt-4">
    <div class="mt-4 pl-6">
      <p class="text-2xl font-semibold">Welcome back, {{ user?.username }}!</p>
    </div>
    <!-- Statistics Section -->
    <div class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- KilimoAI Stat Card -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-custom-green">KilimoAI</h2>
          <i class="bi bi-chat-square-text text-3xl text-custom-green"></i>
        </div>
        <div class="text-3xl font-bold text-black mb-2">12,345</div>
        <p class="text-gray-600">Total Queries Answered</p>
        <div class="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>Accuracy Rate: <strong>98%</strong></p>
          <p class="sm:ml-4">Active Users: <strong>1,234</strong></p>
        </div>
<!--        <router-link to="/kilimoai" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">-->
<!--          View Details &rarr;-->
<!--        </router-link>-->
      </div>

      <!-- KilimoEye Stat Card -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-custom-green">KilimoEye</h2>
          <i class="bi bi-eye text-3xl text-custom-green"></i>
        </div>
        <div class="text-3xl font-bold text-black mb-2">5,678</div>
        <p class="text-gray-600">Images Analyzed</p>
        <div class="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>Diseases Detected: <strong>456</strong></p>
          <p class="sm:ml-4">Avg. Processing Time: <strong>2.5 sec</strong></p>
        </div>
<!--        <router-link to="/kilimoeye" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">-->
<!--          View Details &rarr;-->
<!--        </router-link>-->
      </div>

      <!-- Articles Stat Card -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-custom-green">Articles & Resources</h2>
          <i class="bi bi-bookmarks text-3xl text-custom-green"></i>
        </div>
        <div class="text-3xl font-bold text-black mb-2">789</div>
        <p class="text-gray-600">Total Articles</p>
        <div class="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>New This Month: <strong>12</strong></p>
          <p class="sm:ml-4">Popular Topic: <strong>Sustainable Farming</strong></p>
        </div>
<!--        <router-link to="/articles" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">-->
<!--          Explore Resources &rarr;-->
<!--        </router-link>-->
      </div>
    </div>
    <div class="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CropCard
          v-for="(crop, index) in crops"
          :key="index"
          :title="crop.title"
          :graphic="crop.graphic"
          :description="crop.description"
          :nutrients="crop.nutrients"
      />
    </div>
  </main-layout>
</template>

<script>
import {computed} from 'vue';
import {useAuthStore} from '@/stores/auth';
import MainLayout from "@/layout/MainLayout.vue";
import CropCard from '@/components/CropCard.vue';
import maizeGraphic from '@/assets/img/maizeGraphic.jpg'
import tomatoGraphic from '@/assets/img/tomatoGraphic.jpg'
import potatoGraphic from '@/assets/img/potatoGraphic.jpg'
import beansGraphic from '@/assets/img/beansGraphic.webp'

export default {
  name: 'DashboardPage',
  components: {
    MainLayout,
    CropCard,
  },
  setup() {
    const authStore = useAuthStore();
    const user = computed(() => authStore.user);

    // Example data for the crops
    const crops = [
      {
        title: 'Maize',
        graphic: maizeGraphic, // Update with the actual path
        description: 'Maize is a staple food crop that provides energy and is rich in vitamins.',
        nutrients: {proteins: 9.4, fats: 1.2, carbs: 73.0}
      },
      {
        title: 'Tomatoes',
        graphic: tomatoGraphic, // Update with the actual path
        description: 'Tomatoes are rich in antioxidants and vitamins, particularly vitamin C.',
        nutrients: {proteins: 0.9, fats: 0.2, carbs: 3.9}
      },
      {
        title: 'Potatoes',
        graphic: potatoGraphic, // Update with the actual path
        description: 'Potatoes are a versatile vegetable and a good source of vitamins and minerals.',
        nutrients: {proteins: 2.0, fats: 0.2, carbs: 17.6}
      },
      {
        title: 'Beans',
        graphic: beansGraphic, // Update with the actual path
        description: 'Beans are high in protein and fiber, making them a nutritious choice.',
        nutrients: {proteins: 8.7, fats: 0.5, carbs: 27.4}
      }
    ];

    return {
      user,
      crops,
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
