<template>
  <div class="flex">
    <SideNavbar />
    <main class="flex-1 ml-64 p-8">
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
};
</script>

<style scoped>
/* Optional: Additional styles specific to the Dashboard page */
</style>
