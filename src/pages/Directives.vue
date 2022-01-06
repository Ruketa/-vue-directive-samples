<template>
  <div>
    <von/>
    <vif/>
    <vshow/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import von  from "../components/von.vue";
import vif  from "../components/vif.vue";
import vshow  from "../components/vshow.vue";

export default defineComponent({
  name: "Directives",
  components: {
    von, vif, vshow
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

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
