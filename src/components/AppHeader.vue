<template>
<nav class="w-full  bg-gradient-to-t from-blue-500 to-blue-400 text-white   flex justify-between  py-5  px-20 items-center  ">
<p>
    <router-link class="mx-2" v-for="item  in items"  :key="item.to"  :to="item.to" >{{ item.title}}</router-link>
 <!-- <span class="mx-2 " v-for="item  in items"  :key="item.to "  @click="openpage(item.to)">{{  item.title }}</span> -->
</p>
      <button class=" border rounded-lg  py-2  px-5  font-black  hover:bg-white  hover:text-blue-500 ">LogIn</button>
 </nav>

</template>

<script>
export default {
    data () {
      return {
         items : [
            {title : "Home",  to : "/"},
            {title : "Names",  to : "/igbo-names"},
            {title : "Calendar",  to : "/event-calendar"},
            {title : "Markdown",  to : "/mark-down"},
            {title : "Slider",  to : "/view-slider"},
         ]
      }
    },

   //  methods : {
   //    openpage(path){
   //       this.$router.push(path)
   //    }
   //  }
}
</script>

<style>

</style>