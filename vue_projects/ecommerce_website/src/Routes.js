import {createWebHistory, createRouter} from 'vue-router'
import MainHome from './components/MainHome.vue'
import MainProd from './components/MainProd.vue'
import MainContact from './components/MainContact.vue'


const routes = [
    {
        name: 'MainHome',
        path: '/',
        component: MainHome
    },
    {
        name: 'MainProd',
        path: '/product', 
        component: MainProd
    },
    {
        name: 'MainContact',
        path: '/contact', 
        component: MainContact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;