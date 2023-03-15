# ping
检测某个IP地址是否正常

### 使用

```ts
// src/core/commandRegister.ts

import { pingCommand } from '@y-command/commands'

const commandList: CommandType[] = [
  pingCommand
]
```

然后在命令行中输入 
<br/>

ping www.baidu.com  (一个示例)

