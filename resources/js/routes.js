import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue')
const About = () => import('./views/About.vue')
const CreateDesignation = () => import('./views/designations/CreateDesignation.vue')
const demo = () => import('./views/demo/demo.vue')
const sp_details = () => import('./views/Suppliers/Supplier_details.vue')
const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/create-designation',
        name: 'CreateDesignation',
        component: CreateDesignation
    },
    {
        path: '/demo',
        name: 'demo',
        component: demo
    },

    {
        path: '/sp_details',
        name: 'sp_details',
        component: sp_details
    },

]

export default new VueRouter({ routes });


