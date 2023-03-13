import request from '@/utils/request.js'

const api = {
  getPsnMusicAPI(limit) {
    return request.get('/personalized', {
      params: {
        limit
      }
    })
  }
}

export default api