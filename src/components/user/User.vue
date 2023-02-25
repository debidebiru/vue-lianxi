<template>
    <div>
        <el-tree 
        :data="menus" 
        show-checkbox 
        node-key="id" 
        :props="defaultProps"
         ref="tree">
        </el-tree>
        <el-button @click="getCheckNodes">Node节点获取</el-button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            menus:[],
            defaultProps:{
                label:'name',
                childern:'childern'

            }
        }
    },
    created(){
            this.menus=[...this.$router.options.routes]
        },
        methods:{
            getCheckNodes(){
                let arr=this.$refs.tree.getCheckedNodes()
                console.log(arr)
            }
        }
        
}
</script>