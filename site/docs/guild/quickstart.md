# 快速开始



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