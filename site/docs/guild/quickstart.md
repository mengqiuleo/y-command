# 快速开始



- 安装

```
pnpm add y-command
```



- 在项目中引入

```ts
// src/core/commandRegister.ts

import { emojiCommand } from 'y-command/lib'

const commandList: CommandType[] = [
  emojiCommand
]
```