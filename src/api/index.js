import request from '@/utils/request.js'

// 将请求参数改为x-www-form-urlencoded格式
let NewMusic_Param = new URLSearchParams();
NewMusic_Param.append("params", 'Q4phoQa8eTgc447zN422xcqUGf2FEBBcP4BxqRMDJKLB76aRYPInsDfrKRt7f/m0');
NewMusic_Param.append("encSecKey", '75157afb02edc95d8fe6b31eb2ecf5635b4c5e6fcd10bf09dcad7294b3149b1767c6bf40fa3958a85489751d04e49d6eff94afb9b1019052df3b20f3b958736318e51c50370f50d733bdbf92612c229960b31572c75c22acf5ecc4b1044d6a942dc7443172e465e480b440e627a9d67323e414e5ca080908e6399d4f121f9b7c');

let HotMusic_Param = new URLSearchParams();
HotMusic_Param.append("params", "xN5YfYqkfEE7BobMEzmJ3lZWG2ilkms9Vfn3RpJR9L2WD6v0gvFS0KqW1UWqzNGz");
HotMusic_Param.append("encSecKey", "9b8d5fdc78895f16bdc02847009276293c24cf5ae8a19d28e8ec217e53ce8d2b6f0dfb0ac3d33f3a0f19ac65b7b5d566b57038a5b4ff3fac36bd806fd507e5191ab33f6793dfb2c8f622ddff95fd4fd77978efd7e1ef0d5a4ba0beab083a7e2c4fc52a55139362af508084b8c1752f84755e612a13cdcb5958637dd40723c13c")

let HotSearch_Param = new URLSearchParams();
HotSearch_Param.append("params", "lT+64wqfoiGJ0Vz4Xp8tGcma9y8FnL4eMPximXB/wjw=");
HotSearch_Param.append("encSecKey", "465edccb6eedc98555b9b6420fe803501eea2667024688f5c37d33b321922304a2aad67d689e772050bc4be97762fee4807592037a46d460003481b673280d27187b2ac66e3aaa615f863a752941fda927085e811d9ae3ca480dbde304bd176f26a588d39779c5bf640baf33fc57ad5278afc298c3f24c80e316f6adaa6d6500")

let PlayList_Param = new URLSearchParams();
PlayList_Param.append("params", "wi9/IAYU8E+Fq7LoStel2FGijYofCe/O364gpJyZ0RZO+YFLnWcFx69TTtS2SmVfjfrCDGA/57r/kqapK1IHjh6DDd6CEB0MeTmYzTAxiWI=");
PlayList_Param.append("encSecKey", "b91f16fb2e76fae1f196136fa2d12a1b4bda58fef7c2c51454b6924030166580bbc18d505b44d9edc91df729e95735e815646304fb5d1f840f883ddfe2db2259c93e922b7f45f7ae2bbe8eff591b45062419e8cb624df9407999be19949100fe91debbed5cfb0aee81ff40fe4fa9a544bb652e2e8400aba6c68ddbce2323208b")

let Song_Param = new URLSearchParams();
Song_Param.append("params", "6xVS+mZ6tK6vi91JiK/xuql2iaEy8zz0gFtzoQKKw+ziaNfQmqSajthG7uc6xmlwr+TC8kNKkhYJfsqklsNi7hjpriicqy0SdXYzQejJ1Lwh8wHx8TLZqQkVmV8XoMlA");
Song_Param.append("encSecKey", "c041ee02e4ac0b5eac40fff333b80e1b1c070252aae4bc1df3cf94803a089277d95af35963bec10f33809f2837b0e67878808571913548b03101b11393f9f41c53667b9b840583ba8766fc2f8d95f9259d37a4d1871fd296d0c8c3dc146231ca4e9a423d32976fb0d3a3e1d6074f3919d71fc7c88fd42d42a689b85d65056deb")

const api = {
  getPsnMusicAPI(limit) {
    return request.get('/api/personalized', {
      params: {
        limit
      }
    })
  },
  getNewMusicAPI() {
    return request.post('/foo/weapi/personalized/newsong', NewMusic_Param)
  },
  getHotMusicAPI() {
    return request.post('/foo/weapi/v6/playlist/detail', HotMusic_Param)
  },
  getHotSearchAPI() {
    return request.post('/foo/weapi/search/hot', HotSearch_Param)
  },
  getSearchAPI(Search_Param) {
    return request.post('/api/search/suggest', Search_Param)
  },
  getPlaylistAPI() {
    return request.post('/foo/weapi/v6/playlist/detail', PlayList_Param)
  },
  // getSongAPI(params) {
  //   return request.get('/boo/m/outchain/player?type=2&auto=1&height=66&bg=e8e8e8', { params })
  // }
  getSongAPI() {
    return request.post('/foo//weapi/song/enhance/player/url', Song_Param)
  }
}

export default api