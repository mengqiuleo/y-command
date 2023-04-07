# emoji查询

自己在写博客时经常用到一些emoji图片

### 使用

```ts
// src/core/commandRegister.ts

import { emojiCommand } from 'y-command/lib'

const commandList: CommandType[] = [
  emojiCommand
]
```

然后在命令行中输入 
<br/>

emoji happy
```
// 提示
hint: emoji <搜索内容> [-s 是否在当前页面打开]
```


