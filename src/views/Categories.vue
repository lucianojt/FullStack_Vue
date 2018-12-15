<template>
  <div>
    <h1>Categories List</h1>
    <b-table striped hover :items="categories" :fields="fields" :per-page = "pageSize" :current-page = "pageIndex"></b-table>
    <b-pagination size="md" :total-rows="categories.length" v-model="pageIndex" :per-page="pageSize">
    </b-pagination>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'categories',
  
  data(){
      return{
          message:'project2',
          categories: [],
          pageSize: 10,
          pageIndex: 1,
          fields: [{
            key:'category_id',
            sortable : true,
            variant: 'Secondary'
          },
          {
            key:'category_name',
            sortable : true,
            variant: 'Secondary'
          },
          {
            key:'description',
            sortable : true,
            variant: 'Secondary'
          }]
      }
  },
  
  mounted(){
      var instance = this
      axios
      .get('https://finalfull2018.herokuapp.com/api/categories')
      .then(function(response){
          console.log(response.data)
          instance.categories = response.data.data
      })
    }
}
</script>