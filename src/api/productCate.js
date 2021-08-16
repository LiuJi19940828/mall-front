import request from "@/utils/request";

export function fetchListWithChildren() {
    return request({
        url: '/productCate/withChildren',
        method: 'get'
    })
}

export function getFirstMenuListWithChildren(params) {
    return request({
        method: 'get',
        url: '/productCate/list',
        params: params
    })
}

export function getCategoryParentMenuList() {
    return request({
        method: 'get',
        url: '/productCate/parentMenu'
    })
}

export function create(data) {
    return request({
        method: 'post',
        url: '/productCate/create',
        data: data
    })
}

export function getChildMenuList(id, params) {
    return request({
        method: 'get',
        url: '/productCate/childMenu/' + id,
        params: params
    })
}

export function deleteCate(id) {
    return request({
        method: 'delete',
        url: '/productCate/delete/' + id
    })
}

export function getCategory(id) {
    return request({
        method: 'get',
        url: '/productCate/get/' + id
    })
}

export function update(data) {
    return request({
        method: 'post',
        url: '/productCate/update',
        data: data
    })
}
