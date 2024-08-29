<template>
  <div class="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" v-model="username"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green"
            required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" v-model="email"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green"
            required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" v-model="password"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green"
            required>
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green"
            required>
        </div>
        <button type="submit" class="w-full bg-dark-green text-white p-2 rounded-lg hover:bg-green-700">
          <div v-if="isLoading" style="display: flex; justify-content: center;">
            <img src="../assets/animations/spinner.gif" width="25" height="25" alt="Spinner" />
            <p style="padding-left: 5px;">Submitting ...</p>
          </div>
          <p v-if="!isLoading">Sign Up</p>
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-dark-green hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'SignUp',
  data() {
    const isLoading = ref(false);
    return {
      isLoading,
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      backgroundImage: require('@/assets/img/smartfarming.webp'), // Adjust the path as needed
    };
  },
  methods: {
    async handleSignUp() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      this.isLoading = true;

      try {
        const response = await axios.post(process.env.VUE_APP_BACKEND_URL+'/api-v1/signup/', {
          username: this.username, // Include username in the POST request
          email: this.email,
          password: this.password
        });
        this.isLoading = false;
        console.log('Signup successful:', response.data);
        this.$router.push('/login');
      } catch (error) {
        this.isLoading = false;
        console.error('Signup failed:', error.response?.data || error.message);
        alert('Signup failed. Please try again.');
      }
    }
    ,
  },
};
</script>

<style scoped>
.bg-dark-green {
  background-color: #08821a;
}
</style>
