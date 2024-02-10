<template>
  <div class="flex w-full  flex-wrap">
    <h1 class="h1Text  text-center  w-full">Markdown</h1>
    <section  class="flex  w-10/12  m-auto  h-screen  border">
    
      <article  class="w-1/2">
          <textarea class="size-full"  :value="rightText"  @input="update"></textarea>
      </article>

      <article  class="w-1/2  border  bg-gray-100"  v-html="markText">

      </article>

    </section>
  </div>
</template>

<script>
import  { marked } from  "marked";
import  debounce  from  "../utilities/mixins/debounce";

export default {
  mixins: [debounce],
  
   data (){
       return{
          rightText :  "",
    };
  },

  computed : {
    markText(){
      return marked(this.rightText);
    }
  },

  methods : {
       update(e){
            const  taks  = () => (this.rightText = e.target.value);
            this.debounce(taks, 500)
      },
  }
};
</script>

<style>

</style>