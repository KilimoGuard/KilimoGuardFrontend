<template>
  <main-layout>
    <!-- Main Dashboard Content -->
    <div class="bg-custom-green text-white p-4">
      <h1 class="text-3xl font-bold mb-6">Platform Dashboard</h1>
    </div>

    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- KilimoAI Stat Card -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-custom-green">KilimoAI</h2>
          <i class="bi bi-chat-square-text text-3xl text-custom-green"></i>
        </div>
        <div class="text-3xl font-bold text-black mb-2">12,345</div>
        <p class="text-gray-600">Total Queries Answered</p>
        <div class="mt-4 flex justify-between items-center text-sm text-gray-600">
          <p>Accuracy Rate: <strong>98%</strong></p>
          <p>Active Users: <strong>1,234</strong></p>
        </div>
        <router-link to="/kilimoai" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">
          View Details &rarr;
        </router-link>
      </div>

      <!-- KilimoEye Stat Card -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-custom-green">KilimoEye</h2>
          <i class="bi bi-eye text-3xl text-custom-green"></i>
        </div>
        <div class="text-3xl font-bold text-black mb-2">5,678</div>
        <p class="text-gray-600">Images Analyzed</p>
        <div class="mt-4 flex justify-between items-center text-sm text-gray-600">
          <p>Diseases Detected: <strong>456</strong></p>
          <p>Avg. Processing Time: <strong>2.5 sec</strong></p>
        </div>
        <router-link to="/kilimoeye" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">
          View Details &rarr;
        </router-link>
      </div>

      <!-- Articles Stat Card -->
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-custom-green">Articles & Resources</h2>
          <i class="bi bi-bookmarks text-3xl text-custom-green"></i>
        </div>
        <div class="text-3xl font-bold text-black mb-2">789</div>
        <p class="text-gray-600">Total Articles</p>
        <div class="mt-4 flex justify-between items-center text-sm text-gray-600">
          <p>New This Month: <strong>12</strong></p>
          <p>Popular Topic: <strong>Sustainable Farming</strong></p>
        </div>
        <router-link to="/articles" class="block mt-4 text-custom-green font-semibold hover:text-orange-500">
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

.text-xl {
  font-size: 1.25rem;
}

.font-semibold {
  font-weight: 600;
}

.text-3xl {
  font-size: 1.875rem;
}

.font-bold {
  font-weight: 700;
}
</style>
