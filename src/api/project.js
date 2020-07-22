import request from '@/utils/request'
import qs from 'qs'

export function fetchProjectList(page, size) {
  return request({
    url: '/admin/project',
    params: { page, size }
  })
}

export function deleteProject(id) {
  return request({
    url: '/admin/project',
    method: 'delete',
    params: { id }
  })
}

export function addProject(data) {
  return request({
    url: '/admin/project',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function updateProject(data) {
  return request({
    url: '/admin/project',
    method: 'put',
    data: qs.stringify(data)
  })
}
