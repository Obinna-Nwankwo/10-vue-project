<template>
  <AppHeader />

  <div class="w-full  flex">
      <EventCalendar  />
  </div>
  
</template>

<script>
import AppHeader  from  "./components/AppHeader.vue";
/* import IgboNames  from  "./components/IgboNames.vue";*/
import  EventCalendar  from  "./components/EventCalendar.vue";


export default {
  components : {
    AppHeader, 
    EventCalendar,
     },
};
</script>

<style>
  .inputFiled{@apply ring-1 shadow-sm appearance-none focus:outline-none  rounded-md  leading-6 text-sm py-1  pl-5  focus:ring-blue-400 focus:ring-2 }
  .btn{@apply hover:bg-blue-400  text-sm  font-medium rounded-full text-white  shadow-sm  py-2  px-5 ml-2}

</style>