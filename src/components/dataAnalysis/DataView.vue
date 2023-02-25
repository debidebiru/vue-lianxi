<template>
    <div class="dataView">
        <el-card>
            <div id="main1"></div>
        </el-card>
        <el-card>
            <div id="main2"></div>
        </el-card>
    </div>

</template>

<script>
import {dataview} from '../../api/api'
export default {
    data() {
        return {

        }
    },
    created(){
        dataview().then(res=>{
           if(res.data.status==200){
            let {lengend,xAxis,series}=res.data.data
            this.draw(lengend,xAxis,series)
           }
        })
    },
    mounted() {
        let myChart = this.$echarts.init(document.getElementById('main1'))
        myChart.setOption({
            title: {
                text: '大佬进阶班'
            },
            tooltip: {},
            xAxis: {
                data: ['一班', '二班', '三班', '四班', '五班',]
            },
            yAxis: {},
            series: [{
                name: '人数',
                type: 'bar',
                data: [45, 42, 46, 48, 52]
            }]
        })
    },
    methods:{
        draw(lengend,xAxis,series){
            let myChart1=this.$echarts.init(document.getElementById('main2'))
            let option={
                title:{
                    text:'会话量'
                },
                tooltip:{
                    trigger:'axis'
                },
                lengend:{
                    data:lengend
                },
                xAxis:{
                    type:'category',
                    data:xAxis
                },
                yAxis:{
                    type:'value'
                },
                series:series
            }
            myChart1.setOption(option)
        }  
    }
}

</script>

<style lang="less" scopd>
.dataView {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .el-card{
        width: 50%;
        #main1,#main2{
            height: 500px;
        }
    }
}
</style>