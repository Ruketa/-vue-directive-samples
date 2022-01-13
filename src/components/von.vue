<template>
  <div>
    <h1>v-on</h1>
    <div class="hstack"> 
      <button class="hstack-item" @click="incrementA">incrementA</button> 
      <button class="hstack-item" @click="resetA">resetA</button> 
      <p class="hstack-item">countA : {{countA}}</p>
    </div>
    <div class="hstack"> 
      <button class="hstack-item" @click="incrementB">incrementB</button> 
      <button class="hstack-item" @click="resetB">resetB</button> 
      <p class="hstack-item">countB : {{countB}}</p>
    </div>
    <div class="hstack"> 
      <button class="hstack-item" @click="incrementA(), incrementB()">incrementBoth</button> 
      <p class="hstack-item">SUM : {{countA + countB}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "vif",
  setup() {
    const countA = ref(0);
    const countB = ref(0);
    const incrementA = () => countA.value++;
    const resetA = () => countA.value = 0;
    const incrementB = () => countB.value++;
    const resetB = () => countB.value = 0;
    return { countA, countB, incrementA, incrementB, resetA, resetB };
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
