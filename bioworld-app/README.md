# Angular Architecture 项目



## 一、项目工具安装

1.  安装node https://nodejs.org/zh-cn/

2. 升级node.js到最新稳定版：

```bash
ng config cli.packageManager cnpm

npm cache clean -f
npm install -g n -force
node -v
```
3. 安装angular cli
```bash
npm install -g @angular/cli
ng v
ng new bioworld-app (项目名)

npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
```
4. 运行代码
```bash
prompt $g
cls
cd bioworld-app(项目名)
ng serve -o
```
5. 导入环境变量
~~~shell
# 修改tsconfig.base.json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "src",  #用于访问子目录
    "paths": {
      "@app/*":["app/*"],
      "@src/*":["*"],
    },
    
    ...
    
    "resolveJsonModule": true, #用于dictionary
    "esModuleInterop": true
  }
}
prettier 格式化文本 
# 在打开示例代码的vscode窗口中，使用快捷键“CTRL + Shift + P”打开vscode命令框，在框中输入“format”关键字，可以看到有2个选项 
# 1. Format Document （快捷键 Shift+Alt+F）对整个文档做格式化
# 2. Format Selection （快捷键Ctrl+K, Ctrl+F）对选择代码做格式化

environment.dev.ts
export const environment = {
  production: false,
  name: 'dev'
};
environment.prod.ts
export const environment = {
  production: true,
  name:'prod'
};
~~~
6. 修改build 和start

```shell
angular.json
package.json
```
7. 添加package

```json
"@angular/cdk": "^9.0.1",
"@angular/localize": "~9.0.2",
"@angular/material": "^9.0.1",
"@angular/fire": "^5.3.0",
"firebase": "^7.6.1",
"@ngrx/effects": "^8.6.0",
"@ngrx/entity": "^8.6.0",
"@ngrx/store": "^8.6.0",
"@ngrx/store-devtools": "^8.6.0",
"ngx-image-cropper": "^3.0.3"
```
-----




