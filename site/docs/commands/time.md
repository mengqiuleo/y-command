# time

打工人必备
- 显示下班倒计时
- 显示周末倒计时

### 使用

```ts
// src/core/commandRegister.ts

import { timeCommand } from 'y-command/lib'

const commandList: CommandType[] = [
  timeCommand
]
```

然后在命令行中输入 time
<br/>

命令结果回显
![打工倒计时](https://doc.panjingyi.top/blog/202303151340460.jpg)
