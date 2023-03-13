<template>
  <div class="container">
    <div class="clock">
      <p class="date">
        <span id="date">{{ dateDom }}</span>
        <span id="week">{{ weekDom }}</span>
      </p>
      <p class="time">
        <span id="time">
          {{ timeDom }}
        </span>
      </p>
    </div>
    <div class="back" @click="backPage">退出沉浸模式</div>
  </div>
  
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'
let weekArr = ['星期日','星期一','星期二','星期三','星期四','星期五', '星期六']
// 加0
function addZero(num: number) {
  if(num >= 10) {
    return num
  } else {
    return '0' + num
  }
}

let dateDom = ref('2022-12-01')
let weekDom = ref('星期四')
let timeDom = ref('18:00:00')

//更新时间
function updateTime() {
  let now = new Date()
  let date = now.getFullYear() + '-' + addZero(now.getMonth() + 1) + '-' + addZero(now.getDate())
  let week = weekArr[now.getDay()]
  let time = addZero(now.getHours()) + ':' + addZero(now.getMinutes()) + ':' + addZero(now.getSeconds())
  dateDom.value = String(date)
  weekDom.value = String(week)
  timeDom.value = String(time)
}

//返回 
const backPage = () => {
  window.location.href = '/#/'
}
setInterval(updateTime, 1000)
updateTime()

onUnmounted(() => {
  console.log('组价卸载')
})
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  position: sticky;
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000,70%);
  background-size: 100%;
}
p {
  margin: 0;
  padding: 0;
}
.clock {
  text-align: center;
  padding-top: 150px;
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6;
}
.time {
  font-size: 100px;
  padding: 5px 0;
  letter-spacing: 5px;
}
.date {
  letter-spacing: 2px;
  font-size: 30px;
}
.back {
  text-shadow: 0 0 20px #0aafe6;
  color: #daf6ff;
  cursor: pointer;
}
</style>