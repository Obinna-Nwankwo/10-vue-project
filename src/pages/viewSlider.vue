<template>
   <div class="flex flex-wrap w-full">
      <div class="absolute w-full"   v-for="(slider,  index)  in  slidersColor"  :key="slider">
        <Transition name="slide-fade">
            <div class="h-96"  :class="slider"   v-if="currentSlider  === index"></div>
        </Transition>
    </div>
      <div  class="relative  w-full  h-80">
        <div class="absolute  bottom-0 w-full flex justify-center">
          <div @click="makeActive(index)"   :class="currentSlider  ===  index ? 'bg-gray-700' : 'bg-gray-300' "   v-for="(item, index)   in  slidersColor"  :key="item"  class="size-4 mx-2  rounded-full  cursor-pointer  shadow-lg"  ></div>
      </div>
      </div>
   </div>
</template>

<script>
export default {
  data(){
    return{
      currentSlider : 0,
      interval : "",
      slidersColor : ["bg-red-900",  "bg-green-900",  "bg-blue-900"],
    }
  },

  mounted() {
    this.interval = setInterval(() => {
      if (this.currentSlider  ===  2){
        this.currentSlider = 0;
      }else {
        this.currentSlider++;
      }
    }, 1000);
  },

  unmounted(){
      clearInterval(this.interval);
    },

    methods:{
      makeActive(index){
        this.currentSlider = index;
      }
    },
};
</script>

<style>
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 1.5s ease ;
}


.slide-fade-enter-from{
  transition-delay: 2s ease;
  transform: translateX(-100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  transition-delay: all 2s ease;
  opacity: 0;
}
</style>