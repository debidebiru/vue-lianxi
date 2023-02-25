<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>自行车后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="form" ref="form">
                <el-form-item label="用户名" prop="username" :rules="[
                    { require: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 4, max: 10, message: '请输入4-10位的字符', trigger: 'blur' },
                ]">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" :rules="[
                    { require: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 10, message: '请输入6-10位的密码', trigger: 'blur' },
                ]">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>

</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
        };
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form);
                } else {
                    console.error(this.form);
                }
            })
        }
    },
}
</script>
<style lang="less">
.login {
    background: url("../img/R.jpg") no-repeat center;
    background-size: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
}

.box-card {
    width: 450px;
    margin: 150px auto;

    .el-button {
        width: 330px;
    }

    .clearfix span {
        font-size: 20px;
    }
}
</style>