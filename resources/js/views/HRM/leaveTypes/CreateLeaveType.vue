<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">Add Leave Type</h2></div>
      <div>
        <button class="btn btn-success">
          <router-link
            to="/LeaveTypeList"
            style="text-decoration: none; color: #fff"
            >Leave Type List</router-link
          >
        </button>
      </div>
    </div>
    <Card>
      <template #content>
        <form action="">
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-4 p-mt-2 p-mb-0">
              <span class="p-float-label">
                <InputText type="text" v-model="name" id="name" />
                <label for="name"> <strong>Name</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-4 p-mt-2 p-mb-0">
              <span class="p-float-label">
                <InputNumber v-model="leaveCount" />
                <label for="leaveCount"><strong>Leave Count</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-4 p-mt-2 p-mb-0">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedCounts"
                  :options="leaveCounts"
                  optionLabel="leaveCounts"
                />

                <label for="leaveCounts"
                  ><strong>Leave Count Interval</strong></label
                >
              </span>
            </div>
            
            <div class="p-ml-4">
              <span class="p-float-label ">
                <Textarea
                  v-model="description"
                  rows="5"
                  cols="117"
                  id="description"
                />
                <label for="description"><strong>Description</strong></label>
              </span>
            </div>
 
            <div class="p-field p-col-12 p-md-6 p-mt-1 p-ml-3">
              <label for="status"><strong>Status</strong></label>
              <div class="p-field-radiobutton">
                <RadioButton
                  inputId="status1"
                  name="status"
                  value="Active"
                  v-model="status"
                />
                <label for="status1">Active</label>
              </div>
              <div class="p-field-radiobutton">
                <RadioButton
                  inputId="status2"
                  name="status"
                  value="Deactive"
                  v-model="status"
                />
                <label for="status1">Deactive</label>
              </div>
            </div>
          </div>
          <div>
            <Button type="submit" class="btn btn-success">Save</Button>
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
import MultiSelect from "primevue/multiselect";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
import RadioButton from "primevue/radiobutton";
import Textarea from "primevue/textarea";
export default {
  name: "CreateLeaveType",
  components: {
    MultiSelect,
    InputNumber,
    Calendar,
    Checkbox,
    RadioButton,
    Textarea,
  },

  data() {
    return {
       value: null,
      status: null,
      name:null,
      leaveCount:null,
      description:null,
      selectedCounts: null,
      leaveCounts: [
        { leaveCounts: "New York", code: "NY" },
        { leaveCounts: "Rome", code: "RM" },
        { leaveCounts: "London", code: "LDN" },
        { leaveCounts: "Istanbul", code: "IST" },
        { leaveCounts: "Paris", code: "PRS" },
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
        { label: "Leave Types" },
        { label: "Leave Type List", to: "/LeaveTypeList" },
        { label: "Create Leave Type", to: "/CreateLeaveType" },
      ],
    };
  },
};
</script>
