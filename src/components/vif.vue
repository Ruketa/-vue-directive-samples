<template>
  <div>
    <h1>v-if</h1>
    <div class="hstack"> 
      <button class="hstack-item" @click="increment">increment</button> 
      <p class="hstack-item">count : {{count}}</p>
      <p v-if="count == 0" class="hstack-item">ZERO</p>
      <p v-else-if="isEven" class="hstack-item">EVEN</p>
      <p v-else class="hstack-item">ODD</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Directives",
  setup() {
    const count = ref(0);
    const isEven = ref(false);
    const increment = () =>{
      count.value++;
      if(count.value % 2 == 0){
        isEven.value = true;
      }
      else{
        isEven.value = false;
      }
    }
    return { count, isEven, increment };
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
