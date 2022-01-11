<template>
  <div>
    <h1>CompositionApi</h1>
  </div>
  <div>
    <p>plainCount is {{ plainCount }} </p>
    <p>countRef is {{ countRef}} || count2Ref is {{ count2Ref }} || sum is {{refSum()}}</p>
    <p>reactiveObj.count is {{ reactiveObj.count }} || reactiveObj.count2 is {{ reactiveObj.count2 }} </p>
    <p>countComp is {{ countRef }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCompositionApi  } from "@/components/hooks/usecompositionapi"

// ※ reactive.vueと処理は同じ
export default defineComponent({
  name: "compositionapi",
  setup() {
    const compositionApi = useCompositionApi()

    return compositionApi
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
