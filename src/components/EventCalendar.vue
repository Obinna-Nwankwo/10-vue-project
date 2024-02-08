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
          <p class="--width-wrap  text-center"   v-for="num in  daysInMonth(currentYear,  currentMonth) "  :key="num">{{ num }}</p>
        </section>

    </div>
</template>

<script>
export default {
  data(){
    return {
      currentMonth : new Date().getMonth()  +  1,
      currentMonthName :  new Date().toLocaleDateString("defualt", {month: "long"}),
      
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
    daysInMonth (year,  month){
        return new Date(year,   month,  0).getDate();
    },

    startDay(){
      return new Date(
        this.currentYear,  this.currentMonth
      ).getDay();
    }
  },

};
</script>

<style>


</style>