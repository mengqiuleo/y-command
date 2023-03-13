import { CommandType } from '../../command.d'
import ComponentOutputType = YiTerminal.ComponentOutputType
import { defineAsyncComponent } from 'vue'
/**
 * ping
 * @author pjy
 */
const pingCommand: CommandType = {
  func: 'ping',
  name: '检测某个地址是否存活',
  params: [
    {
      key: 'dest',
      desc: '目标地址',
      required: true
    }
  ],
  options: [],
  action(options: any, terminal: any): void {
    const { _ } = options
    let dest = _[0]
    if (
      !dest.toLowerCase().startsWith('http://') &&
      !dest.toLowerCase().startsWith('https://')
    ) {
      dest = 'https://' + dest
    }
    if (dest.toLowerCase().startsWith('http://')) {
      dest = dest.replace('http://', 'https://')
    }
    // const timeout = pingParams.timeout
    const output: ComponentOutputType = {
      type: 'component',
      component: defineAsyncComponent(() => import('./PingShow.vue')),
      props: {dest}
    }
    terminal.writeResult(output)
  }
}

export default pingCommand
export { pingCommand }
