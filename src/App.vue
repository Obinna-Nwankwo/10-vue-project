<template>
  <AppHeader />

  <div class="w-full  flex">
     <router-view></router-view>  
  </div>

  <viewLogIn  />
  
</template>

<script>
import  AppHeader  from  "./components/AppHeader.vue";
import  viewLogIn  from   "./components/viewLogIn.vue"

export default  {
  components: {
     AppHeader,  
     viewLogIn,
     },
};
</script>

<style>

</style>