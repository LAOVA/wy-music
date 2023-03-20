<template>
  <div>
    <div class="box">
      <h2>播放:{{ id }}</h2>
      <audio :src="url" controls></audio>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      url: ''
    }
  },
  created() {
    this.getSong()
  },
  methods: {
    async getSong() {
      let res = await this.$http.getSongAPI()
      this.url = res.data.data[0].url
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }

  margin: 4rem auto;
}
</style>