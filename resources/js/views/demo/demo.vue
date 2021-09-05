<template #content>
    <div>

  <Card #content>
      <h2 class="title">Add Supplier Details</h2>
      <Toast position="bottom-right" />

      <form >
        <div class="form-group p-mt-3">
          <span class="p-float-label">
            <InputText id="name" type="text"  style="width:100%"/>
            <label for="name">Name</label>
          </span>
        </div>
        <div class="form-group p-mt-3">
          <span class="p-float-label">
            <Textarea v-model="value" rows="5" cols="30" style="width:100%" />
            <label for="description">Description</label>
          </span>
        </div>

      

        <Button type="submit"> Submit
        </Button>
      </form>
    </Card>

    </div>
</template>

<script>
export default {
    name:"demo"
}
</script>

