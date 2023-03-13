<template>
  <div>
    <!-- logo区域 -->
    <header class="header"></header>

    <!-- 选项卡 -->
    <van-tabs v-model="active">
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
  background-color: #d43c33;
  height: 1.68rem;

}

/deep/ .van-tabs--line .van-tabs__wrap {
  border-bottom: 1px solid #dbdbdb;

  .van-tab {
    font-size: 16px;
  }
}
</style>