import request from "@/utils/request";

export function fetchListALL() {
    return request({
        url: '/subject/list',
        method: 'get'
    })
}