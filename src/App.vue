<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
/* 点击高亮我们需要清除清除设置为transparent完成透明*/
* {
  -webkit-tap-highlight-color: transparent;
}

/*在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式*/
input {
  -webkit-appearance: none;
}

/*禁用长按页面时的弹出菜单*/
img,
a {
  -webkit-touch-callout: none;
}
</style>
