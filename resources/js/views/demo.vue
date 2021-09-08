<template>
  <div>
   
   <div class="p-field p-col-12 p-md-6" v-for="(item,a) in items" :key="a">
            

            <input type="text" v-model="item.name"  placeholder="Enter BIN No." />
            <div class="p-field p-col-12 p-md-6">
            <label for="creditLimit"><strong>Credit Limit</strong></label> <br />
            <input type="number" v-model="item.limit" placeholder="Enter Credit Limit" :useGrouping="false" />
          </div>
            <button @click="remove(a)">-</button>
    </div>
          
  </div>
 
</template>


<script>
export default {
name:'demo',
    data() {
        return {
            items:[
                {name:'a',
                limit:'',
                },
               

            ]
        }
    },

    methods: {
        add(){
            this.items.push({name:''})
        },
        remove(b){
            this.items.splice(b,1)
        }
    },
}
</script>