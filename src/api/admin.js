import request from '@/utils/request'
import qs from 'qs'

export function getInfo() {
  return request({
    url: '/user',
    method: 'get'
  })
}

/**
 * 更新管理员(博主)信息
 * @param data FormData
 */
export function updateAdmin(data) {
  return request({
    url: '/admin',
    method: 'put',
    data: qs.stringify(data)
  })
}

export function login(data) {
  return request({
    url: '/admin',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function logout() {
  return request({
    url: '/admin',
    method: 'delete'
  })
}
