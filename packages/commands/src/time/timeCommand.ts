import { CommandType } from '../../command.d'
import { defineAsyncComponent } from 'vue'
import ComponentOutputType = YiTerminal.ComponentOutputType

/**
 * 摸鱼命令
 * @author pjy
 */
const timeCommand: CommandType = {
  func: 'time',
  name: '下班倒计时(打工人必备)',
  options: [],
  collapsible: true,
  action(options: any, terminal: any) {
    const output: ComponentOutputType = {
      type: 'component',
      component: defineAsyncComponent(() => import('./Time.vue')),
      props: {}
    }
    terminal.writeResult(output)
  }
}

export default timeCommand
export { timeCommand }
