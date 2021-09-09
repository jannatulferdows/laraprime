<template>
  <div>
    <Card>
     
 
   
      <template #content>
               <div>
          <div class="p-d-flex p-jc-between">
            <div>
            <i class="pi pi-send text-primary"  style="font-size:30px;"></i>
            </div>
            <div>
              <h3 style="text-align: end">Invoice-123456</h3>
              <h5 style="text-align: end">9 september 2021</h5>
            </div>
          </div>
          <hr>
          </div>
        <div class="p-grid">
          <div class="p-col-12 p-md-4">
            <h3>From:Dynofy</h3>
            <h5>fdsg</h5>
            <h5>fdsg</h5>
            <h5>fdsg</h5>
            <h5>fdsg</h5>
            <h5>fdsg</h5>
          </div>
          <div class="p-col-12 p-md-4">
            <h3>To:Dynofy</h3>
            <h5>aaaaaaaa</h5>
            <h5>aaaaaaaa</h5>
            <h5>aaaaaaaa</h5>
            <h5>aaaaaaaa</h5>
            <h5>aaaaaaaa</h5>
          </div>
          <div class="p-col-12 p-md-4">
            <h3>Payment Details</h3>
            <h5>llllll</h5>
            <h5>llllll</h5>
            <h5>llllll</h5>
            <h5>llllll</h5>
            <h5>llllll</h5>
          </div>
        </div>
        <DataTable :value="saleInvoice" class="p-datatable-striped" >
          <Column field="num" header="#" headerStyle="width: 50px"></Column>
          <Column field="item" header="Item"></Column>
          <Column field="quantity" header="Quantity" headerStyle="width: 150px"></Column>
          <Column field="unitPrice" header="Unit Price" headerStyle="width: 150px"></Column>
          <Column field="totalPrice" header="Total Price" headerStyle="width: 150px"></Column>

      </DataTable>
        <div class="p-grid p-mt-2">
          <div class="p-field p-col-12 p-md-8">
            <div>
              <h3>Thank you!</h3>
            </div>
            <div>
             
              <button class=" pi pi-print btn btn-success " style="width:150px; height:50px;"> Print Invoice</button>
              <button class="pi pi-envelope btn btn-danger" style="width:150px; height:50px;"> Mail Invoice</button>
            </div>
          </div>
          <div class="p-field p-col-12 p-md-4" >
            <table style="float: right;">
              <tr>
                <td>Subtotal</td>
                <td>: $1019</td>
              </tr>
              <tr>
                <td>Discount(10%)</td>
                <td>: $101</td>
              </tr>
              <tr>
                <td>Vat(8%)</td>
                <td>: $80</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>: $991</td>
              </tr>
            </table>
            <!-- <div style="text-align: end"><h4>Subtotal: $1019</h4></div>
            <div style="text-align: end"><h4>Discount(10%): $101</h4></div>
            <div style="text-align: end"><h4>Vat(8%): $80</h4></div>
            <div style="text-align: end"><h4>Total: $991</h4></div> -->
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import Button from 'primevue/button';
export default {
  name: "SaleInvoice",
  data() {
    return {
       components: {
       Button,
 
  },
      selectedsales: [],
      filters: {},
      editingRows: [],
      saleInvoice: [
        {
          num: "1",
          item: "zx",
          quantity: "asfsfhsdfhth",
          unitPrice: "sdsrhdhdshg",
          totalPrice: "sdg",
        },
        {
          num: "1",
          item: "zx",
          quantity: "asf",
          unitPrice: "sdg",
          totalPrice: "sdg",
        },
        {
          num: "1",
          item: "zx",
          quantity: "asf",
          unitPrice: "sdg",
          totalPrice: "sdg",
        },
        {

          num: "1",
          item: "zx",
          quantity: "asf",
          unitPrice: "sdg",
          totalPrice: "sdg",
        },
        {
          num: "1",
          item: "zx",
          quantity: "asf",
          unitPrice: "sdg",
          totalPrice: "sdg",
        },
        {
          num: "1",
          item: "zx",
          quantity: "asf",
          unitPrice: "sdg",
          totalPrice: "sdg",
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