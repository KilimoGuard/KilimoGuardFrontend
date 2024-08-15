<template>
  <div id="app">
    <kilimo-guard-navbar/>
    <hero-section/>
    <about-us/>
    <call-to-action/>
  </div>
</template>

<script>

import KilimoGuardNavbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutUs from "@/components/AboutUs.vue";
import CallToAction from "@/components/ActionCall.vue";

export default {
  name: 'App',
  components: {
    CallToAction,
    AboutUs,
    HeroSection,
    KilimoGuardNavbar,
  }
}
</script>

<style>
</style>
