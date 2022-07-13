---
title: ezt开发记录
date: 2022-07-13 08:45:05
---

### 使用说明

```bash
#install
npm install -g ezt
#create project
ezt init
#create page
ezt p about/index
#fetch swagger api
ezt api
```


### 技术栈
1. 使用tsdx
2. 主要用的库有：commander、inquirer
3. package相关配置项目: "bin": "./bin/ezt"、keywords、homepage

## 发布流程
1. npm adduser
2. update version
3. yarn build
4. npm publish .
