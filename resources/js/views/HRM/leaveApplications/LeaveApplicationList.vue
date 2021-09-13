<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
      <br>
    <div>
    <card >
      <template #content>
      <div class="p-mb-0 "><h2 class="title">Filter Options</h2></div>
        <div class="p-fluid p-formgrid p-grid ">
            <div class="p-field p-col-12 p-md-5 p-mt-3 p-pt-0 p-pl-0 p-pb-0 ">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedEmployee"
                  :options="employee"
                  optionLabel="employee"
                  id="employee"
                />
                <label for="employee"><strong>Employee Name</strong></label>
              </span>
            </div>
                  <div class="p-field p-col-12 p-md-5 p-mt-3 p-pt-0 p-pl-0 p-pb-0">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedType"
                  :options="leaveTypes"
                  optionLabel="leaveTypes"
                  id="leaveTypes"
                />
                <label for="leaveTypes"><strong>Leave Type</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-2 p-mt-2">
               <Button type="submit" class="btn btn-success">Filter</Button>
            </div>
            </div>
      </template>
    </card>
    </div>
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">List of Leave Applications</h2></div>
      <div>
        <button class="btn btn-success">
          <router-link
            to="/CreateLeaveApplication"
            style="text-decoration: none; color: #fff"
            >Add Leave Application</router-link
          >
        </button>
      </div>
    </div>
    <DataTable
      :value="applicationList"
      :selection.sync="selectedApplication"
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
      <template #empty> No shifts found. </template>
      <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
      <Column
        field="name"
        header="Employee Name"
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
        field="leaveType"
        header="Leave Type"
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
        field="startDate"
        header="Start Date"
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
        field="endDate"
        header="End Date"
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
        field="leaveReason"
        header="Leave Reason"
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
        field="refPerson"
        header="Reference Person"
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
        field="applicationDate"
        header="Application Date"
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
        field="approveBy"
        header="Approve By"
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
  name: "LeaveApplicationList",
  data() {
    return {
      selectedApplication: [],
      filters: {},
      editingRows: [],
       selectedType: null,
      leaveTypes: [
        { leaveTypes: "New York", code: "NY" },
        { leaveTypes: "Rome", code: "RM" },
        { leaveTypes: "London", code: "LDN" },
        { leaveTypes: "Istanbul", code: "IST" },
        { leaveTypes: "Paris", code: "PRS" },
      ],
      selectedEmployee: null,
      employee: [
        { employee: "New York", code: "NY" },
        { employee: "Rome", code: "RM" },
        { employee: "London", code: "LDN" },
        { employee: "Istanbul", code: "IST" },
        { employee: "Paris", code: "PRS" },
      ],
      applicationList: [
        {
          id: "1",
          name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "2",
          name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "3",
           name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "4",
           name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "5",
           name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "6",
         name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "7",
          name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "8",
          name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "9",
          name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "10",
          name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
        {
          id: "11",
           name: "Volksw",
          leaveType: 2012,
          startDate: "Orange",
          endDate: "dsad2f31ff",
          leaveReason: "dsad231ff",
          refPerson: "dsad231ff",
          applicationDate:"sads",
          approveBy:"sdfasf",
         status: "dsad231ff",
        },
      ],
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM" },
        { label: "Leave Applications" },
        { label: "Create Leave Application", to: "/CreateLeaveApplication" },
        { label: "Leave Application List", to: "/LeaveApplicationList" },
      ],
    };
  },
};
</script>