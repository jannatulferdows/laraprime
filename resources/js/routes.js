import VueRouter from 'vue-router';
<<<<<<< HEAD
const Welcome = () => import('./views/Welcome.vue')
const About = () => import('./views/About.vue')
const CreateDesignation = () => import('./views/designations/CreateDesignation.vue')
const demo = () => import('./views/demo/demo.vue')
const sp_details = () => import('./views/Suppliers/Supplier_details.vue')
=======
const Welcome = () => import('./views/Welcome.vue');
const About = () => import('./views/About.vue');
const CreateDesignation = () => import('./views/designations/CreateDesignation.vue');
const CreateCustomer = () => import('./views/customers/CreateCustomer.vue');
const From = () => import('./views/forms/Form.vue');


>>>>>>> 4550f40a474e97ea194e311d1ed800b1bbe0b370
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
<<<<<<< HEAD
        path: '/demo',
        name: 'demo',
        component: demo
    },

    {
        path: '/sp_details',
        name: 'sp_details',
        component: sp_details
=======
        path: '/create-customer/:id',
        name: 'CreateCustomer',
        component: CreateCustomer
    },
    {
        path: '/form',
        name: 'Form',
        component: From
>>>>>>> 4550f40a474e97ea194e311d1ed800b1bbe0b370
    },

]

export default new VueRouter({
    mode: 'history',
    routes
});


