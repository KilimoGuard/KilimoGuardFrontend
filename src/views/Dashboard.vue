<template>
  <div class="flex">
    <SideNavbar @sidebar-toggle="handleSidebarToggle" />
    <main :style="{ marginLeft: sidebarWidth }" class="flex-1 p-8 transition-all duration-300">
      <!-- Main Dashboard Content -->
      <h1 class="text-3xl font-bold">Dashboard Overview</h1>
      <!-- Add additional dashboard content here -->
    </main>
  </div>
</template>

<script>
import SideNavbar from '@/components/SideNavbar.vue';

export default {
  name: 'DashboardPage',
  components: {
    SideNavbar,
  },
  data() {
    return {
      sidebarWidth: '18rem', // Default expanded width
    };
  },
  methods: {
    handleSidebarToggle(isExpanded) {
      this.sidebarWidth = isExpanded ? '18rem' : '4rem'; // Adjust as needed
    },
  },
};
</script>

<style scoped>
/* Optional: Additional styles specific to the Dashboard page */
</style>
