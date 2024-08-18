import {createRouter, createWebHistory} from 'vue-router';
import {useAuthStore} from '@/stores/auth';
import LogIn from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import Dashboard from '@/views/Dashboard.vue';
import KilimoAI from '@/views/KilimoAI.vue';
import FarmingPlanner from '@/views/FarmingPlanner.vue';
import KilimoEye from '@/views/KilimoEye.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/login',
        name: 'LogIn',
        component: LogIn,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: Dashboard,
        meta: {requiresAuth: true}, // Mark this route as requiring authentication
    },
    {
        path: '/kilimoai',
        name: 'KilimoAI',
        component: KilimoAI,
        meta: {requiresAuth: true}, // Example of another route requiring authentication
    },
    {
        path: '/kilimoeye',
        name: 'KilimoEye',
        component: KilimoEye,
        meta: {requiresAuth: true}, // Example of another route requiring authentication
    },
    {
        path: '/farming-planner',
        name: 'farming-planner',
        component: FarmingPlanner,
        meta: {requiresAuth: true}, // Example of another route requiring authentication
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Add a global route guard
router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    authStore.initializeAuth(); // Initialize auth state on route change

    if (to.meta.requiresAuth && !authStore.user) {
        // Redirect to login if the route requires authentication and the user is not logged in
        next('/login');
    } else {
        next(); // Allow access to the route
    }
});

export default router;
