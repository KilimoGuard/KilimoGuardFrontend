<template>
  <div id="app">
    <kilimo-guard-navbar/>
    <hero-section/>
  </div>
</template>

<script>

import KilimoGuardNavbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: 'App',
  components: {
    HeroSection,
    KilimoGuardNavbar,
  }
}
</script>

<style>
</style>
