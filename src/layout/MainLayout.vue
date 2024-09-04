<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="flex h-screen">
    <SideNavbar />
    <main class="flex-1 transition-all duration-300 mt-4">
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
    };
  },
  methods: {
  },
};
</script>

<style scoped>
/* Add any additional styles needed for the layout */
</style>
