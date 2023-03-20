<template>
  <div>
    <!-- <div class="mark"> {{ id }}</div> -->
    <div class="info">
      <img :src="imgUrl" alt="">
      <div class="name">{{ name }}</div>
    </div>
    <!--歌曲列表-->
    <div class="content">
      <div class="desc">歌曲列表</div>
    </div>
    <!-- 歌曲列表 -->
    <MusicList :list="list">
      <template #code="obj">
        <span class="No">{{ obj.index + 1 }}</span>
      </template>
    </MusicList>

    <!-- <div class="list" v-for="(item, index) in list" :key="item.id">
      <span class="No">{{ index }}</span>
      <div class="item">
        <div class="left">
          <div class="subtitle">{{ item.name }}<span class="sgalia">{{ item.alia[0] }}</span></div>
          <div class="author">
            <van-icon name="vip-card-o" color="Coral" /> <span class="ele" v-for="ele in item.ar" :key="ele.id">{{
              ele.name }}</span> - <span>{{ item.al.name }}</span>
          </div>
        </div>
      </div>
      <div class="right"><van-icon name="play-circle-o" size="26" color="#888" /></div>
    </div> -->
  </div>
</template>

<script>
import MusicList from '@/components/MusicList.vue'
export default {
  props: ['id'],
  components: {
    MusicList
  },
  data() {
    return {
      name: '',
      imgUrl: '',
      list: []
    }
  },
  created() {
    this.getPlaylist()
  },
  methods: {
    async getPlaylist() {
      let res = await this.$http.getPlaylistAPI()
      this.name = res.data.playlist.name;
      this.imgUrl = res.data.playlist.coverImgUrl;
      this.list = res.data.playlist.tracks;
    }
  }
}
</script>

<style lang="less" scoped>
.info {
  padding: .3rem;
  background: #888;
  display: flex;

  img {
    width: 126px;
    height: 126px;
  }

  .name {
    margin-right: 4px;
    padding: 0 6px;
    font-size: 16px;
    line-height: 1.3;
    color: #fefefe;
    height: 44px;
    display: -webkit-box;
    -webkit-box-pack: center;
  }
}

.content {
  .desc {
    height: 23px;
    line-height: 23px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;
  }
}

// .list {
//   display: flex;
//   padding-right: 8px;

//   .No {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40px;
//     font-size: 17px;
//     color: #999;
//   }

//   .item {
//     // flex: 9;
//     width: 5.5rem;
//     display: flex;
//     border-bottom: 1px solid #eee;
//     padding: 6px 0;

//     .left {
//       flex: 8;
//       overflow: hidden;

//       .subtitle {
//         font-size: 17px;

//         .sgalia {
//           margin-left: 4px;
//           font-size: 16px;
//           color: #888;
//           // white-space: normal;
//           // overflow: hidden;
//           // text-overflow: ellipsis;
//         }
//       }

//       .author {
//         margin-top: 4px;
//         font-size: 12px;
//         color: #888;
//         overflow: hidden;
//         text-overflow: ellipsis;
//         white-space: nowrap;
//         word-break: normal;

//         .ele {
//           &::after {
//             content: " / ";
//           }
//         }

//         .ele:nth-last-child(2) {
//           &::after {
//             content: "";
//           }
//         }
//       }
//     }
//   }

//   .right {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: .8rem;
//   }
// }
</style>
