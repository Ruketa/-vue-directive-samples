<template>
  <div>
    <h1>v-for</h1>
    <div> 
      <div>
        <h3>numberArr</h3>
      </div>
      <div class="hstack">
        <div v-for="num in numberArr" :key="num">
          <p class="card">{{ num }}</p>
        </div>
      </div>
    </div>
    <div class="vstack"> 
      <h3>keyVal</h3>
      <div v-for="(key, val) in keyVal" :key="key">
        key={{ key }}: value={{ val }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Directives",
  setup() {
    const numberArr = [1,2,3,4,5,6,7,8]
    const keyVal = ref({
      height: 163,
      weight: 54,
      name: "kurihara",
    });
    const nestedKeyVal = ref({
      height: 163,
      weight: 54,
      name: "kurihara",
      address: {
        city: "Okayama",
        street: "kozushuku",
        zip: "7038212",
      },
    });
    return { numberArr, keyVal, nestedKeyVal };
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

.vstack{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hstack-item{
  margin: 10px;
}

.card{
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
}
</style>
