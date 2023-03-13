/*
 * @Author: Pan Jingyi
 * @Date: 2022-09-26 19:55:01
 * @LastEditTime: 2022-09-26 19:56:31
 */
import { CommandType } from '../../command.d'
import { DateUtil } from './myDay'

/**
 * 日期命令
 * @author pjy
 */
const dateCommand: CommandType = {
  func: 'date',
  name: '日期',
  options: [],
  action(options: any, terminal: any): void {
    // const dateStr = formatdate(new Date(), '')
    const dateStr = new DateUtil().formatDate(new Date())
    const output = `当前时间：${dateStr}`
    terminal.writeTextResult(output)
  }
}

export default dateCommand
export { dateCommand }
