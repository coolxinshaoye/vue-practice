### 1.常用特性概览

![1567391579421](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567391579421.png)

##### 1.1 基于Vue的表单操作

![1567391727739](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567391727739.png)

@input  只要是输入就立刻触发

@change  值发生改变并且失去焦点

@keyup  键盘弹起触发

### 2.自定义指令

##### 2.1 

![1567395130030](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567395130030.png)

Vue.directive(‘’自定义指令的名称 ，{

inserted //钩子函数1

})

##### 2.2 带参数的自定义指令

Vue.directive(‘’自定义指令的名称 ，{

inserted //钩子函数1

})

![1567395215393](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567395215393.png)

##### 3.1 过滤器![1567404786311](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567404786311.png)

### 3.计算属性

compute 计算属性

1.初次打开页面会立刻执行

2.他有返回值



### 4.侦听器

watch   监听   处理

1.初次进入不会立刻执行

2.函数的名称是data中的属性

### 5.生命周期

localStorage   关闭浏览器数据还存在

sessionStorage  关闭浏览器数据删除

##### 1.主要阶段

![1567412192380](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567412192380.png)

![1567412526925](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567412526925.png)



beforeCreate  这个阶段data和method中的数据不可以i使用

created 这个阶段 data 和methods都可以使用，$el不可以使用

beforeMount  这个阶段data和methods中的数据和函数都可以使用，$el可以获取但是 data中的数据挂载到页面上了，并没有渲染出来

mounted  这个阶段data和methods中的数据和函数都可以使用，$el可以获取但是 data中的数据挂载到页面上了，并渲染出来

