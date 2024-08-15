<template>
  <section id="services" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl mb-4 relative text-center">
          Our Impact
          <span
              class="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-[#008374] mt-4"></span>
        </h2>
        <p class="text-lg text-gray-600 mt-8">Discover how our pest prediction system makes a difference</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="service-item bg-white p-8 rounded-lg shadow-lg transition-all group">
          <div class="relative flex mb-6">
            <!-- Circle Background -->
            <div class="group-hover:bg-teal-600 ml-6 w-14 h-14 rounded-full bg-gray-200 absolute flex items-center justify-center"></div>
            <!-- Icon Above Circle -->
            <i class="bi bi-activity text-5xl relative"></i>
          </div>
          <h3 class="text-xl font-bold mb-4 border-b-4 border-gray-200 pb-2 group-hover:border-teal-600">
            Improved Crop Yield
          </h3>
          <p class="text-gray-600 mb-6">Our system helps farmers anticipate and manage pest threats, leading to higher
            crop yields and increased profitability.</p>
          <a href="#" class="text-teal-600 hover:text-teal-800">Read more <i class="bi bi-arrow-right"></i></a>
        </div>

        <div class="service-item bg-white p-8 rounded-lg shadow-lg transition-all group">
          <div class="icon flex mb-6">
            <!-- Circle Background -->
            <div class="group-hover:bg-teal-600 ml-6 w-14 h-14 rounded-full bg-gray-200 absolute flex items-center justify-center"></div>
            <!-- Icon Above Circle -->
            <i class="bi bi-shield-x text-5xl relative"></i>
          </div>
          <h3 class="text-xl font-bold mb-4 border-b-4 border-gray-200 pb-2 group-hover:border-teal-600">Reduced Pesticide Usage</h3>
          <p class="text-gray-600 mb-6">By providing accurate forecasts, we minimize the need for excessive pesticide
            application, promoting sustainable farming practices.</p>
          <a href="#" class="text-teal-600 hover:text-teal-800">Read more <i class="bi bi-arrow-right"></i></a>
        </div>

        <div class="service-item bg-white p-8 rounded-lg shadow-lg transition-all group">
          <div class="icon flex mb-6">
            <!-- Circle Background -->
            <div class="group-hover:bg-teal-600 ml-6 w-14 h-14 rounded-full bg-gray-200 absolute flex items-center justify-center"></div>
            <!-- Icon Above Circle -->
            <i class="bi bi-globe-europe-africa text-5xl relative"></i>
          </div>
          <h3 class="text-xl font-bold mb-4 border-b-4 border-gray-200 pb-2 group-hover:border-teal-600">Enhanced Environmental Sustainability</h3>
          <p class="text-gray-600 mb-6">Our solution contributes to environmental sustainability by reducing chemical
            usage and minimizing harm to ecosystems.</p>
          <a href="#" class="text-teal-600 hover:text-teal-800">Read more <i class="bi bi-arrow-right"></i></a>
        </div>

        <div class="service-item bg-white p-8 rounded-lg shadow-lg transition-all group">
          <div class="icon flex mb-6">
            <!-- Circle Background -->
            <div class="group-hover:bg-teal-600 ml-6 w-14 h-14 rounded-full bg-gray-200 absolute flex items-center justify-center"></div>
            <!-- Icon Above Circle -->
            <i class="bi bi-people text-5xl relative"></i>
          </div>
          <h3 class="text-xl font-bold mb-4 border-b-4 border-gray-200 pb-2 group-hover:border-teal-600">Empowering Farmers</h3>
          <p class="text-gray-600 mb-6">We empower farmers with actionable insights, enabling them to make informed
            decisions and protect their livelihoods.</p>
          <a href="#" class="text-teal-600 hover:text-teal-800">Read more <i class="bi bi-arrow-right"></i></a>
        </div>

        <div class="service-item bg-white p-8 rounded-lg shadow-lg transition-all group">
          <div class="icon flex mb-6">
            <!-- Circle Background -->
            <div class="group-hover:bg-teal-600 ml-6 w-14 h-14 rounded-full bg-gray-200 absolute flex items-center justify-center"></div>
            <!-- Icon Above Circle -->
            <i class="bi bi-calendar4-week text-5xl relative"></i>
          </div>
          <h3 class="text-xl font-bold mb-4 border-b-4 border-gray-200 pb-2 group-hover:border-teal-600">Timely Pest Management</h3>
          <p class="text-gray-600 mb-6">Our system provides timely alerts, allowing farmers to implement pest management
            strategies before significant damage occurs.</p>
          <a href="#" class="text-teal-600 hover:text-teal-800">Read more <i class="bi bi-arrow-right"></i></a>
        </div>

        <div class="service-item bg-white p-8 rounded-lg shadow-lg transition-all group">
          <div class="icon flex mb-6">
            <!-- Circle Background -->
            <div class="group-hover:bg-teal-600 ml-6 w-14 h-14 rounded-full bg-gray-200 absolute flex items-center justify-center"></div>
            <!-- Icon Above Circle -->
            <i class="bi bi-chat-square-text text-5xl relative"></i>
          </div>
          <h3 class="text-xl font-bold mb-4 border-b-4 border-gray-200 pb-2 group-hover:border-teal-600">Community Engagement</h3>
          <p class="text-gray-600 mb-6">We foster community engagement by facilitating knowledge sharing and
            collaboration among farmers and agricultural experts.</p>
          <a href="#" class="text-teal-600 hover:text-teal-800">Read more <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection'
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
