<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
     <div class="p-d-flex p-jc-between p-mt-4 p-mb-2 ">
      <div><h2 class="title">Edit Supplier</h2></div>
      <div><button class="btn btn-success"><router-link to="/SupplierList" style=" text-decoration:none; color: #fff">Supplier List</router-link></button></div>
    </div>
    <Card >
      <template #content>
         <form action="">
        <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <InputText type="text" v-model="name" id="name" />
                <label for="name"> <strong> Name</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <InputText type="email" v-model="email" id="email" />
                <label for="email"><strong>Email</strong></label> <br />
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedCompany"
                  :options="companies"
                  optionLabel="name"
                  id="companyName"
                />
                <label for="companyName"><strong>Company Name</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedDesignation"
                  :options="designations"
                  optionLabel="designation"
                />
                <label for="selectedDesignation"
                  ><strong>Designation</strong></label
                >
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Calendar v-model="regDate" id="regDate" />
                <label for="regDate"><strong>Registration Date</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <InputText type="number" v-model="pNumber" id="pNumber" />
                <label for="pNumber"><strong>Phone Number</strong></label>
              </span>
            </div>

            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <MultiSelect
                  v-model="selectedPerson"
                  :options="persons"
                  optionLabel="persons"
                  id="contactPerson"
                />
                <label for="contactPerson"
                  ><strong>Contact Person</strong></label
                >
              </span>
              <br />
              <span class="p-float-label">
                <InputText type="text" v-model="refPerson" id="refPerson" />
                <label for="refPerson"><strong>Reference Person</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Textarea v-model="address" rows="5" cols="60" id="address" />
                <label for="address"><strong>Address</strong></label>
              </span>
            </div>
            <!-- <div class="p-field p-col-12 p-md-6 p-mt-2">
              <label for="refPerson">Reference Person</label> <br />
              <InputText
                type="text"
                v-model="value"
                placeholder="Enter Reference Person"
              />
            </div> -->
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Calendar v-model="birthDate" id="birthDate" />
                <label for="birthDate"><strong>Date of Birth</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
               <span class="p-float-label">
             
              <Dropdown
                v-model="selectedCategory"
                :options="clientCategories"
                optionLabel="category"
              id="clientCategory"
              />
               <label for="clientCategory"
                ><strong>Client Category</strong></label
              >
            </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
                <span class="p-float-label">
            
           
              <Dropdown
                v-model="selectedParent"
                :options="parentClients"
                optionLabel="parentClients"
             id="parentClient"
              />
              <label for="parentClient"><strong>Parent Client</strong></label>
              </span>
            </div>

            <div class="p-field p-col-12 p-md-6 p-mt-2">
                <span class="p-float-label">
              
              <InputNumber
                v-model="dNumber"
          id="dNumber"

              />
              <label for="dNumber"><strong>Discount</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
            
              <InputNumber v-model="credit" id="credit" />
                <label for="credit"><strong>Credit Tx</strong></label> 
            </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
             
              <InputNumber v-model="Return" id="return" />
               <label for="Return"><strong>Return No</strong></label>
               </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
               <span class="p-float-label">
              
              <InputNumber v-model="tin" id="tin" />
              <label for="tin"><strong>TIN No</strong></label> 
            </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
              
              <InputNumber v-model="bin" id="bin" />
              <label for="bin"><strong>BIN No</strong></label> 
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
                  <span class="p-float-label">

          
              <InputNumber
                v-model="creditLimit"
                :useGrouping="false"
                id="creditLimit"
              />
              <label for="creditLimit"><strong>Credit Limit</strong></label>
            </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
                <span class="p-float-label">
          
              <Dropdown
                v-model="selectedBranch"
                :options="branches"
                optionLabel="branches"
               id="parentClient"
              />
                  <label for="parentClient"><strong>Branch</strong></label>
                  </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
            
              <InputText
                type="password"
                v-model="password"
               id="password"
              />
                <label for="password"><strong>Password</strong></label>
                </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
                <span class="p-float-label">
              
              <InputText
                type="password"
                v-model="cPassword"
                id="cPassword"
              />
              <label for="cPassword"><strong>Confirm Password</strong></label>
            </span>
            </div>
          </div>
        <div>
          <Button type="submit" class="btn btn-success">Save Changes</Button>
        </div>
      </form>
      </template>
    </Card>
  </div>
</template>

<script>
import Textarea from "primevue/textarea";
import MultiSelect from "primevue/multiselect";
import Password from "primevue/password";
import InputNumber from "primevue/inputnumber";
import Calendar from 'primevue/calendar';
export default {
  name: "EditSupplier",
  components: {
    Textarea,
    MultiSelect,
    Password,
    InputNumber,
    Calendar,
  },

  data() {
    return {
      selectedCompany: null,
       value: null,
        name:null,
       email:null,
       regDate:null,
       pNumber:null,
       refPerson:null,
       address:null,
       birthDate:null,
       dNumber:null,
       credit:null,
       Return:null,
       tin:null,
       bin:null,
       creditLimit:null,
       password:null,
       cPassword:null,
      companies: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      selectedDesignation: null,
      designations: [
        { designation: "New York", code: "NY" },
        { designation: "Rome", code: "RM" },
        { designation: "London", code: "LDN" },
        { designation: "Istanbul", code: "IST" },
        { designation: "Paris", code: "PRS" },
      ],
      selectedCategory: null,
      clientCategories: [
        { category: "New York", code: "NY" },
        { category: "Rome", code: "RM" },
        { category: "London", code: "LDN" },
        { category: "Istanbul", code: "IST" },
        { category: "Paris", code: "PRS" },
      ],
      selectedParent: null,
      parentClients: [
        { parentClients: "New York", code: "NY" },
        { parentClients: "Rome", code: "RM" },
        { parentClients: "London", code: "LDN" },
        { parentClients: "Istanbul", code: "IST" },
        { parentClients: "Paris", code: "PRS" },
      ],
      selectedPerson: null,
      persons: [
        { persons: "New York", code: "NY" },
        { persons: "Rome", code: "RM" },
        { persons: "London", code: "LDN" },
        { persons: "Istanbul", code: "IST" },
        { persons: "Paris", code: "PRS" },
      ],
      selectedBranch: null,
      branches: [
        { branches: "New York", code: "NY" },
        { branches: "Rome", code: "RM" },
        { branches: "London", code: "LDN" },
        { branches: "Istanbul", code: "IST" },
        { branches: "Paris", code: "PRS" },
      ],
       home: {icon: 'pi pi-home', to: '/'},
            items: [
          
                {label: 'Suppliers'},
                {label: 'Supplier List', to: '/SupplierList'},
                {label: 'Edit Supplier' , to: '/EditSupplier'}
            ]
    };
  },
};
</script>
