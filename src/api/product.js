import request from "@/utils/request";

export function fetchList(params) {
    return request({
        method: 'get',
        url: '/product/list',
        params: params
    })
}

export function updatePublishStatus(params) {
    return request({
        method: 'post',
        url: '/product/update/publishStatus',
        params: params
    })
}

export function updateRecommendStatus(params) {
    return request({
        url: '/product/update/recommendStatus',
        method: 'post',
        params: params
    })
}

export function updateNewStatus(params) {
    return request({
        url: '/product/update/newStatus',
        method: 'post',
        params: params
    })
}

export function updateDeleteStatus(params) {
    return request({
        url: '/product/update/deleteStatus',
        method: 'post',
        params: params
    })
}

export function getProduct(id) {
    return request({
        method: 'get',
        url: '/product/get/' + id
    })
}

export function updateProduct(id, data) {
    return request({
        method: 'post',
        url: '/product/update/' + id,
        data: data
    })
}

export function createProduct(data) {
    return request({
        method: 'post',
        url: '/product/create/',
        data: data

    })
}