<template>
  <div>
      <DataTable :value="sp_details" :paginator="true" :filters="filters"  :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[2,10,20,50]"  responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
            :selection.sync="selectedSupplier" editMode="cell">
    <template #header>
        <div style="text-align: right">
            <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
            <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
        </div>
    </template>
       <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
    <Column field="id" header="ID" sortable>
    <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
    </Column>
    <Column field="name" header="NAME" sortable>
    <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
    </Column>
    <Column field="description" header="DESCRIPTION" sortable>
    <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
    </Column>
    <Column field="creted_at" header="CREATED_AT" sortable>
    <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
    </Column>
    <Column field="updated_at" header="UPDATED_AT" sortable>
    <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
    </Column>
</DataTable>
  </div>
</template>

<script>
export default {
    name: 'sp_details',
    data() {
        return {
            filters: {},
            sp_details:[
                {id:1,name:"Jannat",description:"Hello World",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"thdbhJannat",description:"ghmgh,m World",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"aeyJantjaenat",description:"HfzdfjnWorld",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"Jtjftjnat",description:"Hdzjxftj",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"dsgJannat",description:"Helxfjdzjdfzxjd",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"Jannat",description:"Hello World",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"thdbhJannat",description:"ghmgh,m World",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"aeyJantjaenat",description:"HfzdfjnWorld",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"Jtjftjnat",description:"Hdzjxftj",creted_at:"05-12-2010",updated_at:"09-04-2021"},
                {id:1,name:"drthdrhJannat",description:"Helxfjdzjdfzxjd",creted_at:"05-12-2010",updated_at:"09-04-2021"}
          ],
        selectedSupplier:[]
        }
    },
   
};
</script>
