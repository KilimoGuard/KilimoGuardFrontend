<template>
  <main-layout>
    <!-- Main Dashboard Content -->
    <div class="bg-custom-green text-white p-4">
      <h1 class="text-2xl font-bold">Overview</h1>
    </div>

    <!-- Add additional dashboard content here -->
  </main-layout>
</template>

<script>
import SideNavbar from '@/components/SideNavbar.vue';
import MainLayout from "@/layout/MainLayout.vue";

export default {
  name: 'DashboardPage',
  components: {
    MainLayout,
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
.bg-custom-green {
  background-color: #008374;
}
</style>
