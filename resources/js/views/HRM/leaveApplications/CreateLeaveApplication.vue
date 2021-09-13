<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">Add Leave Application</h2></div>
      <div>
        <button class="btn btn-success">
          <router-link
            to="/LeaveApplicationList"
            style="text-decoration: none; color: #fff"
            >Leave Application List</router-link
          >
        </button>
      </div>
    </div>
    <Card>
      <template #content>
        <form action="">
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedEmployee"
                  :options="employeeName"
                  optionLabel="employeeName"
                  id="employeeName"
                />
                <label for="employeeName"><strong>Employee Name</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedLeaveType"
                  :options="leaveType"
                  optionLabel="leaveType"
                  id="leaveType"
                />
                <label for="leaveType"><strong>Leave Type</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Calendar v-model="startDate" id="startDate" />
                <label for="startDate"><strong>Start Date</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Calendar v-model="endDate" id="endDate" />
                <label for="endDate"><strong>End Date</strong></label>
              </span>
            </div>
              <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedPerson"
                  :options="refPerson"
                  optionLabel="refPerson"
                  id="refPerson"
                />
                <label for="refPerson"><strong>Reference Person</strong></label>
              </span>
              <br>
               <span class="p-float-label">
                <Dropdown
                  v-model="selectedApprove"
                  :options="approveBy"
                  optionLabel="approveBy"
                  id="approveBy"
                />
                <label for="approveBy"><strong>Approve By</strong></label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Textarea v-model="leaveReason" rows="5" cols="60" id="leaveReason" />
                <label for="leaveReason"><strong>Leave Reason</strong></label>
              </span>
            </div>
          

            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Calendar v-model="value" id="applicationDate" />
                <label for="applicationDate"
                  ><strong>Application Date</strong></label
                >
              </span>
            </div>
           

            <div class="p-field p-col-12 p-md-6 p-mt-2">
              <span class="p-float-label">
                <Dropdown
                  v-model="selectedStatus"
                  :options="status"
                  optionLabel="status"
                  id="status"
                />
                <label for="status"><strong>status</strong></label>
              </span>
            </div>
          </div>
          <div>
            <Button type="submit" class="btn btn-success">Save</Button>
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
import Textarea from "primevue/textarea";
import MultiSelect from "primevue/multiselect";
import Password from "primevue/password";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
export default {
  name: "CreateLeaveApplication",
  components: {
    Textarea,
    MultiSelect,
    Password,
    InputNumber,
    Calendar,
  },

  data() {
    return {
    
      value: null,
      startDate: null,
      endDate:null,
        selectedEmployee: null,
        leaveReason:null,
      employeeName: [
        { employeeName: "New York", code: "NY" },
        { employeeName: "Rome", code: "RM" },
        { employeeName: "London", code: "LDN" },
        { employeeName: "Istanbul", code: "IST" },
        { employeeName: "Paris", code: "PRS" },
      ],
      selectedLeaveType: null,
      leaveType: [
        { leaveType: "New York", code: "NY" },
        { leaveType: "Rome", code: "RM" },
        { leaveType: "London", code: "LDN" },
        { leaveType: "Istanbul", code: "IST" },
        { leaveType: "Paris", code: "PRS" },
      ],
      selectedPerson: null,
      refPerson: [
        { refPerson: "New York", code: "NY" },
        { refPerson: "Rome", code: "RM" },
        { refPerson: "London", code: "LDN" },
        { refPerson: "Istanbul", code: "IST" },
        { refPerson: "Paris", code: "PRS" },
      ],
      selectedApprove: null,
      approveBy: [
        { approveBy: "New York", code: "NY" },
        { approveBy: "Rome", code: "RM" },
        { approveBy: "London", code: "LDN" },
        { approveBy: "Istanbul", code: "IST" },
        { approveBy: "Paris", code: "PRS" },
      ],
      selectedStatus: null,
      status: [
        { status: "New York", code: "NY" },
        { status: "Rome", code: "RM" },
        { status: "London", code: "LDN" },
        { status: "Istanbul", code: "IST" },
        { status: "Paris", code: "PRS" },
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
    { label: "Leave Applications" },
        { label: "Leave Application List", to: "/LeaveApplicationList" },
        { label: "Create Leave Application", to: "/CreateLeaveApplication" },
      ],
    };
  },
};
</script>
