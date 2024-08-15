<template>
  <div id="app">
    <kilimo-guard-navbar/>
    <hero-section/>
    <about-us/>
    <call-to-action/>
    <our-impact class="mt-4"/>
  </div>
</template>

<script>

import KilimoGuardNavbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutUs from "@/components/AboutUs.vue";
import CallToAction from "@/components/ActionCall.vue";
import OurImpact from "@/components/OurImpact.vue";

export default {
  name: 'App',
  components: {
    CallToAction,
    AboutUs,
    HeroSection,
    KilimoGuardNavbar,
    OurImpact
  }
}
</script>

<style>
</style>
