import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateCustomer = () => import('./views/CRM/customers/CreateCustomer.vue');
const CustomerList = () => import('./views/CRM/customers/CustomerList.vue');
const EditCustomer = () => import('./views/CRM/customers/EditCustomer.vue');
const CreateShift = () => import('./views/HRM/shifts/CreateShift.vue');
const EditShift = () => import('./views/HRM/shifts/EditShift.vue');
const ShiftList = () => import('./views/HRM/shifts/ShiftList.vue');
const DutyType = () => import('./views/HRM/dutyTypes/DutyTypes.vue');
const EditDutyType = () => import('./views/HRM/dutyTypes/EditDutyType.vue');
const SalaryType = () => import('./views/HRM/salaryTypes/SalaryTypes.vue');
const EditSalaryType = () => import('./views/HRM/salaryTypes/EditSalaryType.vue');
const CreateSales = () => import('./views/Sales/CreateSales.vue');
const SaleList = () => import('./views/Sales/SaleList.vue');
const SaleInvoice = () => import('./views/Sales/SaleInvoice.vue');
const CreateSupplier = () => import('./views/Suppliers/CreateSupplier.vue');
const SupplierList = () => import('./views/Suppliers/SupplierList.vue');
const EditSupplier = () => import('./views/Suppliers/EditSupplier.vue');



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
    {
        path: '/CreateSupplier',
        name: 'CreateSupplier',
        component: CreateSupplier
    },
    {
        path: '/EditSupplier',
        name: 'EditSupplier',
        component: EditSupplier
    },
    {
        path: '/SupplierList',
        name: 'SupplierList',
        component: SupplierList
    },
    {
        path: '/CreateShift',
        name: 'CreateShift',
        component: CreateShift
    },
    {
        path: '/EditShift',
        name: 'EditShift',
        component: EditShift
    },
    {
        path: '/ShiftList',
        name: 'ShiftList',
        component: ShiftList
    },
    {
        path: '/DutyType',
        name: 'DutyType',
        component: DutyType
    },
    {
        path: '/EditDutyType',
        name: 'EditDutyType',
        component: EditDutyType
    },
    {
        path: '/SalaryType',
        name: 'SalaryType',
        component: SalaryType
    },
    {
        path: '/EditSalaryType',
        name: 'EditSalaryType',
        component: EditSalaryType
    },
    {
        path: '/CreateSales',
        name: 'CreateSales',
        component: CreateSales
    },
    {
        path: '/SaleList',
        name: 'SaleList',
        component: SaleList
    },
    
    {
        path: '/SaleInvoice',
        name: 'SaleInvoice',
        component: SaleInvoice
    },
    
]

export default new VueRouter({
    // mode: 'history',
    routes
});


