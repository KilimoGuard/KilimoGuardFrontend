<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="flex h-screen">
    <SideNavbar @sidebar-toggle="handleSidebarToggle" />
    <main :style="{ marginLeft: sidebarWidth }" class="flex-1 transition-all duration-300">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import SideNavbar from '@/components/SideNavbar.vue';

export default {
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
/* Add any additional styles needed for the layout */
</style>
