<template>
  <div class="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
       :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg">
      <p class="text-xs sticky top-0 mt-4 ml-4 text-blue-500 hover:text-blue-700"><a href="/"><i class="bi bi-arrow-left text-2xs mr-1"></i> Return to home</a></p>
      <div class="pl-8 pr-8 pb-8 mt-2">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" v-model="email"
                   class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green"
                   required>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" v-model="password"
                   class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green"
                   required>
          </div>          
          <button type="submit" class="w-full bg-dark-green text-white p-2 rounded-lg hover:bg-green-700">
          <div v-if="isLoading" style="display: flex; justify-content: center;">
            <img src="../assets/animations/spinner.gif" width="25" height="25" alt="Spinner" />
            <p style="padding-left: 5px;">Submitting ...</p>
          </div>
          <p v-if="!isLoading">Login</p>          
        </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <router-link to="/signup" class="text-dark-green hover:underline">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

export default {
  name: 'LogIn',
  setup() {
    const isLoading = ref(false);        
    return {      
      isLoading,
      email: "",
      password: "",
      backgroundImage: require('@/assets/img/smartfarming.webp'), // Adjust the path as needed
    };
  },
  methods: {
    async handleLogin() {
      this.isLoading = true;
      const authStore = useAuthStore();
      try {
        await authStore.login(this.email, this.password);
        this.isLoading = false;
        // Redirect to Dashboard after successful login
        this.$router.push('/dashboard');
      } catch (error) {
        this.isLoading = false;
        console.error('Login failed:', error.response?.data || error.message);
        alert('Login failed. Please check your credentials and try again.');
      }
    },
  }
}
</script>

<style scoped>
.bg-dark-green {
  background-color: #08821a;
}
</style>
