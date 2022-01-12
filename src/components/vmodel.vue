<template>
  <div>
    <h1>v-bind</h1>
    <div class="hstack"> 
      <button class="hstack-item" @click="increment">increment</button> 
      <button class="hstack-item" @click="reset">reset</button> 
      <input type="number" v-bind:value="count"/>
      <div :style="{fontSize: count + 'pt'}">
        <p>v-bind test message</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "vbind",
  setup() {
    let count = ref(0);
    const increment = () => count.value++;
    const reset = () => count.value= 0;
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
