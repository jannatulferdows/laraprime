<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <br>
    <!-- <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">Duty Type List</h2></div>
      <div><h2 class="title ">Add Duty Type</h2></div>
    </div> -->
       <div  >
     <Card >
    
      <template #content>
        <form action="">
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-12">
              <h2 class="title ">Add Salary Type</h2>
              <label for="title"> <strong> Title</strong></label> <br />
              <InputText
                type="text"
                v-model="value"
                placeholder="Enter Title"
              />
            </div>
            <div class="p-field p-col-12 p-md-6">
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
  </div> <br>
    <div class="p-grid">
       <div  class="p-field p-col-12 p-md-12">
      <DataTable
      class="p-datatable-striped"
      :value="salaryTypes"
      :selection.sync="selectedTypes"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 20]"
      :filters="filters"
      :scrollable="true"
      editMode="row"
      dataKey="id"
      :editingRows.sync="editingRows"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <template #header>
        
        <div class="table-header p-d-flex p-jc-between">
         
          <div class="p-mr-2">
            <h2 class="title">Salary Type List</h2>
          </div>
          <div class="p-mr-2">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />

              <InputText v-model="filters['global']" placeholder="Search" />
            </span>
          </div>
        </div>
      </template>
      <template #empty> No salary type found. </template>
      <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
      <Column field="title" header="Title" headerStyle="width:350px" sortable>
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
          />
        </template>
      </Column>
         <Column field="status" header="Status" headerStyle="width:350px" sortable>
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
          />
        </template>
      </Column>
      <Column
        :rowEditor="true"
        field="Action"
        header="Action"
        headerStyle="width:350px"
      >
      </Column>
    </DataTable>
    </div>
 
   
  </div>
   
  </div>
</template>

<script>
import MultiSelect from "primevue/multiselect";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
export default {
  name: "SalaryType",
  components: {
    MultiSelect,
    InputNumber,
    Calendar,
    Checkbox,
  },

  data() {
    return {
      value: null,
      status: true,
      selectedTypes: [],
      filters: {},
      editingRows: [],
      salaryTypes:[
       {id: "1",
        title: "Volksw",
        status: "as"
       },
        {id: "2",
        title: "Volksw",
        status: "as"
       },
        {id: "3",
        title: "Volksw",
        status: "as"
       },
        {id: "4",
        title: "Volksw",
        status: "as"
       },
        {id: "5",
        title: "Volksw",
        status: "as"
       },
        {id: "6",
        title: "Volksw",
        status: "as"
       },
        {id: "7",
        title: "Volksw",
        status: "as"
       },
        {id: "8",
        title: "Volksw",
        status: "as"
       },
        {id: "9",
        title: "Volksw",
        status: "as"
       },
        {id: "10",
        title: "Volksw",
        status: "as"
       },
      ],
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM" },
        { label: "Salary Types" },
        { label: "Salary Type", to: "/SalaryType" },
      ],
    };
  },
};
</script>
