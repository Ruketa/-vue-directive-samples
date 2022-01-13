<template>
  <div>
    <h1>v-show</h1>
    <div class="hstack"> 
      <button class="hstack-item" @click="increment">increment</button> 
      <p class="hstack-item">count : {{count}}</p>
      <p v-show="isshow" class="hstack-item">VSHOW</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Directives",
  setup() {
    const count = ref(0);
    const isshow = ref(false);
    const increment = () =>{
      count.value++;
      if(count.value % 2 == 0){
        isshow.value = true;
      }
      else{
        isshow.value = false;
      }
    }
    return { count, isshow, increment };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hstack{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.hstack-item{
  margin: 10px;
}

</style>
