import { reactive, Ref, ref, computed, WritableComputedRef} from "vue"

type useCompositionApiResult = {
  plainCount: number,
  countRef: Ref<number>;
  count2Ref: Ref<number>;
  reactiveObj: {count: number, count2: number},
  countComp: WritableComputedRef<any>,
  refSum: () => number 
}

export const useCompositionApi = (): useCompositionApiResult =>{
  let plainCount = 0
  // Refオブジェクトの生成
  const countRef = ref<number>(0);
  const count2Ref = ref<number>(0);
  const refSum = () => {
    return countRef.value + count2Ref.value
  }
  // Reactiveオブジェクトの生成
  const reactiveObj = reactive<{count:number, count2:number}>({
    count: 0,
    count2: plainCount // これはリアクティブにならない
  })
  // computedオブジェクトの生成
  let plainCount2 = 0
  const countComp = computed<any>({
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

  return { plainCount, countRef, count2Ref, reactiveObj, countComp, refSum };
}