<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <br />
    <div>
      <Card class="p-p-1">
        <template #content>
          <div class="p-mb-0"><h2 class="title">Filter Options</h2></div>
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-6 p-mt-3 p-pt-0 p-pl-0 p-pb-0">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedBranch"
                  :options="branch"
                  optionLabel="branch"
                  id="branch"
                />
                <label for="branch"><strong>Branch</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-3 p-pt-0 p-pl-0 p-pb-0">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedWarehouse"
                  :options="warehouse"
                  optionLabel="warehouse"
                  id="warehouse"
                />
                <label for="warehouse"
                  ><strong>Warehouse</strong></label
                >
              </span>
            </div>
                <div class="p-field p-col-12 p-md-6 p-mt-3 p-pt-0 p-pl-0 p-pb-0">
              <span class="p-float-label">
                <Calendar v-model="fromDate" id="fromDate" />
                <label for="fromDate"><strong>From Date</strong></label>
              </span>
            </div>
                  <div class="p-field p-col-12 p-md-6 p-mt-3 p-pt-0 p-pl-0 p-pb-0">
              <span class="p-float-label">
                <Calendar v-model="toDate" id="toDate" />
                <label for="toDate"><strong>To Date</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-2 p-mt-2">
              <Button type="submit" class="btn btn-success">Filter</Button>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">List of Sells</h2></div>
      <div>
        <button class="btn btn-success">
          <router-link
            to="/CreateSales"
            style="text-decoration: none; color: #fff"
            >Add Sale</router-link
          >
        </button>
      </div>
    </div>
    <DataTable
      :value="sales"
      :selection.sync="selectedSales"
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
            <i class="pi pi-book"></i>
          </div>
          <div class="p-mr-2">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />

              <InputText v-model="filters['global']" placeholder="Search" />
            </span>
          </div>
        </div>
      </template>
      <template #empty> No sales found. </template>
      <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
      <Column
        field="invoiceNumber"
        header="Invoice No."
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
        field="date"
        header="Sell Date"
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
      <Column field="name" header="Name" headerStyle="width: 200px" sortable>
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
          />
        </template>
      </Column>
      <Column
        field="warehouse"
        header="Warehouse"
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
        field="refNumber"
        header="Reference No."
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
        field="salesStatus"
        header="Sales Status"
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
        field="paymentStatus"
        header="Payment Status"
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
        field="salesBy"
        header="Sales By"
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
        field="totalProduct"
        header="Total Product"
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
        field="totalQuantity"
        header="Total Quantity"
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
        field="subtotalPrice"
        header="Subtotal Price"
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
        field="totalPrice"
        header="Total Price"
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
        field="Actions"
        header="Actions"
        headerStyle="width: 200px"
      >
      </Column>
    </DataTable>
  </div>
</template>
<script>
import Calendar from "primevue/calendar";
export default {
  name: "SaleList",
   components: {
  
    Calendar,
  },
  data() {
    return {
      selectedSales: [],
      filters: {},
      editingRows: [],
        selectedBranch: null,
      branch: [
        { branch: "New York", code: "NY" },
        { branch: "Rome", code: "RM" },
        { branch: "London", code: "LDN" },
        { branch: "Istanbul", code: "IST" },
        { branch: "Paris", code: "PRS" },
      ],
        selectedWarehouse: null,
      warehouse: [
        { warehouse: "New York", code: "NY" },
        { warehouse: "Rome", code: "RM" },
        { warehouse: "London", code: "LDN" },
        { warehouse: "Istanbul", code: "IST" },
        { warehouse: "Paris", code: "PRS" },
      ],
      fromDate:null,
      toDate:null,
      sales: [
        {
          id: "1",
          date: "images/color.png",
          name: "Volksw",
          warehouse: 2012,
          refNumber: "Orange",
          invoiceNumber: "dsad2f31ff",
          salesStatus: "dsad231ff",
          paymentStatus: "dsad231ff",
          salesBy: "dsad231ff",
          note: "dsad231ff",
          totalProduct: "dsad231ff",
          totalQuantity: "dsad231ff",
          subtotalPrice: "dsad231ff",
          totalPrice: "dsad231ff",
        },
        {
          id: "2",
          date: "images/color.png",
          name: "Volksw",
          warehouse: 2012,
          refNumber: "Orange",
          invoiceNumber: "dsad2f31ff",
          salesStatus: "dsad231ff",
          paymentStatus: "dsad231ff",
          salesBy: "dsad231ff",
          note: "dsad231ff",
          totalProduct: "dsad231ff",
          totalQuantity: "dsad231ff",
          subtotalPrice: "dsad231ff",
          totalPrice: "dsad231ff",
        },
        {
          id: "3",
          date: "images/color.png",
          name: "Volksw",
          warehouse: 2012,
          refNumber: "Orange",
          invoiceNumber: "dsad2f31ff",
          salesStatus: "dsad231ff",
          paymentStatus: "dsad231ff",
          salesBy: "dsad231ff",
          note: "dsad231ff",
          totalProduct: "dsad231ff",
          totalQuantity: "dsad231ff",
          subtotalPrice: "dsad231ff",
          totalPrice: "dsad231ff",
        },
        {
          id: "4",
          date: "images/color.png",
          name: "Volksw",
          warehouse: 2012,
          refNumber: "Orange",
          invoiceNumber: "dsad2f31ff",
          salesStatus: "dsad231ff",
          paymentStatus: "dsad231ff",
          salesBy: "dsad231ff",
          note: "dsad231ff",
          totalProduct: "dsad231ff",
          totalQuantity: "dsad231ff",
          subtotalPrice: "dsad231ff",
          totalPrice: "dsad231ff",
        },
        {
          id: "5",
          date: "images/color.png",
          name: "Volksw",
          warehouse: 2012,
          refNumber: "Orange",
          invoiceNumber: "dsad2f31ff",
          salesStatus: "dsad231ff",
          paymentStatus: "dsad231ff",
          salesBy: "dsad231ff",
          note: "dsad231ff",
          totalProduct: "dsad231ff",
          totalQuantity: "dsad231ff",
          subtotalPrice: "dsad231ff",
          totalPrice: "dsad231ff",
        },
        {
          id: "6",
          date: "images/color.png",
          name: "Volksw",
          warehouse: 2012,
          refNumber: "Orange",
          invoiceNumber: "dsad2f31ff",
          salesStatus: "dsad231ff",
          paymentStatus: "dsad231ff",
          salesBy: "dsad231ff",
          note: "dsad231ff",
          totalProduct: "dsad231ff",
          totalQuantity: "dsad231ff",
          subtotalPrice: "dsad231ff",
          totalPrice: "dsad231ff",
        },
      ],
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Sales" },
        { label: "Create Sales", to: "/CreateSales" },
        { label: "Sales List", to: "/SaleList" },
      ],
    };
  },
};
</script>