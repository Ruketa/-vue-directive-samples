<template>
  <div>
    <h1>reactives</h1>
  </div>
  <div>
    <p>plain count is {{ plainCount }} </p>
    <p>ref count is {{ countRef}} || ref count2 is {{ count2Ref }} || sum is {{refSum()}}</p>
    <p>reactive object is {{ reactiveObj.count }} || reactive object2 is {{ reactiveObj.count2 }} </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

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
    }, 4000)

    return { plainCount, countRef, count2Ref, reactiveObj, refSum};
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
