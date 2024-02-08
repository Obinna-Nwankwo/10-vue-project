<template>
      <div class="m-auto">
      <h1 class="h1Text" >Igbo Names {{ nameCount }} </h1>
      <ul>
        <li  class="flex justify-between" v-for="(name, index) in Names"  :key="name.name">
          <div class="">
              {{ name.name }} 
            </div>
              <button  @click="removeName(index)">x</button>
        </li>
      </ul>

      <form class="mt-10 "  @submit.prevent="addName">
        <input class="inputFiled"  v-model="newName"  placeholder="Please enter a name .....">
        <button  class="btn  bg-blue-500"  type ="submit">Add Name</button>
      </form>
      <small>Current list Names  : {{ nameCount }} </small>
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
        this.Names.push({name : this.newName });
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