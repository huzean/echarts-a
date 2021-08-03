<template>
  <div>
      <Monitorcar :list= list color='#F85E1F'></Monitorcar>
  </div>
</template>

<script>
import Monitorcar from './modules01.vue'
export default {
      components:{
        Monitorcar,
      
    },
data(){
    return{
 list:[
            {name:"访问量" , color: '#F85E1F'},
            {name:"访问量"},
        ]
    }
  
} ,
 methods: {
        
    },
}
</script>

<style>

</style>