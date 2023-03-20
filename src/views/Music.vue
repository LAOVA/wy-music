<template>
  <div class="root">
    <!-- 编辑音乐 -->
    <div class="wrap">
      <div class="title">编辑推荐</div>
      <div class="content">
        <van-row gutter="3">
          <van-col span="8" v-for="item in list" :key="item.id">
            <div class="item">
              <router-link :to="/playlist/ + item.id">
                <img :src="item.picUrl" alt="">
                <div class="total"><van-icon name="fire-o" />{{ item.playCount | turn }}万</div>
                <div class="info">{{ item.name }}</div>
              </router-link>
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
        <div v-for="item in newSongs" :key="item.id">
          <router-link :to="'/song/' + item.id" class="item">
            <div class="left">
              <div class="subtitle">{{ item.name }}<span class="sgalia">{{ item.song.alias[0] }}</span></div>
              <div class="author">
                <van-icon name="vip-card-o" color="Coral" /> <span class="ele" v-for="ele in item.song.artists"
                  :key="ele.id">{{ ele.name }}</span> - <span>{{ item.song.album.name }}</span>
              </div>
            </div>
            <div class="right"><van-icon name="play-circle-o" size="26" color="#888" /></div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="ftwrap">
      <div class="ftTitle"><van-icon name="music" class="logo" size="47" color="#d43c33" />网易云音乐</div>
      <div class="app">打开APP，发现更多好音乐 ></div>
      <p>网易公司版权所有©1997-2023 杭州乐读科技有限公司运营</p>
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
      let res = await this.$http.getNewMusicAPI()
      this.newSongs = res.data.result
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
a {
  text-decoration: none;
  color: #000;
}

.root {
  background-color: #fcfcfd;
  height: 100vh;
}

.wrap {
  padding-top: .3rem;

  .title {
    margin-bottom: .3rem;
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
  padding: 0 8px;
  background-color: #fcfcfd;

  .item {
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 6px 0;

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

        .ele:nth-last-child(2) {
          &::after {
            content: "";
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

.ftwrap {
  margin-top: 4px;
  height: 200px;
  background: url(https://s3.music.126.net/mobile-new/img/recommand_bg_2x.png?d045fafc60e017b653f8065a87496922=) no-repeat;
  background-size: contain;
  text-align: center;

  .ftTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    font-size: 34px;
    letter-spacing: 4px;
  }

  .app {
    line-height: 38px;
    border: 1px solid #d33a31;
    border-radius: 38px;
    font-size: 16px;
    color: #d33a31;
    margin: 15px 37px 5px;
  }

  p {
    color: #888;
    font-size: 12px;
    line-height: 16px;
    transform: scale(.75);
  }
}

/deep/ .van-grid-item__content {
  padding: 0 2px;
}
</style>