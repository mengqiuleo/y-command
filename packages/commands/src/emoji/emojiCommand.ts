import { CommandType } from '../../command.d'

/**
 * 知乎搜索命令
 * @author pjy
 */
const emojiCommand: CommandType = {
  func: 'emoji',
  name: 'emoji查询',
  alias: [],
  params: [
    {
      key: 'word',
      desc: '搜索内容',
      required: true
    }
  ],
  options: [
    {
      key: 'self',
      desc: '是否当前页面打开',
      alias: ['s'],
      type: 'boolean',
      defaultValue: false
    }
  ],
  action(options, terminal) {
    const { _, self } = options
    const word = _.length > 0 ? _[0] : ''
    const targetLink = `https://emoji.muan.co/#${word}`
    if (self) {
      window.location.href = targetLink
    } else {
      window.open(targetLink)
    }
  }
}

export default emojiCommand
export { emojiCommand }
