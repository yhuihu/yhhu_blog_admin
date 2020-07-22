import request from '@/utils/request'
import qs from 'qs'

export function fetchCarouselList(page, size) {
  return request({
    url: '/carousel',
    params: { page, size }
  })
}

export function deleteCarousel(id) {
  return request({
    url: '/admin/carousel',
    method: 'delete',
    params: { id }
  })
}

export function addCarousel(data) {
  return request({
    url: '/admin/carousel',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function updateCarousel(data) {
  return request({
    url: '/admin/carousel',
    method: 'put',
    data: qs.stringify(data)
  })
}
