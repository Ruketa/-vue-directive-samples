<template>
  <div>
    <h1>v-model</h1>
    <div class="hstack"> 
      <h3>Text</h3>
      <input type="text" v-model="message" placeholder="edit me"/>
      <p>Message is {{message}}</p>
    </div>
    <div class="hstack"> 
      <h3>CountUp</h3>
      <input type="number" v-model="count"/>
      <p>Count is {{count}}</p>
    </div>
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "vmodel",
  setup() {
    const message = ref<string>("");
    const count = ref<number>(0);
    const checkedNames = ref<Array<string>>([]);
    setInterval(() => {
      count.value++;
      if(count.value > 100){
        count.value = 0;
      }
    }, 1000);
    return { message, count, checkedNames };
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
