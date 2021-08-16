import request from "@/utils/request";

export function fetchListAll() {
    return request({
        url: '/preferenceArea/list',
        method: 'get'
    })
}