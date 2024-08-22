<template>
  <main-layout>
    <div class="flex flex-col h-full">
      <!-- Header -->
      <header class="bg-custom-green text-white p-4">
        <h1 class="text-3xl font-bold">Pest Predictor</h1>
      </header>

      <!-- Form Section -->
      <div class="bg-white p-6 rounded-lg shadow-lg mt-4">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="cropType" class="block text-sm font-medium text-gray-700">Crop Type</label>
            <select id="cropType" v-model="form.cropType" required
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-custom-green focus:ring-custom-green focus:ring-opacity-50">
              <option value="" disabled>Select a crop type</option>
              <option value="maize">Maize</option>
              <option value="potatoes">Potatoes</option>
              <option value="tomatoes">Tomatoes</option>
              <option value="beans">Beans</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" v-model="form.date" required
                   class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-custom-green focus:ring-custom-green focus:ring-opacity-50"/>
          </div>

          <div class="mb-4">
            <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" v-model="form.location" required
                   class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-custom-green focus:ring-custom-green focus:ring-opacity-50"/>
          </div>

          <button type="submit" class="bg-custom-green text-white px-6 py-3 rounded-lg text-lg font-medium">Submit</button>
        </form>
      </div>

      <!-- Prediction Result Section -->
      <div v-if="prediction" class="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Prediction Results</h2>
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800">Pest Likelihood</h3>
            <p class="text-xl font-bold text-custom-green">{{ prediction.pest_likelihood }}%</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800">Pest Infestation</h3>
            <p class="text-md text-gray-700">{{ prediction.pest_infestation }}</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800">Pests</h3>
            <p class="text-md text-gray-700">{{ prediction.pest_info.pests }}</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800">Mitigation</h3>
            <ul class="list-disc list-inside space-y-2">
              <li v-for="(value, key) in prediction.pest_info.mitigation" :key="key" class="text-md text-gray-700">
                <strong>{{ key }}:</strong> {{ value }}
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800">Procedures</h3>
            <ul class="list-disc list-inside space-y-2">
              <li v-for="(value, key) in prediction.pest_info.Procedures" :key="key" class="text-md text-gray-700">
                <strong>{{ key }}:</strong> {{ value }}
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800">Operations</h3>
            <ul class="list-disc list-inside space-y-2">
              <li v-for="(value, key) in prediction.pest_info.Operations" :key="key" class="text-md text-gray-700">
                <strong>{{ key }}:</strong> {{ value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout.vue";
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'PestPredictor',
  components: { MainLayout },
  setup() {
    const form = ref({
      cropType: '',
      date: '',
      location: ''
    });
    const prediction = ref(null);

    const handleSubmit = async () => {
      try {
        const payload = {
          crop_type: form.value.cropType,
          date_iso: new Date(form.value.date).toISOString(),
          location: form.value.location
        };

        const response = await axios.post('https://kilimoguard-backend-dev.onrender.com/api-v1/predict', payload);
        prediction.value = response.data;
      } catch (error) {
        console.error('Error while fetching prediction:', error);
        prediction.value = null;
      }
    };

    return {
      form,
      prediction,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}
</style>
