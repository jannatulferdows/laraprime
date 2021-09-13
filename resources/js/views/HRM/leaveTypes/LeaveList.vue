<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">List of Leave Types</h2></div>
      <div>
        <button class="btn btn-success">
          <router-link
            to="/CreateLeaveType"
            style="text-decoration: none; color: #fff"
            >Add Leave type</router-link
          >
        </button>
      </div>
    </div>
    <DataTable
      :value="leaveType"
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
          <div class="p-mr-2"></div>
          <div class="p-mr-2">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />

              <InputText v-model="filters['global']" placeholder="Search" />
            </span>
          </div>
        </div>
      </template>
      <template #empty> No leave type found. </template>
      <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
            <Column
        field="name"
        header="Name"
        headerStyle="width: 200px"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
          />
        </template>
      </Column>
      <Column field="leaveCount" header="Leave Count" headerStyle="width: 200px" sortable>
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
          />
        </template>
      </Column>
      <Column field="leaveCountInterval" header="Leave Count Interval" headerStyle="width: 230px" sortable>
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
          />
        </template>
      </Column>
      <Column
        field="description"
        header="Description"
        headerStyle="width: 200px"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
          />
        </template>
      </Column>
      <Column
        field="status"
        header="Status"
        headerStyle="width: 200px"
        sortable
      >
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
        header="Actions"
        headerStyle="width: 200px"
      >
      </Column>
    </DataTable>
  </div>
</template>
<script>
export default {
  name: "LeaveTypeList",
  data() {
    return {
      selectedTypes: [],
      filters: {},
      editingRows: [],
       
      leaveType: [
        {
          id: "1",
         
          name: "Volksw",
          leaveCount: 2012,
          leaveCountInterval: "Orange",
          description: "dsad2f31ff",
          status: "dsad231ff",
         
        },
        {
          id: "2",
             name: "Volksw",
          leaveCount: 2012,
          leaveCountInterval: "Orange",
          description: "dsad2f31ff",
          status: "dsad231ff",
         
        },
        {
          id: "3",
           name: "Volksw",
          leaveCount: 2012,
          leaveCountInterval: "Orange",
          description: "dsad2f31ff",
          status: "dsad231ff",
         
        },
        {
          id: "4",
           name: "Volksw",
          leaveCount: 2012,
          leaveCountInterval: "Orange",
          description: "dsad2f31ff",
          status: "dsad231ff",
         
        },
        {
          id: "5",
            name: "Volksw",
          leaveCount: 2012,
          leaveCountInterval: "Orange",
          description: "dsad2f31ff",
          status: "dsad231ff",
         
        },
        {
          id: "6",
           name: "Volksw",
          leaveCount: 2012,
          leaveCountInterval: "Orange",
          description: "dsad2f31ff",
          status: "dsad231ff",
         
        },
      ],
      home: { icon: "pi pi-home", to: "/" },
      items: [
      
        { label: "HRM" },
        { label: "Leave Types" },
        { label: "Create Leave Type", to: "/CreateLeaveType" },
        { label: "Leave Type List", to: "/LeaveTypeList" },
      ],
    };
  },
};
</script>