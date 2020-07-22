import request from '@/utils/request'
import qs from 'qs'

export function fetchBlog(id) {
  return request({
    url: '/blog/' + id + '/detail',
    method: 'get'
  })
}

export function fetchBlogList(page, size) {
  return request({
    url: '/blog',
    params: { page, size }
  })
}

export function deleteBlog(id) {
  return request({
    url: '/admin/blog',
    method: 'delete',
    params: { id }
  })
}

export function addBlog(data) {
  return request({
    url: '/admin/blog',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function updateBlog(data) {
  return request({
    url: '/admin/blog',
    method: 'put',
    data: qs.stringify(data)
  })
}

