import httpRequest from '@/request/index'

export function apiGetSwaperData() {
  return httpRequest({
    url: `/swiper`,
    method: 'get'
  })
}
