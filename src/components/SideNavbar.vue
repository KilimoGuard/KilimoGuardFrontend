<template>
  <div class="h-dvh">
    <aside :class="{ 'w-72': isExpanded, 'w-16': !isExpanded }"
      class="h-full bg-custom-green text-white fixed top-0 left-0 transition-width duration-300">
      <div class="flex flex-col h-screen">
        <!-- Profile Section -->
        <div v-if="isExpanded" class="flex items-center p-4 mb-8 mt-2">
          <!-- Profile Picture -->
          <div class="w-14 h-14 rounded-full bg-gray-200 overflow-hidden mr-4">
            <img :src="profilePicture" alt="Profile Picture" class="w-full h-full object-cover">
          </div>
          <!-- Username and Email -->
          <div>
            <h2 class="text-lg font-semibold">{{ user?.username }}</h2>
            <p class="text-sm">{{ user?.email }}</p>
          </div>
        </div>

        <!-- Navbar Items -->
        <nav class="flex-1">
          <ul class="mt-4">
            <li v-for="(item, index) in navItems" :key="index" class="mb-4 hover:bg-custom-hover flex items-center">
              <router-link :to="item.route" :class="{ 'active-nav-item': isActiveRoute(item.route) }"
                class="px-5 py-4 text-lg flex items-center">
                <i :class="item.iconClass + ' mr-3'"></i>
                <span v-if="isExpanded">{{ item.text }}</span>
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- User Info Section -->
        <div class="absolute inset-x-0 bottom-0">
          <button @click="logout" class="logout-button w-full">
            <button @click="logout" class="logout-button">
              <div v-if="isLoading" style="display: flex; justify-content: center;">
                <img src="../assets/animations/spinner.gif" width="25" height="25" alt="Spinner" />
                <p style="padding-left: 5px;">Logging out ...</p>
              </div>
              <p v-if="!isLoading">Logout</p>
            </button>
          </button>
          <div class="p-4 mt-auto bg-custom-dark-green flex items-center justify-between">
            <button @click="toggleSidebar" class="p-2 bg-custom-dark-green hover:bg-custom-hover">
              <i :class="isExpanded ? 'bi bi-box-arrow-in-left' : 'bi bi-box-arrow-in-right'"></i>
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import profile from '@/assets/img/profile.jpg'
import { ref } from 'vue';

export default {
  name: 'SideNavbar',
  setup() {
    const authStore = useAuthStore();
    const user = computed(() => authStore.user);
    const isLoading = ref(false);
    return {
      user,
      isLoading
    };
  },
  data() {
    return {
      isExpanded: true, // Initial state of the sidebar
      profilePicture: profile, // Replace with actual path to profile picture
      navItems: [
        { route: '/dashboard', iconClass: 'bi bi-speedometer', text: 'Dashboard' },
        { route: '/kilimoai', iconClass: 'bi bi-chat-square-text', text: 'KilimoAI' },
        { route: '/pest-predictor', iconClass: 'bi bi-clipboard-data', text: 'Pest Predictor' },
        // { route: '/kilimoeye', iconClass: 'bi bi-eye', text: 'KilimoEye' },
        { route: '/articles-and-more', iconClass: 'bi bi-bookmarks', text: 'Articles and More' },
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
    async logout() {
      this.isLoading = true;
      const authStore = useAuthStore();
      try {
        await authStore.logout();
        this.isLoading = false;
        this.$router.push('/login'); // Redirect to login page after logout
      } catch (error) {
        this.isLoading = false;
        console.error('Logout failed:', error.message);
      }
    },
  },
};
</script>

<style scoped>
.bg-custom-green {
  background-color: #008374;
}

.bg-custom-dark-green {
  background-color: #006e62;
  /* Darker shade for the bottom section */
}

.hover\:bg-custom-hover:hover {
  background-color: #006e62;
  /* Darker shade for hover effect */
}

li {
  margin-bottom: 1rem;
  /* Increased spacing between navbar items */
}

i {
  font-size: 1.25rem;
  /* Adjust icon size if needed */
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

.active-nav-item {
  background-color: #006e62;
  /* Change this to your preferred active color */
  font-weight: bold;
  width: 100%;
  /* Fill the entire slot */
  height: 100%;
  /* Fill the entire slot */
  display: flex;
  align-items: center;
}

.rounded-full {
  border-radius: 9999px;
}

.overflow-hidden {
  overflow: hidden;
}

.object-cover {
  object-fit: cover;
}

.logout-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #ff1a1a;
}
</style>
