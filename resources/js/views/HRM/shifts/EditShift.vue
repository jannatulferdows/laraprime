<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">Edit Shift</h2></div>
      <div>
        <button class="btn btn-success">
          <router-link
            to="/ShiftList"
            style="text-decoration: none; color: #fff"
            >Shift List</router-link
          >
        </button>
      </div>
    </div>
    <Card>
      <template #content>
      <form action="">
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <InputText type="text" v-model="title" id="title" />
                <label for="title"> <strong> Title</strong></label>
              </span>
            </div>

            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedShift"
                  :options="shifts"
                  optionLabel="shift"
                  id="shiftType"
                />
                <label for="shiftType"><strong>Shift Type</strong></label>
              </span>
            </div>

            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Calendar v-model="startDate" id="startDate" />
                <label for="startDate"><strong>Start Date</strong></label>
              </span>
            </div>

            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Calendar v-model="endDate" id="endDate" />
                <label for="endDate"><strong>End Date</strong></label>
              </span>
            </div>

            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <MultiSelect
                  v-model="selectedBranch"
                  :options="branches"
                  optionLabel="branches"
                  id="contactPerson"
                />
                <label for="contactPerson"><strong>Branch Name</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-1 p-mt-2 p-mt-2 ">
              <div class="p-d-flex">
                <Checkbox v-model="status" :binary="true" />
                <label for="status" class="p-ml-3">
                  <strong v-if="status" class="p-pt-1">Active</strong>
                  <strong v-else class="p-pt-1">Inactive</strong>
                </label>
              </div>
            </div>
              <div class=" p-col-12 p-md-2 p-ml-5 p-pl-0">
            <Button type="submit" class="btn btn-success">Save Changes</Button>
          </div>
          </div>
        
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
import MultiSelect from "primevue/multiselect";
import Checkbox from 'primevue/checkbox';
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
export default {
  name: "EditShift",
  components: {
    MultiSelect,
    InputNumber,
    Calendar,
    Checkbox,
  },

  data() {
    return {
      selectedShift: null,
      value: null,
       status: true,
        title:null,
      startDate:null,
      endDate:null,
      shifts: [
        { shift: "New York", code: "NY" },
        { shift: "Rome", code: "RM" },
        { shift: "London", code: "LDN" },
        { shift: "Istanbul", code: "IST" },
        { shift: "Paris", code: "PRS" },
      ],
      selectedBranch: null,
      branches: [
        { branches: "New York", code: "NY" },
        { branches: "Rome", code: "RM" },
        { branches: "London", code: "LDN" },
        { branches: "Istanbul", code: "IST" },
        { branches: "Paris", code: "PRS" },
      ],
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM" },
        { label: "Shifts" },
        { label: "Shift List", to: "/ShiftList" },
        { label: "Edit Shift", to: "/CreateShift" },
      ],
    };
  },
};
</script>
