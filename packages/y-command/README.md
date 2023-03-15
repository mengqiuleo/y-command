# y-command

<p align="center">
  <img height="160px" src="https://doc.panjingyi.top/blog/202207031041891.gif">
  <h2 align="center" style="font-weight: 600">y-command</h2>
</p>

<p align="center">
  <img  style="display:inline" src="https://img.shields.io/npm/v/y-command" />

  <img style="display:inline;margin-left:10px" src="https://img.shields.io/npm/dt/y-command" />
</p>

<p align="center">
  让你的浏览器终端命令开发更简单
</p>

## ✨ 特性
**y-command**是一个 **为y-terminal** 服务的命令集,采用最新的 `Vite4+TypeScript` 为技术栈, 可以实现定制化个人浏览器主页。

<br/>

## 使用
- 安装

```
pnpm y-command
```



- 在项目中引入

```ts
// src/core/commandRegister.ts

import { emojiCommand } from '@y-command/commands'

const commandList: CommandType[] = [
  emojiCommand
]
```
<br/>

## 命令开发

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

import { emojiCommand } from '@y-command/commands'

const commandList: CommandType[] = [
  emojiCommand
]
```
<br/>

## 了解更多

[终端命令行浏览器 y-terminal](https://github.com/mengqiuleo/y-terminal) 是什么？

一个很特别的浏览器主页，支持使用输入命令的方式来操作，目标是帮你在一个 web 终端中高效完成所有的事情！（all in one）

此外，它也是一个功能强大的 web 终端组件。开发者可以在它的基础上定制自己的 web 终端，并且可以在终端中集成任何内容！

> 如果你是一名程序员，相信你会爱上它~

### 1 分钟上手使用

请打开网站：[y-terminal](https://terminal.panjingyi.top/#/)

然后在网站内输入命令：

```bash
help 回车, 显示所有支持的命令
```

使用  `help 命令英文名` 可以查询某命令的具体用法，如：`help search` 。

使用 `shortcut` 可以查看所有的快捷键。


尽情探索吧~