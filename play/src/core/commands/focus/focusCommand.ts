import { CommandType } from '../../command.d'
import { defineAsyncComponent } from 'vue'
import ComponentOutputType = YiTerminal.ComponentOutputType

/**
 * 摸鱼命令
 * @author pjy
 */
const focusCommand: CommandType = {
  func: 'focus',
  name: '沉浸式学习',
  options: [],
  collapsible: true,
  action(options: any, terminal: any) {
    // const output: ComponentOutputType = {
    //   type: 'component',
    //   component: defineAsyncComponent(() => import('./Focus.vue')),
    //   props: {}
    // }
    // terminal.writeResult(output)
    window.location.href = '/#/focus'
  }
}

export default focusCommand
export { focusCommand }
