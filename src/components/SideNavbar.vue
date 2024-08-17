<template>
  <aside :class="{'w-72': isExpanded, 'w-16': !isExpanded}"
         class="h-full bg-custom-green text-white fixed top-0 left-0 transition-width duration-300">
    <div class="flex flex-col h-full">
      <!-- Logo Section (only visible when expanded) -->
      <div v-if="isExpanded" class="flex p-4 mb-8">
        <h1 class="text-3xl font-semibold text-white">KilimoGuard<span class="text-orange-500">.</span></h1>
      </div>

      <!-- Navbar Items -->
      <nav class="flex-1">
        <ul class="mt-4">
          <li v-for="(item, index) in navItems" :key="index" class="mb-4 hover:bg-custom-hover flex items-center">
            <router-link
              :to="item.route"
              :class="{'active-nav-item': isActiveRoute(item.route)}"
              class="px-5 py-4 text-lg flex items-center"
            >
              <i :class="item.iconClass + ' mr-3'"></i>
              <span v-if="isExpanded">{{ item.text }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- User Info Section -->
      <div class="p-4 mt-auto bg-custom-dark-green flex items-center justify-between">
        <p class="text-sm" v-if="isExpanded">
          Logged in as: <span class="font-semibold">{{ username }}</span>
        </p>
        <!-- Toggle Button -->
        <button @click="toggleSidebar" class="p-2 bg-custom-dark-green hover:bg-custom-hover">
          <i :class="isExpanded ? 'bi bi-box-arrow-in-left' : 'bi bi-box-arrow-in-right'"></i>
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideNavbar',
  data() {
    return {
      isExpanded: true, // Initial state of the sidebar
      username: 'John Doe', // Replace with actual username or state variable
      navItems: [
        { route: '/dashboard', iconClass: 'bi bi-speedometer', text: 'Dashboard' },
        { route: '/kilimoai', iconClass: 'bi bi-chat-square-text', text: 'KilimoAI' },
        { route: '/kilimoeye', iconClass: 'bi bi-eye', text: 'KilimoEye' },
        { route: '/articles', iconClass: 'bi bi-bookmarks', text: 'Articles and More' },
        { route: '/farming-planner', iconClass: 'bi bi-calendar2-week', text: 'Farming Planner' },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
      this.$emit('sidebar-toggle', this.isExpanded);
    },
    isActiveRoute(route) {
      return this.$route.path === route;
    },
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

.transition-width {
  transition: width 0.3s ease;
}

.w-16 {
  width: 4rem; /* Collapsed width */
}

.w-72 {
  width: 18rem; /* Expanded width */
}

/* Active Nav Item Style */
.active-nav-item {
  background-color: #006e62; /* Change this to your preferred active color */
  font-weight: bold;
  width: 100%; /* Fill the entire slot */
  height: 100%; /* Fill the entire slot */
  display: flex;
  align-items: center;
}
</style>
