<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">Add Shift</h2></div>
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
            <div class="p-field p-col-12 p-md-6">
              <label for="title"> <strong> Title</strong></label> <br />
              <InputText
                type="text"
                v-model="value"
                placeholder="Enter Title"
              />
            </div>

            <div class="p-field p-col-12 p-md-6">
              <label for="shiftType"><strong>Shift Type</strong></label> <br />
              <Dropdown
                v-model="selectedShift"
                :options="shifts"
                optionLabel="shift"
                placeholder="Select Shift Type"
              />
            </div>

            <div class="p-field p-col-12 p-md-6">
              <label for="startDate"><strong>Start Date</strong></label> <br />
              <Calendar v-model="value" placeholder="Enter Start Date" />
            </div>

            <div class="p-field p-col-12 p-md-6">
              <label for="endDate"><strong>End Date</strong></label> <br />
              <Calendar v-model="value" placeholder="Enter End Date" />
            </div>

            <div class="p-field p-col-12 p-md-6">
              <label for="contactPerson"><strong>Branch Name</strong></label>
              <br />
              <MultiSelect
                v-model="selectedBranch"
                :options="branches"
                optionLabel="branches"
                placeholder="Select Branch Name"
              />
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-6">
               <div class="p-d-flex">
              <Checkbox v-model="status" :binary="true" />
              <label for="status" class="p-ml-3">
                <strong v-if="status" class="p-pt-1">Active</strong>
                <strong v-else class="p-pt-1">Inactive</strong>
              </label>
              </div>

            </div>
           
          </div>
          <div>
            <Button type="submit" class="btn btn-success">Create</Button>
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
  name: "CreateShift",
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
        { label: "Create Shift", to: "/CreateShift" },
      ],
    };
  },
};
</script>
