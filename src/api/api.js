import service from "../service.js";
import qs from "qs";
//登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}
//学生列表查询接口
export function students(params) {
    return service({
        method: 'get',
        url: '/students',
        params
    })
}
//学生列表删除接口

export function studentDel(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`
    })
}
//信息列表页
export function info(data) {
    data = qs.stringify(data)
    return service({
        method: 'post',
        url: '/info',
        data
    })
}
//信息修改页
export function updataInfo(data) {
    data = qs.stringify(data)
    return service({
        method: 'put',
        url: '/info',
        data
    })
}
//信息查询页
export function getInfo() {
    return service({
        method: 'get',
        url: '/info',
    })
}
//信息删除页
export function infoDel(id) {
    return service({
        method: 'delete',
        url: `/info/${id}`,
    })
}

//数据概览的接口
export function dataview(){
    return service({
        method:'get',
        url:'/dataview'
    })
}