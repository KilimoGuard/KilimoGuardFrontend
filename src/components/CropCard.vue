<template>
  <div class="border rounded-lg shadow-lg p-4">
    <img :src="graphic" alt="Crop Graphic" class="w-full h-48 object-cover mb-4" />
    <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
    <p class="mb-4">{{ description }}</p>
    <div class="flex justify-between">
      <div>
        <strong>Proteins:</strong> {{ nutrients.proteins }} g
      </div>
      <div>
        <strong>Fats:</strong> {{ nutrients.fats }} g
      </div>
      <div>
        <strong>Carbs:</strong> {{ nutrients.carbs }} g
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CropCard',
  props: {
    title: String,
    graphic: String,
    description: String,
    nutrients: Object,
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
