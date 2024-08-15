<template>
  <div id="app">
    <kilimo-guard-navbar class="sticky top-0 z-20"/>
    <hero-section/>
    <about-us/>
    <call-to-action/>
    <our-impact class="mt-4"/>
    <our-team />
    <f-a-q-section/>
    <contact-section/>
  </div>
</template>

<script>

import KilimoGuardNavbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutUs from "@/components/AboutUs.vue";
import CallToAction from "@/components/ActionCall.vue";
import OurImpact from "@/components/OurImpact.vue";
import OurTeam from "@/components/OurTeam.vue";
import FAQSection from "@/components/FAQComponent.vue";
import ContactSection from "@/components/ContactUs.vue";

export default {
  name: 'App',
  components: {
    ContactSection,
    FAQSection,
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
