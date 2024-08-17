import {createRouter, createWebHistory} from 'vue-router';
import LogIn from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import Dashboard from '@/views/Dashboard.vue';
import KilimoAI from "@/views/KilimoAI.vue";
import FarmingPlanner from "@/views/FarmingPlanner.vue";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/views/Home.vue'), // Create a Home.vue for the landing page
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
    },
    {
        path: '/kilimoai',
        name: 'KilimoAI',
        component: KilimoAI,
    },
    {
        path: '/farming-planner',
        name: 'farming-planner',
        component: FarmingPlanner,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
