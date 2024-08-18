import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.css'
import router from './router/index'
import store from './store'
import { createPinia } from 'pinia'
import { useAuthStore } from '@/stores/auth'  // Import the auth store

const pinia = createPinia();
const app = createApp(App);

app.use(pinia)
   .use(store)
   .use(router)
   .mount('#app');

// Initialize the authentication state
const authStore = useAuthStore();
authStore.initializeAuth();
