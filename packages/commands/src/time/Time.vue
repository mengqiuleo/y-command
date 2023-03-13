<template>
  <div className="my-1" id="timeNode">
    <div v-if="isWorkDay() && nowHour < 18" style="color: #fff; font-color: #fff">
      <div className=" text-white -mb-2">距离下班：{{ changeDateFormat(endWork) }}</div>
    </div>
    <p v-else className="mb-1">下班时间，该学习啦~</p>
    <div class="container">
      <div v-if="nowWeak <= 5" style="color: #fff; font-color: #fff">
        <div className=" text-white -mb-2">距离周末：{{ changeDateFormat(outWork) }}</div>
      </div>
      <div v-else style="color: #fff; font-color: #fff">
        <div className=" text-white">周末体验卡剩余时间：</div>
        <div style="font-size: 20px">{{ changeDateFormat(weekStart) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTimeInfo } from './useTimeInfoHook'
const { weekStart, outWork, endWork, nowHour, nowWeak } = useTimeInfo({
  // workStartTime: baseConfig?.workingHour?.[0] || '09:00:00',
  workStartTime: '09:00:00',
  workEndTime: '18:00:00',
  // workEndTime: baseConfig?.workingHour?.[1] || '18:00:00',
})
const isWorkDay = () => {
  return nowWeak <= 5
}

const changeDateFormat = (str: string) => { // 时间倒计时
  const setTime = new Date(str)
  const nowTime = new Date()

  const restSec = setTime.getTime() - nowTime.getTime();

  // 剩余天数
  const day = parseInt(restSec / (60*60*24*1000) + '') + '';

  // 剩余小时
  const hour = parseInt(restSec / (60*60*1000) % 24 + '') + '';

  // 剩余分钟
  const minu = parseInt(restSec / (60*1000) % 60 + '') + '';

  // 剩余秒数
  // const sec = parseInt(restSec / 1000 % 60 + '') + '';

  const time = day + '天' + hour + '时' + minu + '分'
  return time
}
</script>