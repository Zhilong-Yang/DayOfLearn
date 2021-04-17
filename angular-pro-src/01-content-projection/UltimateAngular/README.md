# Ultimate Angular
## HTML代码快速编写
~~~html
#1.初始化 
html:5 或!：用于HTML5文档类型
html:xt：用于XHTML过渡文档类型
html:4s：用于HTML4严格文档类型

#2.添加类、id、文本和属性
输入类和id，比如p.bar#foo，会自动生成： 
<p class="bar" id="foo"></p>

输入h1{foo}和a[href=#]
<h1>foo</h1>  
<a href="#"></a> 

#3.嵌套
>：子元素符号，表示嵌套的元素
+：同级标签符号
^：可以使该符号前的标签提升一行

#4.分组 
输入(.foo>h1)+(.bar>h2)
<div class="foo">  
  <h1></h1>  
</div>  
<div class="bar">  
  <h2></h2>  
</div>

#5.隐式标签 
声明一个带类的标签，只需输入div.item，就会生成
<div class="item"></div>
li：用于ul和ol中
tr：用于table、tbody、thead和tfoot中
td：用于tr中
option：用于select和optgroup中

#6.定义多个元素
ul>li*3可以生成如下代码
<ul>  
  <li></li>  
  <li></li>  
  <li></li>  
</ul>

#7.定义多个带属性的元素
ul>li.item$*3
<ul>  
  <li class="item1"></li>  
  <li class="item2"></li>  
  <li class="item3"></li>  
</ul>  
~~~

## CSS代码快速编写
~~~css
#1.值
p 表示%
e 表示 em
x 表示 ex
w100可生成
width: 100px;   
h10p+m5e
height: 10%;  
margin: 5em; 

#2.附加属性 
@f，可以生成
@font-face {  
  font-family:;  
  src:url();  
}  
一些其他的属性，比如background-image、border-radius、font、@font-face,text-outline、text-shadow等额外的选项，
可以通过“+”符号来生成，比如输入@f+，将生成：
@font-face {  
  font-family: ‘FontName‘;  
  src: url(‘FileName.eot‘);  
  src: url(‘FileName.eot?#iefix‘) format(‘embedded-opentype‘),  
     url(‘FileName.woff‘) format(‘woff‘),  
     url(‘FileName.ttf‘) format(‘truetype‘),  
     url(‘FileName.svg#FontName‘) format(‘svg‘);  
  font-style: normal;  
  font-weight: normal;  
}  

#3 模糊匹配
如果有些缩写你拿不准，Emmet会根据你的输入内容匹配最接近的语法，比如输入ov:h、ov-h、ovh和oh，生成的代码是相同的
overflow: hidden;  

#4.供应商前缀
w 表示 -webkit-
m 表示 -moz-
s 表示 -ms-
o 表示 -o-

输入trs，则会生成：
-webkit-transform: ;
-moz-transform: ;
-ms-transform: ;
-o-transform: ;
transform: ;

在任意属性前加上“-”符号，也可以为该属性加上前缀 比如输入-super-foo
-webkit-super-foo: ;
-moz-super-foo: ;
-ms-super-foo: ;
-o-super-foo: ;
super-foo: ;  

#5. 渐变
输入lg(left, #fff 50%, #000)，会生成如下代码：

background-image: -webkit-gradient(linear, 0 0, 100% 0, color-stop(0.5, #fff), to(#000));
background-image: -webkit-linear-gradient(left, #fff 50%, #000);
background-image: -moz-linear-gradient(left, #fff 50%, #000);
background-image: -o-linear-gradient(left, #fff 50%, #000);
background-image: linear-gradient(left, #fff 50%, #000);  
~~~
