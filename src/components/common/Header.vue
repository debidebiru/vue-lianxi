<template>
    <div class="header">
        <div class="title">学生管理系统</div>
        <div class="user">{{name}}</div>
    </div>
    
    </template>
    
    <script>
import { getToken } from '../../../untils/setToken';

    
    
    export default{
        name:"Header",
        data(){
            return{
                name:''
            }
        },
    created(){
        this.name=getToken('username')
    }
    }
    
    </script>
    
    <style lang="less" scoped>
    .header{
        background: rgb(65, 133, 206);
        color: #fff;
        display: flex;
        justify-content: space-between;
        .title{
            width: 200px;
            font-size: 24px;
            line-height: 50px;
        }
        .user{
            width: 200px;
            line-height: 50px;
        }
    }
    
    </style>