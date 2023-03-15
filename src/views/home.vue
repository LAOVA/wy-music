<template>
  <div>
    <!-- logo区域 -->
    <header class="header">
      <div class="title"><van-icon name="music" class="logo" size="26" />网易云音乐</div>
      <div class="app">下载APP</div>
    </header>

    <!-- 选项卡 -->
    <van-tabs v-model="active" title-active-color="#d43c33">
      <van-tab title="推荐音乐" name="1">
        <Music></Music>
      </van-tab>
      <van-tab title="热歌榜" name="2">
        <HotMusic></HotMusic>
      </van-tab>
      <van-tab title="搜索" name="3">
        <Search></Search>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 导入tabs组件
import Music from '../components/Music.vue'
import HotMusic from '../components/HotMusic.vue'
import Search from '../components/Search.vue'

export default {
  data() {
    return {
      active: '1',
    };
  },
  components: {
    Music,
    HotMusic,
    Search
  },
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #d43c33;
  height: 1.68rem;
  z-index: 99;

  .title {
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    left: .2rem;
    transform: translateY(-50%);
    font-size: 20px;
    letter-spacing: .1em;
    color: #fff;


    .logo {
      margin-right: .1rem;
    }
  }

  .app {
    position: absolute;
    top: 50%;
    right: .2rem;
    transform: translateY(-50%);
    width: 100px;
    height: 36px;
    line-height: 36px;
    background-color: #fff;
    font-size: 16px;
    color: #d43c33;
    text-align: center;
    border-radius: 18px;
  }
}

/deep/ .van-tabs--line .van-tabs__wrap {
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  top: 1.68rem;
  width: 100%;
  z-index: 99;

  .van-tab {
    font-size: 16px;
  }
}

/deep/ .van-tabs__content {
  margin-top: 2.6rem;
}
</style>