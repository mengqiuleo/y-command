// import { getNowTimeInfo } from '@/utils/time';
import moment from 'moment'
// import { useMemo } from 'react';
// import { getToday } from '../utils';

function formatDate(strDate: any, strFormat?: any){
  if (!strDate){ return; }
  if (!strFormat){ strFormat = 'yyyy-MM-dd'; }
  switch (typeof strDate) {
    case 'string':
      strDate = new Date(strDate.replace(/-/, '/'));
      break;
    case 'number':
      strDate = new Date(strDate);
      break;
  }
  if (strDate instanceof Date){
    const dict: any = {
      yyyy: strDate.getFullYear(),
      M: strDate.getMonth() + 1,
      d: strDate.getDate(),
      H: strDate.getHours(),
      m: strDate.getMinutes(),
      s: strDate.getSeconds(),
      MM: ('' + (strDate.getMonth() + 101)).slice(1),
      dd: ('' + (strDate.getDate() + 100)).substr(1),
      HH: ('' + (strDate.getHours() + 100)).substr(1),
      mm: ('' + (strDate.getMinutes() + 100)).substr(1),
      ss: ('' + (strDate.getSeconds() + 100)).substr(1),
    };
    return strFormat.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, function () {
      return dict[arguments[0]];
    });
  }
}

function getNowTimeInfo() {
	const timeNow = new Date()
	const nowHour = timeNow.getHours()
	const nowMinutes = timeNow.getMinutes()
	const nowWeak = +moment(timeNow).format('E')

	return {
		timeNow,
		nowHour,
		nowMinutes,
		nowWeak,
	}
}

type TProps = {
  workEndTime: string;
  workStartTime: string;
};

export function useTimeInfo({ workEndTime, workStartTime }: TProps) {
  const { timeNow, nowHour, nowMinutes, nowWeak } = getNowTimeInfo();
  const endWork = formatDate(new Date()) + ' ' + workEndTime; //距离下班
  // const startWork = formatDate(new Date()) + ' ' + workStartTime;

  const outWork = moment().weekday(6).format('YYYY/MM/DD'); // 距离周末
  const weekStart = moment(timeNow) //周末体验卡
    .subtract(nowWeak - 1, 'days')
    .add(7, 'days')
    .format('YYYY/MM/DD'); //下周一 -- 开始工作的时间

  return {
    weekStart,
    outWork,
    endWork,
    nowHour,
    nowMinutes,
    nowWeak,
  };
}
