# What is best-tab ?
This is a tab component that focuses on the PC side of web applications. It's simple, compact, lightweight, efficient, and portable. Helps reduce the amount of development effort.
# Dependence 
- jquery.1.11.x
# Installation
## script
```html
// import jquery.js
<script type="text/javascript" src="js/jquery.js"></script>
// import best-tab.js
<script type="text/javascript" src="js/best-tab.js"></script>
```
# Useage
index.js
```html
<script type="text/javascript">
$(function(){
  
  // instantiation tab
  var tab=new Tab(options);
  
});
</script>
```
# Constructor
## Options
|key|description|default|options|
|:---|---|---|---|
| `container`|tab容器.|`".best-tab"`|`String`|
| `tabHd`|tab的选项.|`".best-tab-hd"`|`Number`|
| `tabBd`|tab的内容.|`".best-tab-bd"`|`String`|
| `hdCon`|tab的选项容器.|`".best-hd-con"`|`String`|
| `bdCon`|tab的内容容器.|`".best-bd-con"`|`String`|
| `activeClass`|tab页签选择时样式.|`current`|`String`|
| `defaultIndex`|默认显示第几个.|`0`|`Number`|
| `type`|事件触发类型，有`click`、`mouseover`.|`"click"`|`String`|
| `mode`|运动模式，`default`、`slide`、`fade`.|`"default"`|`String`|
| `direction`|滑动方向，有horizontal、vertical.|`"horizontal"`|`String`|
| `autoplay`|是否开启自动播放.|`false`|`Boolean`|
| `duration`|运动时长，默认400，单位ms.|`400`|`Number`|
| `interval`|间隔时长，默认3000，单位ms.|`3000`|`Number`|
| `handler`|切换完成后的回调.|`null`|`Function`|

