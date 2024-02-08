<template>
  <div class="w-full  flex">
    <div class="m-auto">
      <h1 class="text-center  font-black  text-2xl  mb-5" >Igbo Names {{ nameCount }} </h1>
      <ul>
        <li  class="flex justify-between" v-for="(name, index) in Names"  :key="name.name">
          <div class="">
              {{ name.name }} 
            </div>
              <button  @click="removeName(index)">x</button>
        </li>
      </ul>

      <form class="mt-10 "  @submit.prevent="addName">
        <input class="border  rounded-lg"  v-model="newName"  placeholder="Please enter a name .....">
        <button  class="border rounded-md  bg-gradient-to-t from-green-400  to-black"  type ="submit">Add Name</button>
      </form>
      <small>Current list Names  : {{ nameCount }} </small>
    </div>
  </div>
  
</template>

<script>
export default {
  computed : {
    nameCount (){
    return this.Names.length;
    },
  },

  methods : {
    addName() {
      if (this.newName  !==  "") {
        this.Names.push({name : this.newName});
        this.newName  =  "";
      }
    },

    removeName(index) {
      this.Names  =  this.Names.filter((name,  i ) =>  i !== index);
      },
    },

    data() {
      return {
        newName:  "",

        Names : [
            {name : "Nwankwo"},
            {name : "Okeyafor"},
            {name : "Ngbeke"},
            {name : "ChukwuEbuka"}
      ],
    };
  },
};
</script>

<style>

</style>