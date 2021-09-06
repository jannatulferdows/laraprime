import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateCustomer = () => import('./views/CRM/customers/CreateCustomer.vue');
const CustomerList = () => import('./views/CRM/customers/CustomerList.vue');
const EditCustomer = () => import('./views/CRM/customers/EditCustomer.vue');



const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
   
  
    {
        path: '/CreateCustomer',
        name: 'CreateCustomer',
        component: CreateCustomer
    },
    {
        path: '/EditCustomer',
        name: 'EditCustomer',
        component: EditCustomer
    },
    {
        path: '/CustomerList',
        name: 'CustomerList',
        component: CustomerList
    },

]

export default new VueRouter({
    // mode: 'history',
    routes
});


