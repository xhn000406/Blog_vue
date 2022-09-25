import httpRequest from '@/request/index'

export function apiGetEditData() {
  return httpRequest({
    url: `/dict`,
    method: 'get'
  })
}
