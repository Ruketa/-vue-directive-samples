<template>
  <div>
    <h1>reactives</h1>
  </div>
  <div>
    <p>plainCount is {{ plainCount }} </p>
    <p>countRef is {{ countRef}} || count2Ref is {{ count2Ref }} || sum is {{refSum()}}</p>
    <p>reactiveObj.count is {{ reactiveObj.count }} || reactiveObj.count2 is {{ reactiveObj.count2 }} </p>
    <p>countComp is {{ countRef }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";

export default defineComponent({
  name: "reactives",
  setup() {
    let plainCount= 0
    // Refオブジェクトの生成
    const countRef = ref(0);
    const count2Ref = ref(0);
    const refSum = () => {
      return countRef.value + count2Ref.value
    }
    // Reactiveオブジェクトの生成
    const reactiveObj =  reactive({
        count: 0, 
        count2: plainCount // これはリアクティブにならない
      })
    // computedオブジェクトの生成
    let plainCount2 = 0
    const countComp = computed({
      get: () => plainCount2,
      set: (val: number) => plainCount2 = val
    }) 

    // 定期的なインクリメント
    // 2S毎
    setInterval(() => {
      // 通常の値はリアクティブではない
      plainCount++
      console.log("plain count is : " + plainCount)
      // Refオブジェクトには .valueで値にアクセスする
      countRef.value++
      // Reactiveオブジェクト
      reactiveObj.count++
    }, 2000)
    // 4S毎
    setInterval(() => {
      // Refオブジェクトには .valueで値にアクセスする
      count2Ref.value++
      countComp.value++
    }, 4000)

    return { plainCount, countRef, count2Ref, reactiveObj, countComp, refSum};
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
