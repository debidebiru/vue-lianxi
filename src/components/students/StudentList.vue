<template>
  <div class="studentList">
    <!-- 查询页面 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
  <el-form-item label="姓名">
    <el-input v-model="formInline.name" placeholder="输入姓名查询"></el-input>
  </el-form-item>
  <el-form-item >
    <el-button type="primary" @click="find">查询</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="reset">重置</el-button>
  </el-form-item>
</el-form>


    <el-table :data="compStudent" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="age" label="年龄" align="center"></el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center"></el-table-column>
      <el-table-column prop="number" label="学号" align="center"></el-table-column>
      <el-table-column prop="class" label="班级" align="center"></el-table-column>
      <el-table-column prop="state_text" label="状态" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" align="center"></el-table-column>
      <el-table-column prop="phone" label="电话" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>

</template>

<script>
import { students, studentDel } from '../../api/api';
export default {
  data() {
    return {
      tableData: [],
      currentPage:1,
      pageSize:10,
      total:0 ,
      formInline:{
        name:''
      }
    }
  },
  created() {
    this.getData()
  },
  computed:{
   compStudent(){
    return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
   } 
  },
  methods: {
    find(){
      this.getData(this.formInline)
    },
    reset(){
      this.formInline={}
      this.getData(this.formInline)
    },
    handleSizeChange(val) {
      this.pageSize=val
      this.currentPage=1
      },
      handleCurrentChange(val) {
        this.currentPage=val
      },
    getData(params) {
      students(params)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            this.tableData = res.data.data
            this.total=res.data.total
            //遍历tableData
            this.tableData.forEach(item=>{
              //性别判断
              item.sex===1? item.sex_text="男" : item.sex_text="女";
              //状态判断
              if(item.state==1){
                item.state_text="已入学"
              }else if(item.state==2){
                item.state_text="未入学"
              }else{
                item.state_text="休学中"
              }
            })
            
          }
        })
    },
    del(row){
      studentDel(row.id).then(res=>{
        console.log(res);
        if(res.data.status===200){
          this.$message({message:"删除数据成功", type:'success'})
          this.getData()
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
.studentList{
  .demo-form-inline,el-form-item{
    text-align: left;
  }
  
  .el-pagination{
    margin-top: 30px;
    text-align: left;
  }
}
</style>