# Angular Architecture 项目



## 一、项目工具安装

1.  安装node https://nodejs.org/zh-cn/

2. 升级node.js到最新稳定版：

   ```bash
   npm cache clean -f
   npm install -g n
   ```

   

3. 没有变量和样式复用机制，属性值只能以字面量的形式重复输出。

~~~shell
# 总结：代码复用性低；不易于维护
# 注：现在，现在的CSS是可以定义变量的！！！
~~~

~~~bash
install node
node -v
npm install -g @angular/cli
ng v
ng new bioworld-app
~~~

-----





## 二、出名的CSS预处理器介绍

### 1. SCSS/SASS

SASS (.scss)。于2007年诞生，最早也是最成熟的CSS预处理器，拥有ruby社区的支持和compass这一最强大的css框架，目前受LESS影响，已经进化到了全面兼容CSS的SCSS。

### 2. LESS

LESS (.less)。于2009年诞生，借鉴了SASS的长处，并兼容了CSS语法，使得开发者使用起来更为方便顺手，但是相比于SASS，其编程功能不够丰富，反而促使SASS进化成为了SCSS。

### 3. Stylus

Stylus (.styl)。于2010年诞生，出自Node.js社区，主要用来给Node项目进行CSS预处理支持，人气较前两者偏低。



