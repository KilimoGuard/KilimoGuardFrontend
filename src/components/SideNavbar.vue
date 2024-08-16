<template>
  <aside class="w-72 h-full bg-custom-green text-white fixed top-0 left-0">
    <div class="flex flex-col h-full">
      <!-- Logo Section -->
      <div class="flex p-4 mb-8">
        <h1 class="text-3xl font-semibold text-white">KilimoGuard<span class="text-orange-500">.</span></h1>
      </div>

      <!-- Navbar Items -->
      <nav class="flex-1">
        <ul class="mt-4">
          <li class="mb-4 hover:bg-custom-hover flex items-center">
            <router-link to="/dashboard" class="px-5 py-4 text-lg flex items-center">
              <i class="bi bi-speedometer mr-3"></i>
              Dashboard Overview
            </router-link>
          </li>
          <li class="mb-4 hover:bg-custom-hover flex items-center">
            <router-link to="/kilimoai" class="px-5 py-4 text-lg flex items-center">
              <i class="bi bi-chat-square-text mr-3"></i>
              KilimoAI
            </router-link>
          </li>
          <li class="mb-4 hover:bg-custom-hover flex items-center">
            <router-link to="/kilimoeye" class="px-5 py-4 text-lg flex items-center">
              <i class="bi bi-eye mr-3"></i>
              KilimoEye
            </router-link>
          </li>
          <li class="mb-4 hover:bg-custom-hover flex items-center">
            <router-link to="/articles" class="px-5 py-4 text-lg flex items-center">
              <i class="bi bi-bookmarks mr-3"></i>
              Articles and More
            </router-link>
          </li>
          <li class="mb-4 hover:bg-custom-hover flex items-center">
            <router-link to="/farming-planner" class="px-5 py-4 text-lg flex items-center">
              <i class="bi bi-calendar2-week mr-3"></i>
              Farming Planner
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- User Info Section -->
      <div class="p-4 mt-auto bg-custom-dark-green">
        <p class="text-sm">Logged in as: <span class="font-semibold">{{ username }}</span></p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideNavbar',
  data() {
    return {
      username: 'John Doe', // Replace with actual username or state variable
    };
  },
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}

.bg-custom-dark-green {
  background-color: #006e62; /* Darker shade for the bottom section */
}

.hover\:bg-custom-hover:hover {
  background-color: #006e62; /* Darker shade for hover effect */
}

li {
  margin-bottom: 1rem; /* Increased spacing between navbar items */
}

i {
  font-size: 1.25rem; /* Adjust icon size if needed */
}

.p-4 {
  padding: 1rem;
}

.mt-auto {
  margin-top: auto;
}

.text-sm {
  font-size: 0.875rem;
}

.font-semibold {
  font-weight: 600;
}
</style>
