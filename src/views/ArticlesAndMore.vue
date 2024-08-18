<template>
  <main-layout>
    <header class="bg-custom-green text-white p-4 sticky top-0 shadow-md z-10">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-3xl font-semibold">
          KilimoGuard<span class="text-orange-500">.</span>
        </h1>
      </div>
    </header>

    <div class="container mx-auto p-4">
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Pests and Diseases 🦠</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold mb-3">Common Pests</h3>
            <ul class="list-disc pl-5 mb-4">
              <li>Aphids</li>
              <li>Stalk Borer</li>
              <li>Army Worms</li>
              <li>Locusts</li>
              <li>Caterpillars</li>
              <li>Beetles</li>
              <li>Weevils</li>
            </ul>
            <img src="@/assets/img/desertlocust.jpg" alt="Desert Locust" class="w-full h-auto rounded-lg"/>
            <p class="mt-2 text-sm text-gray-500">Figure 1: Desert locust images.</p>
          </div>
          <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold mb-3">Maize Diseases</h3>
            <ul class="list-disc pl-5 mb-4">
              <li>Rust</li>
              <li>Leaf Blight</li>
              <li>Leaf Spots</li>
              <li>Fusarium</li>
              <li>Stalk Rot</li>
            </ul>
            <img src="@/assets/img/fallarmyworm.webp" alt="Fall Armyworm" class="w-full h-auto rounded-lg"/>
            <p class="mt-2 text-sm text-gray-500">Figure 2: Fall armyworm images.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Integrated Pest Management (IPM)</h2>
        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">What is IPM?</h3>
          <p class="mb-4">IPM is an approach that combines different strategies to manage pests in a sustainable, environmentally friendly way.</p>
          <ul class="list-disc pl-5">
            <li><strong>Cultural Controls:</strong> Crop rotation, intercropping, pest-resistant varieties.</li>
            <li><strong>Biological Controls:</strong> Natural predators like ladybugs.</li>
            <li><strong>Mechanical and Physical Controls:</strong> Hand-picking pests, traps, barriers.</li>
            <li><strong>Chemical Controls:</strong> Use pesticides as a last resort, combined with other strategies.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Benefits of Reducing Pesticide Use</h2>
        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <ul class="list-disc pl-5">
            <li><strong>Environmental Health:</strong> Less soil, water, and non-target species contamination.</li>
            <li><strong>Human Health:</strong> Lower pesticide residues and chemical exposure.</li>
            <li><strong>Cost Savings:</strong> Reduced need for chemical inputs, lowering production costs.</li>
            <li><strong>Market Opportunities:</strong> Consumer demand for organic and sustainable food.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Continuous Education and Adaptation</h2>
        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <ul class="list-disc pl-5">
            <li><strong>Stay Informed:</strong> Keep up with research, workshops, and agricultural services.</li>
            <li><strong>Adapt to Local Conditions:</strong> Tailor practices to local ecosystems and pest pressures.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="text-3xl font-bold mb-6">Alternative Farming Practices</h2>
        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <ul class="list-disc pl-5">
            <li><strong>Organic Farming:</strong> Avoids synthetic pesticides and fertilizers.</li>
            <li><strong>Agroforestry:</strong> Integrates trees with crops or livestock.</li>
            <li><strong>Permaculture:</strong> Mimics natural ecosystems for sustainability.</li>
            <li><strong>No-Till Farming:</strong> Reduces soil disturbance and retains moisture.</li>
            <li><strong>Use of Natural Pesticides:</strong> Includes neem oil or garlic sprays.</li>
            <li><strong>Companion Planting:</strong> Plants certain crops together to repel pests.</li>
          </ul>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-3xl font-bold mb-6">Citations</h2>
        <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <ul class="list-disc pl-5">
            <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10610049/#:~:text=Effects%20of%20Drought%20and%20Heat%20Stress%20on%20Maize%20Yields&text=Effect%20of%20drought%20stress%20on,changing%20precipitation%20patterns%20%5B46%5D." target="_blank" class="text-blue-600 hover:underline">Reference 1</a></li>
            <li><a href="https://ipm.ucanr.edu/PMG/menu.homegarden.html" target="_blank" class="text-blue-600 hover:underline">Reference 2</a></li>
            <li><a href="https://evolution.earthathome.org/grasses/andropogoneae/maize-life-cycle/#:~:text=The%20process%20of%20maize%20development,%2C%20flowering%2C%20and%20seed%20formation." target="_blank" class="text-blue-600 hover:underline">Reference 3</a></li>
            <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10693822/ - :~:text=Different studies have shown than,source of food and income." target="_blank" class="text-blue-600 hover:underline">Reference 4</a></li>
          </ul>
        </div>
      </section>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout.vue";

export default {
  name: 'ArticlesAndMore',
  components: { MainLayout },
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}
</style>
