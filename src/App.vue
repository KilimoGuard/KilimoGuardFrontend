<template>
  <div id="app">
    <kilimo-guard-navbar/>
    <hero-section/>
    <about-us/>
  </div>
</template>

<script>

import KilimoGuardNavbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutUs from "@/components/AboutUs.vue";

export default {
  name: 'App',
  components: {
    AboutUs,
    HeroSection,
    KilimoGuardNavbar,
  }
}
</script>

<style>
</style>
