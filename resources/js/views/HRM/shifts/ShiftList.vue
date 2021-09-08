<template>
    <div >
        <Breadcrumb :home="home" :model="items" />
         <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">List of Shifts</h2></div>
       <div><button class="btn btn-success"><router-link to="/CreateShift" style=" text-decoration:none; color: #fff">Add Shift</router-link></button></div>
      
    </div>
        <DataTable :value="shifts"  :selection.sync="selectedShifts" :paginator="true" :rows="10"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[5,10,20]"  :filters="filters" :scrollable="true"
    editMode="row" dataKey="id" :editingRows.sync="editingRows"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
    
    <template #header>
      
        <div class="table-header p-d-flex p-jc-between" >
        <div class="p-mr-2"></div>
          <div class="p-mr-2">  <span class="p-input-icon-left">
                <i class="pi pi-search"/>
                     
                <InputText v-model="filters['global']" placeholder="Search" />
            </span>
            </div>
        </div>
    </template>
        <template #empty>
        No shifts found.
    </template>
            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
            <Column field="title" header="Title" headerStyle="width: 200px" sortable >
             <template #editor="slotProps">
                <InputText  style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="shiftType" header="Shift Type" headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText  style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="startTime" header="Start Time"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="endTime" header="End Time"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="branch" header="Branch"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="status" header="Status"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column :rowEditor="true" field="Action" header="Actions"  headerStyle="width: 200px" >
            </Column>
    

        </DataTable>
    </div>
</template>
<script>
export default {
    name:"ShiftList",
       data() {
        return {
            selectedShifts:[],
             filters: {},
             editingRows: [],
            "shifts": [
        {"id":"1","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"2","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"3","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"4","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"5","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"6","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"7","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"8","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"9","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"10","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         {"id":"11","title": "Volksw", "shiftType": 2012, "startTime": "Orange",
        "endTime": "dsad2f31ff", "branch": "dsad231ff",
        "status": "dsad231ff"},
         
        
        
        
          
      
    ],
    home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'HRM'},
                {label: 'Shifts'},
                {label: 'Create Shift', to: '/CreateShift'},
                {label: 'Shift List', to: '/ShiftList'}
            ]
        }
    },
}
</script>