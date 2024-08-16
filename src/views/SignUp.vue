<template>
  <div class="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" v-model="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" v-model="password" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green" required>
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-dark-green focus:border-dark-green" required>
        </div>
        <button type="submit" class="w-full bg-dark-green text-white p-2 rounded-lg hover:bg-green-700">Sign Up</button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-dark-green hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      backgroundImage: require('@/assets/img/smartfarming.webp'), // Adjust the path as needed
    };
  },
  methods: {
    handleSignUp() {
      // Handle sign up logic here
      console.log('Signing up with:', this.email, this.password);

      // Redirect to Dashboard after signup
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.bg-dark-green {
  background-color: #08821a;
}
</style>
