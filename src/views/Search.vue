<template>
  <div class="root">
    <!-- 搜索框 -->
    <div class="search">
      <!-- <input type="text" class="inp"> -->
      <van-search v-model="inpVal" shape="round" placeholder="搜索歌曲、歌手、专辑" focus="true" background="#fcfcfd"
        @input="valchange" />
    </div>

    <!-- 热门搜索 -->
    <div class="hot-search" v-if="isShow">
      <div class="title">热门搜索</div>
      <ul class="wrap">
        <li class="musicName" v-for="(item, index) in hots" :key="index">{{ item.first }}</li>
      </ul>
    </div>

    <!-- 搜索列表 -->
    <div class="search-list" v-if="!isShow">
      <div class="name">搜索 "{{ inpVal }}"</div>
      <div class="info" v-for="item in list" :key="item.keyword">{{ item.keyword }}</div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      hots: [],
      isShow: true,
      inpVal: '',
      list: []
    }
  },
  created() {
    this.getHotSearch()
  },
  methods: {
    async getHotSearch() {
      let res = await this.$http.getHotSearchAPI()
      this.hots = res.data.result.hots
    },
    async getSearch(keywords) {
      let res = await this.$http.getSearchAPI({
        keywords,
        type: 'mobile'
      })
      if (res.data.code == 200) {
        this.list = res.data.result.allMatch;
      } else {
        this.list = []
      }

    },
    valchange(value) {
      if (value) {
        this.isShow = false
        this.getSearch(value)
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.root {
  background-color: #fcfcfd;
  height: 100vh;
}

.search {
  margin: .2rem 0;
  border-bottom: 1px solid #eee;

  // .inp {
  //   width: 100%;
  //   height: .6rem;
  //   margin: .2rem 0;
  //   line-height: .6rem;
  //   border-radius: .3rem;
  //   border: 0;
  //   outline: none;
  //   background-color: #eee;
  // }
  /deep/ .van-search__content {
    background-color: #eee;
  }
}

.hot-search {
  margin-top: .3rem;
  padding: 0 .2rem;

  .title {
    font-size: 12px;
    line-height: 12px;
    color: #666;
    margin-bottom: .2rem;
  }

  .wrap {
    .musicName {
      display: inline-block;
      height: 32px;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 0 14px;
      font-size: 14px;
      line-height: 32px;
      color: #333;
      border: 1px solid rgba(0, 0, 0, .1);

      border-radius: 32px;
    }
  }
}

.search-list {
  .name {
    color: red;
    line-height: .9rem;
    height: .9rem;
    padding-left: .2rem;
    border-bottom: 1px solid #eee;
  }

  .info {
    line-height: .9rem;
    height: .9rem;
    padding-left: .2rem;
    border-bottom: 1px solid #eee;
  }
}
</style>
