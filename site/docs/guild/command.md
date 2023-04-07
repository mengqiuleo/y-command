# 命令开发

<br />
<br />

命令开发写在目录`commands/src`下,比如`muyu`命令目录如下

```
-- components
  -- src
     -- moyu
        -- MoYuBox.vue 命令结果回显
        -- moyuCommand.ts 命令编写
     -- index.ts 导出全部组件
  -- index.ts 命令集入口文件
```

摸鱼命令 开发示例

```vue
<!--
 * @Author: Pan Jingyi
 * @Date: 2022-09-25 23:32:09
 * @LastEditTime: 2022-09-25 23:45:04
-->
<template>
  <div style="margin: 8px 0">
    <iframe
      :src="currentGame"
      class="main"
      frameborder="no"
      marginwidth="0"
      marginheight="0"
    />
  </div>
</template>

<script setup lang="ts">
const gameList = [
  'https://haiyong.site/moyu/shitoujiandaobu/',
  'https://haiyong.site/moyu/lion.html',
  'https://haiyong.site/moyu/shengchengshu.html',
  'https://haiyong.site/moyu/zhipaijiyi.html',
  'https://haiyong.site/moyu/doumao.html',
  'https://haiyong.site/moyu/dadishu.html',
  'https://haiyong.site/moyu/laganziguoguan/',
  'https://haiyong.site/moyu/danzhu.html',
  'https://haiyong.site/moyu/feiji.html',
  'https://haiyong.site/moyu/doudizhu.html',
  'https://haiyong.site/moyu/tiaofangzi.html',
  'https://haiyong.site/moyu/SpaceHuggers/',
  'https://haiyong.site/moyu/weijing/'
]

const currentGame = gameList[Math.floor(Math.random() * gameList.length)]
</script>

<style scoped>
.main {
  width: 100%;
  height: 80vh;
  min-height: 600px;
}
</style>

```

命令编写
```ts
/*
 * @Author: Pan Jingyi
 * @Date: 2022-09-25 23:32:09
 * @LastEditTime: 2022-09-25 23:44:30
 */
import { CommandType } from '../../command.d'
import { defineAsyncComponent } from 'vue'
import ComponentOutputType = YiTerminal.ComponentOutputType

/**
 * 摸鱼命令
 * @author pjy
 */
const moyuCommand: CommandType = {
  func: 'moyu',
  name: '摸鱼',
  options: [],
  collapsible: true,
  action(options: any, terminal: any) {
    const output: ComponentOutputType = {
      type: 'component',
      component: defineAsyncComponent(() => import('./MoYuBox.vue')),
      props: {}
    }
    terminal.writeResult(output)
  }
}

export default moyuCommand
export { moyuCommand }

```

导出命令示例(src/index.ts)

```ts
export { moyuCommand } from './moyu/moyuCommand'
```

命令集入口文件(commands/index.ts)

```ts
export * from "./src/index"
```

运行命令，在play中开发调试命令
注意在core的commandRegister.ts中对开发命令进行注册

```ts
// src/core/commandRegister.ts

import { emojiCommand } from 'y-command/lib'

const commandList: CommandType[] = [
  emojiCommand
]
```
