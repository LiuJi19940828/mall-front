import request from "@/utils/request";

export function fetchList(param) {
    return request({
        method: 'get',
        url: '/productAttrCate/list',
        params: param
    })
}

export function getAttrList() {
    return request({
        method: 'get',
        url: '/productAttrCate/attr/list'
    })
}