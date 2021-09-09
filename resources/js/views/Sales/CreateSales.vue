<template>
  <div>
      <Breadcrumb :home="home" :model="itemsh" />
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2" >
      <div><h2 class="title">Add Sale</h2></div>
      <div><button class="btn btn-success"><router-link to="/SaleList" style=" text-decoration:none; color: #fff">Sale List</router-link></button></div>
    </div>
    <Card>
      <template #content>
        <form action="">
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-4 p-mb-0 p-pb-0">
              <label for="saleDate"><strong>Sell Date</strong></label> 
              <Calendar v-model="value" placeholder="Enter Sell Date"  />
            </div>
            <div class="p-field p-col-12 p-md-4 p-mb-0 p-pb-0">
              <label for="name"> <strong> Name</strong></label> <br />
              <InputText type="text" v-model="value" placeholder="Enter Name" />
            </div>
            <div class="p-col-12 p-md-4 p-mb-0 p-pb-0">
              <label for="warehouse"> <strong> Warehouse</strong></label> <br />
              <InputText
                type="text"
                v-model="value"
                placeholder="Enter Warehouse"
              />
            </div>
            <div class="p-col-12 p-md-4 p-mb-0 p-pb-0">
              <label for="refNo"><strong>Reference No</strong></label> <br />
              <InputNumber
                v-model="value"
                placeholder="Enter Reference Number"
              />
            </div>
            <div class="p-col-12 p-md-4 p-mb-0 p-pb-0 ">
              <label for="invoiceNo"><strong>Invoice No</strong></label> <br />
              <InputNumber v-model="value" placeholder="Enter Invoice Number" />
            </div>
            <div class="p-col-12 p-md-4 p-mb-0 p-pb-0">
              <label for="salesStatus"><strong>Sales Status</strong></label>
              <br />
              <Dropdown
                v-model="selectedStatus"
                :options="status"
                optionLabel="status"
                placeholder="Select Sales Status"
              />
            </div>
            <div class="p-col-12 p-md-4 p-mb-0 p-pb-0">
              <label for="paymentStatus"><strong>Payment Status</strong></label>
              <br />
              <Dropdown
                v-model="paymentStatus"
                :options="paymentStatus"
                optionLabel="paymentStatus"
                placeholder="Select Payment Status"
              />
            </div>
            <div class="p-field p-col-12 p-md-4 p-mb-0 p-pb-0 ">
              <label for="salesBy"><strong>Sales By</strong></label> <br />
              <Dropdown
                v-model="salesBy"
                :options="salesBy"
                optionLabel="salesBy"
                placeholder="Select Sales By"
              />
            </div>
            <div class="p-field p-col-12 p-md-4">
              <label for="note"> <strong>Note</strong></label> <br />
              <InputText type="text" v-model="value" placeholder="Enter Note" />
            </div>
            <div
              class="p-fluid p-formgrid p-grid bg-light  p-col-12 p-md-12"
              v-for="(item, a) in items"
              :key="a"
            >
            
              <div class="p-field p-col-12 p-md-3 p-pt-0">
                <label for="productName"> <strong>Product Name</strong></label>
                <br />
                <InputText
                  type="text"
                  v-model="item.productName"
                  placeholder="Enter Product Name"
                />
              </div>
              <div class="p-field p-col-12 p-md-2 p-pt-0">
                <label for="productModel"> <strong>Model</strong></label>
                <br />
                <InputText
                  type="text"
                  v-model="item.productModel"
                  placeholder="Product Model"
                />
              </div>
              <div class="p-field p-col-12 p-md-1 p-pt-0">
                <label for="qty"><strong>Qty</strong></label> <br />
                <InputNumber v-model="item.qty" placeholder="Quantity" />
              </div>
               <div class="p-field p-col-12 p-md-1 p-pt-0">
                <label for="discount"><strong>Discount</strong></label> <br />
                <InputNumber v-model="item.discount" placeholder="Discount" />
              </div>
                 <div class="p-field p-col-12 p-md-1 p-pt-0">
                <label for="tax"><strong>Tax</strong></label> <br />
                <InputNumber v-model="item.tax" placeholder="Tax" />
              </div>
              <div class="p-field p-col-12 p-md-1 p-pt-0">
                <label for="perPiece"><strong>1 Piece</strong></label> <br />
                <InputNumber
                  v-model="item.perPiece"
                  placeholder="Per Piece Price"
                />
              </div>
              <div class="p-field p-col-12 p-md-2 p-pt-0">
                <label for="totalPrice"><strong>Total Price</strong></label>
                <br />
                <InputNumber
                  v-model="item.totalPrice"
                  placeholder="Total Price"
                />
              </div>
            
              <div 
               class="p-field p-col-12 p-md-1 p-pt-5">
     
              <button @click="remove(a)" v-if="a!=0" class="btn btn-danger">-</button>

              </div>

            </div>
            <div class="p-field p-col-12">
              <button @click="add" class="btn btn-success" >+</button>
            </div>

            
            <!-- <div class="p-field p-col-12 p-md-12">
              <label for="notes"><strong>Note</strong></label> <br />
              <Textarea
                v-model="value"
              style="width:100%"
                placeholder="Leave Reason"
              />
            </div> -->
          </div>
          <div class="p-grid">
              <div class="p-col-5 p-offset-7">
                <div class="p-d-flex p-jc-between">
                  <label for="saleDiscount"><strong>Sale Discount</strong></label>
                  <InputNumber v-model="value" placeholder="Enter Sale Discount" class="" />
                </div>
              </div>
              <div class="p-col-5 p-offset-7">
              <div class="p-d-flex p-jc-between">
                <label for="totalDiscount"><strong>Total Discount</strong></label>
              <InputNumber v-model="value" placeholder="Enter Total Discount" class=""  />
              </div>
              </div>
                   <div class="p-col-5 p-offset-7">
                <div class="p-d-flex p-jc-between">
                <label for="totalTax"><strong>Total Tax  </strong></label>
              <InputNumber v-model="value" placeholder="Enter Total Tax" class="" />
              </div>
              </div>
              <div class="p-col-5 p-offset-7">
                <div class="p-d-flex p-jc-between">
                <label for="shippingCost"><strong>Shipping Cost</strong></label>
              <InputNumber v-model="value" placeholder="Enter Shipping Cost" class="" />
              </div>
              </div>
                   <div class="p-col-5 p-offset-7">
                     <div class="p-d-flex p-jc-between">
                <label for="grandTotal"><strong>Grand Total</strong></label>
              <InputNumber v-model="value" placeholder="Grand total" />
              </div>
              </div>
              <div class="p-col-5 p-offset-7">
                <div class="p-d-flex p-jc-between">
                 <label for="previous"><strong>Previous</strong></label>
              <InputNumber v-model="value" placeholder="Previous" />
              </div>
              </div>
                   <div class="p-col-5 p-offset-7">
                     <div class="p-d-flex p-jc-between">
                <label for="netTotal"><strong>Net Total</strong></label>
              <InputNumber v-model="value" placeholder="Net Total" />
              </div>
              </div>
              <div class="p-col-5 p-offset-7">
                <div class="p-d-flex p-jc-between">
                <label for="paidAmount"><strong>Paid Amount</strong></label>
              <InputNumber v-model="value" placeholder="Paid Amount" />
              </div>
              </div>
                   <div class="p-col-5 p-offset-7">
                     <div class="p-d-flex p-jc-between">
                 <label for="due"><strong>Due</strong></label>
              <InputNumber v-model="value" placeholder="Due" />
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
import Calendar from "primevue/calendar";
import InputNumber from "primevue/inputnumber";
export default {
  name: "SaleList",
  components: {
    Calendar,
    InputNumber,
  },
  data() {
    return {
       value: null,
      items: [{ productName: "", qty: "", perPiece: "", 
                totalPrice: "",productModel:"",tax:"",discount:"" }],
      selectedStatus: null,
      status: [
        { status: "New York", code: "NY" },
        { status: "Rome", code: "RM" },
        { status: "London", code: "LDN" },
        { status: "Istanbul", code: "IST" },
        { status: "Paris", code: "PRS" },
      ],
      paymentStatus: null,
      paymentStatus: [
        { paymentStatus: "New York", code: "NY" },
        { paymentStatus: "Rome", code: "RM" },
        { paymentStatus: "London", code: "LDN" },
        { paymentStatus: "Istanbul", code: "IST" },
        { paymentStatus: "Paris", code: "PRS" },
      ],
      salesBy: null,
      salesBy: [
        { salesBy: "New York", code: "NY" },
        { salesBy: "Rome", code: "RM" },
        { salesBy: "London", code: "LDN" },
        { salesBy: "Istanbul", code: "IST" },
        { salesBy: "Paris", code: "PRS" },
      ],
        home: {icon: 'pi pi-home', to: '/'},
            itemsh: [
              
                {label: 'Sales'},
                {label: 'Sale List', to: '/SaleList'},
                {label: 'Create Sale', to: '/CreateSales'}
            ]
    };
  },

  methods: {
    add() {
      this.items.push({ productName: "", qty: "", perPiece: "", totalPrice: ""
                        ,productModel: "",tax:"",discount:""
      });
    },
    remove(b) {
      this.items.splice(b, 1);
    },
  },
};
</script>