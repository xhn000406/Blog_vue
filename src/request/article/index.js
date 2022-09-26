import httpRequest from '@/request/index'

export function apiGetArticleData(id) {
  return httpRequest({
    url: `/article?id=${id}`,
    method: 'get'
  })
}
        