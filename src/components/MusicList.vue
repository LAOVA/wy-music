<template>
  <div>
    <div class="list" v-for="(item, index) in list" :key="item.id">
      <!-- 使用v-if -->
      <!-- <span class="No" v-if="isHot" :class="{ 'text-red': index < 3 }">{{ index > 8 ? index + 1 : '0' + (index + 1)
      }}</span>
      <span class="No" v-else>{{ index + 1 }}</span> -->
      <!-- 使用插槽 -->
      <slot name="code" :index="index"></slot>
      <div class="item" @click="playSong(item.id)">
        <div class="left">
          <div class="subtitle">{{ item.name }}<span class="sgalia">{{ item.alia[0] }}</span></div>
          <div class="author">
            <van-icon name="vip-card-o" color="Coral" /> <span class="ele" v-for="ele in item.ar" :key="ele.id">{{
              ele.name }}</span> - <span>{{ item.al.name }}</span>
          </div>
        </div>
      </div>
      <div class="right"><van-icon name="play-circle-o" size="26" color="#888" /></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
    isHot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    playSong(id) {
      // 调整播放页
      this.$router.push('/song/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  padding-right: 8px;

  .No {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    font-size: 17px;
    color: #999;
  }

  .item {
    // flex: 9;
    width: 6rem;
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 6px 0;

    .left {
      flex: 8;
      overflow: hidden;

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
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: .8rem;
  }
}
</style>