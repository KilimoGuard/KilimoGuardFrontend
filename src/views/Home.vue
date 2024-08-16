<template>
  <div>
    <kilimo-guard-navbar class="sticky top-0 z-20"/>
    <hero-section/>
    <about-us/>
    <call-to-action/>
    <our-impact class="mt-4"/>
    <our-team/>
    <f-a-q-section/>
    <contact-section/>
    <chatbot/>
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
import Chatbot from "@/components/ChatBot.vue";

export default {
  name: 'HomePage',
  components: {
    Chatbot,
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
