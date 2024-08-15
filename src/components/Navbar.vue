<template>
  <header class="bg-[#008374] shadow-md relative">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <a href="#hero" class="flex items-center">
        <h1 class="text-2xl font-semibold text-white">KilimoGuard<span class="text-orange-500 ml-1">.</span></h1>
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
        <a href="#hero" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Home</a>
        <a href="#about" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">About</a>
        <a href="#services" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Services</a>
        <a href="#team" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Team</a>
        <a href="#contact" class="block mb-6 md:mb-0 text-white hover:text-orange-500 transition-colors duration-200">Contact</a>
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
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
}
</script>

<style scoped>
</style>
