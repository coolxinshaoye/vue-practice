# VUE

### 3.2指令

##### 3数据绑定指令

![1567304791185](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567304791185.png)

**V-text**   ========渲染纯文本，不能解析标签  会将原本数据覆盖 

**V- html**    ====== 会覆盖 原本数据  可以解析标签

**V-pre**  ========= 主要区分v- html 和v- text



##### 4.数据响应式

![1567305330546](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567305330546.png)

数据响应式 就是指 数据变化导致页面内容的变化



V-model 使用范围 ： input + select + textarea   跟value有关的 都使用

设置V - model 其实就是设置了Value

需要获取表单值就可以直接获取双向数据绑定分V-model