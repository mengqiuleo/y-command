<template>
  <div>{{ output }}</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps(), {dest: ''})
let output = ref('')

const startTime = new Date().getTime()

const pingFun = async () => {
  await Promise.race([
    new Promise(function (_, reject) {
      console.log('123')
      setTimeout(() => reject(new Error('timeout')), 3000)
    }),
    fetch(props.dest, { mode: 'no-cors', cache: 'reload' }),
  ])
  .then((resp: any) => {
      if (resp.ok || resp.status == 200 || resp.type == 'opaque') {
        console.log('res', resp)
        const finishTime = new Date().getTime()
        output.value = `目标地址正常，延迟=${(finishTime - startTime).toString()}ms`
      } else {
        output.value = `ping 不通！`
      }
    })
    .catch(error => {
      console.log("error", error)
      output.value = `ping 不通！`
    })
}
onMounted(() => {
  pingFun()
})
</script>
