<template>
  <div>
    <!-- 编辑音乐 -->
    <div class="wrap">
      <div class="title">编辑推荐</div>
      <div class="content">
        <van-row gutter="3">
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
    <div class="wrap">
      <div class="title">最新音乐</div>
      <div class="list">
        <div class="item" v-for="item in newSongs" :key="item.id">
          <div class="left">
            <div class="subtitle">{{ item.name }}<span class="sgalia">{{ item.song.alias[0] }}</span></div>
            <div class="author">
              <van-icon name="vip-card-o" color="orange" /> <span class="ele" v-for="ele in item.song.artists"
                :key="ele.id">{{ ele.name }}</span> - <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="right"><van-icon name="play-circle-o" size="26" color="#888" /></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      newSongs: []
    }
  },
  created() {
    this.getPsnMusic()
    this.getNewMusic()
  },
  methods: {
    async getPsnMusic() {
      let res = await this.$http.getPsnMusicAPI(6)
      this.list = res.data.result
    },
    async getNewMusic() {
      let res = await this.$http.getNewMusicAPI(6)
      this.newSongs = res.data.result
      console.log(this.newSongs);
    }
  },
  filters: {
    turn(val) {
      return (val / 10000).toFixed(1);
    }
  }

}
</script>

<style lang="less" scoped>
.wrap {
  .title {
    margin: .3rem 0;
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
    height: 3.4rem;
    margin-bottom: .2rem;
  }
}

.list {
  .item {
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 10px 0 10px 10px;

    .left {
      flex: 1;

      .subtitle {
        font-size: 17px;

        .sgalia {
          margin-left: 4px;
          font-size: 16px;
          color: #888;
        }
      }

      .author {
        margin-top: 4px;
        font-size: 12px;
        color: #888;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;

        .ele {
          &::after {
            content: " / ";
          }

        }

        .ele:last-child {
          &::after {
            content: " / ";
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: .8rem;
      text-align: center;
    }

  }
}

/deep/ .van-grid-item__content {
  padding: 0 2px;
}
</style>