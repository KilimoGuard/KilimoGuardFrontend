<template>
  <div id="app">
    <kilimo-guard-navbar/>
    <hero-section/>
    <about-us/>
    <call-to-action/>
    <our-impact class="mt-4"/>
    <our-team />
  </div>
</template>

<script>

import KilimoGuardNavbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutUs from "@/components/AboutUs.vue";
import CallToAction from "@/components/ActionCall.vue";
import OurImpact from "@/components/OurImpact.vue";
import OurTeam from "@/components/OurTeam.vue";

export default {
  name: 'App',
  components: {
    OurTeam,
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
