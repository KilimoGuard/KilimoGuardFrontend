import {defineStore} from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
    }),
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post('https://kilimoguard-backend-dev.onrender.com/api-v1/login/', {
                    email,
                    password,
                });

                this.user = response.data.user;
                this.token = response.data.access_token;

                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', this.token);

            } catch (error) {
                console.error('Login failed:', error.response?.data || error.message);
                throw error;  // Rethrow the error so the Login.vue component can handle it
            }
        },
        async logout() {
            try {
                await axios.post('https://kilimoguard-backend-dev.onrender.com/api-v1/logout/', {}, {
                    headers: {'Authorization': `Bearer ${this.token}`},
                });
            } catch (error) {
                console.error('Logout failed:', error.response?.data || error.message);
            } finally {
                this.user = null;
                this.token = null;
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        },
        initializeAuth() {
            const user = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            if (user && token) {
                this.user = JSON.parse(user);
                this.token = token;
            }
        },
    },
});
