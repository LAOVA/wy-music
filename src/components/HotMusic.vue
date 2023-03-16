<template>
  <div class="root">
    <!-- 热播图 -->
    <div class="hotop">
      <div class="box">
        <div class="cloud hoticon">
        </div>
        <p class="time">更新日期：{{ Time }}</p>
      </div>
    </div>
    <!-- 热播歌曲 -->
    <div class="list" v-for="(item, index) in list" :key="item.id">
      <span class="No">{{ index > 8 ? index + 1 : '0' + (index + 1) }}</span>
      <div class="item">
        <div class="left">
          <div class="subtitle">{{ item.name }}<span class="sgalia">{{ item.alia[0] }}</span></div>
          <div class="author">
            <van-icon name="vip-card-o" color="Coral" /> <span class="ele" v-for="ele in item.ar" :key="ele.id">{{
              ele.name }}</span> - <span>{{ item.al.name }}</span>
          </div>
        </div>
        <div class="right"><van-icon name="play-circle-o" size="26" color="#888" /></div>
      </div>

    </div>
    <!-- 查看更多 -->
    <div class="more">
      查看完整榜单 >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Time: '',
      list: []
    }
  },
  created() {
    this.getDate();
    this.getHotMusic();
  },
  methods: {
    getDate() {
      let date = new Date();
      let M = date.getMonth() + 1;
      let D = date.getDate();
      if (M < 9) {
        M = '0' + M
      }
      if (D < 9) {
        D = '0' + D
      }
      this.Time = M + '月' + D + '日';
    },
    async getHotMusic() {
      let res = await this.$http.getHotMusicAPI()
      this.list = res.data.playlist.tracks
      // console.log(this.list);
    }
  }
}

</script>

<style lang="less" scoped>
.root {
  background-color: #fcfcfd;
  height: 100vh;
}

.hotop {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-top: 38.9%;
  padding-left: 20px;
  overflow: hidden;
  background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252…=) no-repeat;
  background-size: contain;

  &:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .2);
  }

  .box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    .cloud {
      background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
      background-size: 166px 97px;
    }

    .hoticon {
      width: 142px;
      height: 67px;
      background-position: -24px -30px;
    }

    .time {
      margin-top: 10px;
      color: hsla(0, 0%, 100%, .8);
      font-size: 12px;
      transform: scale(.91);
      transform-origin: left top;
    }
  }
}

.list {
  display: flex;
  padding-right: 8px;

  .No {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    font-size: 17px;
    flex: 1;
    color: #999;
  }

  &:nth-child(-n + 4) {
    .No {
      color: #df3436;
    }
  }

  .item {
    flex: 9;
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
          // white-space: normal;
          // overflow: hidden;
          // text-overflow: ellipsis;
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

.more {
  height: 55px;
  line-height: 55px;
  text-align: center;
  color: #999;
}
</style>