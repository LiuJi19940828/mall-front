import request from "@/utils/request";

export function fetchListByProductAttrCateId(id,params) {
    return request({
        method: 'get',
        url: '/productAttr/get/'+id,
        params: params
    })
}