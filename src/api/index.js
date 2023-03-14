import request from '@/utils/request.js'

// 将请求参数改为x-www-form-urlencoded格式
let param = new URLSearchParams();
param.append("params", 'Q4phoQa8eTgc447zN422xcqUGf2FEBBcP4BxqRMDJKLB76aRYPInsDfrKRt7f/m0');
param.append("encSecKey", '75157afb02edc95d8fe6b31eb2ecf5635b4c5e6fcd10bf09dcad7294b3149b1767c6bf40fa3958a85489751d04e49d6eff94afb9b1019052df3b20f3b958736318e51c50370f50d733bdbf92612c229960b31572c75c22acf5ecc4b1044d6a942dc7443172e465e480b440e627a9d67323e414e5ca080908e6399d4f121f9b7c');



const api = {
  getPsnMusicAPI(limit) {
    return request.get('/api/personalized', {
      params: {
        limit
      }
    })
  },
  getHotMusicAPI() {
    return request.post('/foo/weapi/personalized/newsong', param)
  }
}

export default api