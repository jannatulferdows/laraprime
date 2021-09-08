<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">Edit Salary Type</h2></div>
      <div>
        <button class="btn btn-success">
          <router-link
            to="/SalaryType"
            style="text-decoration: none; color: #fff"
            >Salary Type List</router-link
          >
        </button>
      </div>
    </div>
    <Card>
      <template #content>
        <form action="">
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-12">
            
              <label for="title"> <strong> Title</strong></label> <br />
              <InputText
                type="text"
                v-model="value"
                placeholder="Enter Title"
              />
            </div>
            <div class="p-field p-col-12 p-md-6">
              <Checkbox v-model="status" :binary="true" />
              <label for="status">
                <strong v-if="status">Active</strong>
                <strong v-else>Inactive</strong>
              </label>
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
  name: "EditSalaryType",
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
        { label: "Salary Types" },
        { label: "Salary Type List", to: "/SalaryType" },
        { label: "Edit Salary Type", to: "/EditSalaryType" },
      ],
    };
  },
};
</script>
