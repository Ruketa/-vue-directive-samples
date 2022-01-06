<template>
  <div>
    <h1>v-on</h1>
    <p>click: increment the count value</p>
    <p>reset: set the count value to 0</p>
    <div class="hstack"> 
      <button class="hstack-item" @click="increment">increment</button> 
      <button class="hstack-item" @click="reset">reset</button> 
      <p class="hstack-item">count : {{count}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Directives",
  setup() {
    const count = ref(0);
    const increment = () => count.value++;
    const reset = () => count.value = 0;
    return { count, increment, reset };
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
