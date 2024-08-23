<template>
  <header class="bg-[#008374] shadow-md relative">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <a href="/#hero-section" class="flex items-center">
        <h1 class="text-3xl font-semibold text-white">KilimoGuard<span class="text-orange-500 ml-1">.</span></h1>
      </a>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Navigation Links -->
      <nav :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="absolute top-0 right-0 w-64 h-screen bg-[#008374] p-6 md:relative md:flex md:space-x-8 md:h-auto md:p-0 md:w-auto transition-transform duration-300 ease-in-out transform md:transform-none">
        <!-- Close Button (Visible on Mobile Only) -->
        <div class="flex justify-end md:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Links -->
        <a :class="{ 'text-orange-500 border-b-2 border-orange-500': activeSection === 'hero-section' }" @click.prevent="scrollToSection('hero-section')" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Home</a>
        <a :class="{ 'text-orange-500 border-b-2 border-orange-500': activeSection === 'about' }" @click.prevent="scrollToSection('about')" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">About</a>
        <a :class="{ 'text-orange-500 border-b-2 border-orange-500': activeSection === 'services' }" @click.prevent="scrollToSection('services')" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Services</a>
        <a :class="{ 'text-orange-500 border-b-2 border-orange-500': activeSection === 'our-team' }" @click.prevent="scrollToSection('our-team')" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Team</a>
        <a :class="{ 'text-orange-500 border-b-2 border-orange-500': activeSection === 'contact-section' }" @click.prevent="scrollToSection('contact-section')" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Contact</a>
        <a href="/questionnaire" target="_blank" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Survey</a>
        <a href="/predictor" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Pilot</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'KilimoGuardNavbar',
  data() {
    return {
      isMenuOpen: false,
      activeSection: '',  // Track the active section
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    setActiveSection(sectionId) {
      this.activeSection = sectionId;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.setActiveSection(sectionId);
      }
    },
  },
  mounted() {
    const sections = ['hero-section', 'about', 'services', 'our-team', 'contact-section'];
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  },
}
</script>

<style scoped>
/* Style for the active link underline */
.text-orange-500 {
  font-weight: bold;
  transition: border-color 0.3s ease-in-out;
}
</style>
