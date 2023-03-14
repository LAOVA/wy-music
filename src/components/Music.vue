<template>
  <div>
    <!-- 编辑音乐 -->
    <div class="wrap">
      <div class="title">编辑推荐</div>
      <div class="content">
        <van-row gutter="4">
          <van-col span="8" v-for="item in list" :key="item.id">
            <div class="item">
              <img :src="item.picUrl" alt="">
              <div class="total"><van-icon name="fire-o" />{{ item.playCount | turn }}万</div>
              <div class="info">{{ item.name }}</div>
            </div>
          </van-col>
        </van-row>
        <!-- <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in list" :key="item.id">
            <div class="item">
              <img :src="item.picUrl" alt="">
              <div class="total"><van-icon name="fire-o" />{{ item.playCount | turn }}万</div>
              <div class="info">{{ item.name }}</div>
            </div>
          </van-grid-item>
        </van-grid> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getPsnMusic()
    this.getHotMusic()
  },
  methods: {
    async getPsnMusic() {
      let res = await this.$http.getPsnMusicAPI(6)
      this.list = res.data.result
    },
    async getHotMusic() {
      let res = await this.$http.getHotMusicAPI(6)
      this.list = res.data.result
      console.log(res);
    }
  },
  filters: {
    turn(val) {
      return (val / 10000).toFixed(1)
    }
  }

}
</script>

<style lang="less" scoped>
.wrap {
  .title {
    margin: .2rem 0;
    font-size: .34rem;
    position: relative;
    padding-left: .2rem;

    &::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 0;
      width: 2px;
      height: 20px;
      background-color: #ff5555;
    }
  }
}

.content {
  width: 100%;

  .item {
    position: relative;

    img {
      width: 100%;
    }
  }

  .total {
    color: #fff;
    position: absolute;
    right: 3px;
    top: 3px;
  }

  .info {
    margin: 0 .1rem;
    margin-bottom: .3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .van-col {
    height: 3.6rem;
  }
}

/deep/ .van-grid-item__content {
  padding: 0 2px;
}
</style>