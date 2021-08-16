import request from "@/utils/request";

export function fetchList() {
    return request({
        method: 'get',
        url: '/brand/list'
    })
}