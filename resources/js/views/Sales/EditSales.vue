<template>
  <div>
    <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div class="ps-3 mx-2">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item mr-3"><a href="javascript:;"><i class="pi pi-home"></i></a>
                </li>
                <li class="breadcrumb-item mr-2"><a href="javascript:;">Sale</a>
                </li>
                <li class="breadcrumb-item mr-2"><a><router-link to="/SaleList" style=" text-decoration:none;">Sale List</router-link></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Edit Sale</li>
              </ol>
            </nav>
          </div>
        </div>
        <!--end breadcrumb-->

    <div class="card">
      <div class="p-d-flex card-header p-ai-center vertical-container bg-light p-jc-between">
        <h4 class=" mb-0">Edit Sale</h4>
          <router-link to="/SaleList" class="btn btn-success">List Sale</router-link>
      </div>

      <div class="card-body">
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-4 p-p-1">
            <span class="p-float-label">
              <Calendar id="sale_date" v-model="icon" :showIcon="true" />
              <label for="sale_date">Sale Date</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-p-1 p-">
            <span class="p-float-label">
              <Dropdown v-model="selectedSuplier" :options="suplier" optionLabel="name" />
              <label for="buyer_name">Customer Name</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-p-1 p-">
            <span class="p-float-label">
              <Dropdown v-model="selectedWarehouse" :options="warehouse" optionLabel="name" />
              <label for="warehouse">Warehouse</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-p-1 p-">
            <span class="p-float-label">
              <InputText id="reference_no" type="text" />
              <label for="reference_no">Reference No</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-p-1 p-">
            <span class="p-float-label">
              <InputText id="invoice_no" type="text" />
              <label for="invoice_no">Invoice No</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-p-1 p-">
            
            <span class="p-float-label">
              <Dropdown v-model="selectedSaleStatus" :options="saleStatus" optionLabel="saleStatus" />
              <label for="saleStatus">Sale Status</label>
            </span>
     
          </div>
          <div class="p-field p-col-12 p-md-4 p-p-1 p-">
            <span class="p-float-label">
      <Dropdown v-model="selectedPaymentStatus" :options="paymentStatus" optionLabel="paymentStatus" />
              <label for="paymentStatus">Payment Status</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-p-1 p-">
            <span class="p-float-label">
              <Dropdown v-model="selectedSaleBy" :options="saleBy" optionLabel="saleBy" />
              <label for="saleBy">Sale By</label>
            </span>
          </div>

          <div class="p-field p-col-12 p-md-4 p-p-1 p-">
            <span class="p-float-label">
              <InputText id="payment_status" type="text" />
              <label for="payment_status">Note</label>
            </span>
          </div>
        </div>

        <div style="background-color: #f8fafc">
          <table class="table">
            <tr>
              <th>Product Name</th>
              <th>Model</th>
              <th>Qty</th>
              <th>Discount</th>
              <th>Price</th>
              <th>Total Price</th>
              <th></th>
            </tr>
            <tr v-for="(sale, index) in sales" :key="index">
              <td style="width:25%;">
                <select v-model="sale.name" id="product_name" class="form-control">
                  <option selected disabled hidden>-- Select a Product --</option>
                  <option>Shirt</option>
                  <option>pant</option>
                </select>
              </td>

              <td style="width:20%;">
                <input v-model="sale.qty" type="text"  class="form-control" />
              </td>
              <td style="width:10%;">
                <input v-model="sale.qty" type="number"  class="form-control" />
              </td>

              <td style="width:10%;">
                <input v-model="sale.qty" type="number"  class="form-control" />
              </td>

              <td style="width:15%;">
                <input
                  v-model="sale.per_price"
                  type="number"
                  class="form-control"
                />
              </td>
              <td style="width:15%;">
                <input
                  v-model="sale.total_price"
                  type="number"
                  class="form-control"
                />
              </td>
              <td>
                <input
                  @click="remove(index)"
                  type="button"
                  value="-"
                  v-if="index != 0"
                  class="btn btn-danger"
                />
                <input
                  @click="add"
                  type="button"
                  v-if="index == 0"
                  value="+"
                  class="btn btn-success"
                />
              </td>
            </tr>
          </table>
        </div>

        <div class="row">
          <div class="col-7">
            <label for="note"><b>Note</b></label>
            <textarea id="note" rows="5" class="form-control"></textarea>

            <label for="note" class="p-mt-3"><b>Terms And Condition</b></label>
            <textarea id="note" rows="5" class="form-control"></textarea>
            <button class="btn btn-success p-mt-3">Save</button>
          </div>
           <div class="col-5">
              <table class="table">
                  <tr>
                      <th>Sale Discount:</th>
                      <td><InputNumber v-model="sale_discount" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Total Tax:</th>
                      <td><InputNumber v-model="sale_discount" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Shipping cost:</th>
                      <td><InputNumber v-model="sale_discount" class="p-inputtext-sm" /></td>
                  </tr>
                  <tr>
                      <th>Sub Total:</th>
                      <td><InputNumber v-model="sale_discount" class="p-inputtext-sm" /></td>
                  </tr>
                  <tr>
                      <th>Grand Total</th>
                      <td><InputNumber v-model="sale_discount" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Paid Amount</th>
                      <td><InputNumber v-model="sale_discount" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Due Amount</th>
                      <td><InputNumber v-model="sale_discount" class="p-inputtext-sm"/></td>
                  </tr>
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";

export default {
  name: "Createsale",
  components: {
    Textarea,
    Calendar,
    Dropdown,
    InputNumber
  },
  data() {
    return {
      total_price: null,
      subtotal_price: null,
      total_quantity: null,
      total_product: null,
      sale_discount: null,
      total_discount: null,
      total_tax: null,
      shipping_cost: null,
      grand_total: null,
      privious: null,
      net_total: null,
      paid_amount: null,
      due: null,
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Base" },
        { label: "List sale", to: "/list-sale" },
        { label: "Create sale" }
      ],
      sales: [
        {
          name: "",
          qty: "",
          per_price: "",
          total_price: ""
        }
      ],
      icon: null,
           selectedWarehouse: null,
      warehouse: [
        { name: "Kawsar Ahmed", code: "NY" },
        { name: "Rafiqul Islam", code: "RM" }
      ],
      selectedSuplier: null,
      suplier: [
        { name: "Kawsar Ahmed", code: "NY" },
        { name: "Rafiqul Islam", code: "RM" }
      ],
      selectedSaleStatus: null,
      saleStatus: [
        { saleStatus: "Dhaka Division", code: "NY" },
        { saleStatus: "Khulna Division", code: "RM" }
      ],
        selectedPaymentStatus: null,
      paymentStatus: [
        { paymentStatus: "Dhaka Division", code: "NY" },
        { paymentStatus: "Khulna Division", code: "RM" }
      ],
            selectedSaleBy: null,
      saleBy: [
        { saleBy: "Dhaka Division", code: "NY" },
        { saleBy: "Khulna Division", code: "RM" }
      ],
      
      
    };
  },
  methods: {
    add() {
      this.sales.push({
        name: "",
        qty: "",
        per_price: "",
        total_price: ""
      });
    },
    remove(index) {
      this.sales.splice(index, 1);
      if (index === 0) {
        this.add();
      }
    }
  }
};
</script>