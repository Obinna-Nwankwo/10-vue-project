<template>
    <div class="m-auto">
      <h1  class="h1Text">Event  Calendar</h1>
    
        <section  class="flex  justify-between">
            <h3 class="font-bold">{{ currentMonthName }}</h3>
            <h3 class="font-bold">{{ currentYear }}</h3>
        </section>

        <section  class="flex">
            <p class="--width-wrap  text-center "  v-for="day in days "  :key="day">{{ day }}</p>
        </section>

        <section  class="flex  flex-wrap">
          <p class="--width-wrap  text-center"   v-for="num in  startDay() "  :key="num"></p>
          <p class="--width-wrap  text-center"   v-for="num in  daysInMonth() "  :key="num"  :class="currentDateClass(num)">{{ num }}</p>
        </section>

        <section class="flex justify-between">
             <button  class="btn"  @click="prev()">Prev</button>
             <button class="btn"  @click="next()">Next</button>
        </section>

    </div>
</template>

<script>
export default {
  data(){
    return {
      currentDate : new Date().getUTCDate(),
      currentMonth : new Date().getMonth(),
      currentYear  :  new Date().getFullYear(),

      days : [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ]
    }
  },

  methods :  {
    daysInMonth (){
        return new Date(this.currentYear,   this.currentMonth + 1,  0).getDate();
    },

    startDay(){
      return new Date(
        this.currentYear,  this.currentMonth,  1 ).getDay();
    },

    next(){
      if  (this.currentMonth  ===  11) {
        this.currentMonth  =  0;
        this.currentYear  ++;
      } else {
      return this.currentMonth ++;
      }
    },

    prev(){
      if  (this.currentMonth  ===  0) {
        this.currentMonth  = 11;
        this.currentYear -- ;
      } else {
      return  this.currentMonth --;
      }
    },

    currentDateClass(num) {
      const  calenderFullDate  =  new Date(this.currentYear,  this.currentMonth,  num).toDateString();
      const currentDate  =  new Date().toDateString();

      return  calenderFullDate   ===  currentDate ?  "text-green-300 " :  "";
      }
  },

  computed : {
    currentMonthName () {
      return new Date(this.currentYear, this.currentMonth).toLocaleString("defualt", {month : "long"});
    }
  }

};
</script>

<style>


</style>