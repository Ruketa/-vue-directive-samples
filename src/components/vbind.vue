<template>
  <div>
    <h1>v-bind</h1>
    <div class="hstack"> 
      <button class="hstack-item" @click="increment">increment</button> 
      <button class="hstack-item" @click="reset">reset</button> 
      <input type="number" v-bind:value="fontSize"/>
      <input type="number" v-bind:value="count"/>
    </div>
    <div :style="{fontSize: fontSize + 'pt'}">
      <p>v-bind test message</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "vbind",
  setup() {
    let count = ref(0);
    let fontSize = ref(0);
    const increment = () => fontSize.value++;
    const reset = () => fontSize.value= 0;
    setInterval(() => {
      count.value++;
      if(count.value > 100){
        count.value = 0;
      }
    }, 1000);
    return { count, fontSize, increment, reset };
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
