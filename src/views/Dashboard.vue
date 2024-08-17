<template>
  <main-layout>
    <!-- Main Dashboard Content -->
    <div class="bg-custom-green text-white p-4">
      <h1 class="text-3xl font-bold mb-6">Platform Overview</h1>
    </div>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- KilimoAI Section -->
      <div class="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center mb-4">
          <i class="bi bi-chat-square-text text-4xl text-custom-green mr-4"></i>
          <h2 class="text-xl font-semibold">KilimoAI</h2>
        </div>
        <p class="text-gray-700 mb-4">
          Utilize our AI-powered chatbot to answer any questions related to agriculture. Whether you need advice on crop management or pest control, KilimoAI is here to assist you with the latest information powered by machine learning.
        </p>
        <div class="text-sm text-gray-600 mb-4">
          <p><strong>Total Queries Answered:</strong> 12,345</p>
          <p><strong>Accuracy Rate:</strong> 98%</p>
          <p><strong>Active Users:</strong> 1,234</p>
        </div>
        <router-link to="/kilimoai" class="text-custom-green font-semibold hover:text-orange-500">
          Learn More &rarr;
        </router-link>
      </div>

      <!-- KilimoEye Section -->
      <div class="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center mb-4">
          <i class="bi bi-eye text-4xl text-custom-green mr-4"></i>
          <h2 class="text-xl font-semibold">KilimoEye</h2>
        </div>
        <p class="text-gray-700 mb-4">
          Upload images of your crops to KilimoEye for a detailed analysis. Our image scanner identifies diseases, pests, and nutrient deficiencies to provide you with actionable insights for healthier crops.
        </p>
        <div class="text-sm text-gray-600 mb-4">
          <p><strong>Images Analyzed:</strong> 5,678</p>
          <p><strong>Diseases Detected:</strong> 456</p>
          <p><strong>Average Processing Time:</strong> 2.5 seconds</p>
        </div>
        <router-link to="/kilimoeye" class="text-custom-green font-semibold hover:text-orange-500">
          Get Started &rarr;
        </router-link>
      </div>

      <!-- Articles and More Section -->
      <div class="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex items-center mb-4">
          <i class="bi bi-bookmarks text-4xl text-custom-green mr-4"></i>
          <h2 class="text-xl font-semibold">Articles and More</h2>
        </div>
        <p class="text-gray-700 mb-4">
          Explore a library of educational materials on farming practices, sustainable agriculture, and more. Stay informed with the latest articles and resources designed to enhance your farming knowledge.
        </p>
        <div class="text-sm text-gray-600 mb-4">
          <p><strong>Articles Available:</strong> 789</p>
          <p><strong>New Articles This Month:</strong> 12</p>
          <p><strong>Popular Topic:</strong> Sustainable Farming</p>
        </div>
        <router-link to="/articles" class="text-custom-green font-semibold hover:text-orange-500">
          Explore Resources &rarr;
        </router-link>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout.vue";

export default {
  name: 'DashboardPage',
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}

.text-custom-green {
  color: #008374;
}

.p-6 {
  padding: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.grid-cols-1 {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.lg\:grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gap-6 {
  gap: 1.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.text-xl {
  font-size: 1.25rem;
}

.font-semibold {
  font-weight: 600;
}

.hover\:text-orange-500:hover {
  color: #fb923c;
}
</style>
