<template>
    <el-dialog :visible="dialogVisible" width="30%" center :before-close="close">
        <h1 class="login-dialog-title">BOKE</h1>
        <h4 class="login-dialog-msg">BOKE您的烂笔头</h4>
        <el-row>
            <el-col :span="18" :offset="3">
                <div class="login-dialog-top15">
                    <el-input placeholder="请输入您的邮箱账号" v-model="email">
                        <template slot="prepend"><i class="el-icon-message"></i></template>
                        
                    </el-input>
                </div>
                <div class="login-dialog-top15">
                    <el-input placeholder="请输入验证码" v-model="code">
                        <template slot="prepend"><i class="el-icon-picture-outline"></i></template>
                        <template slot="append"><img style="width:50px;" src="../../../static/images/yanzhengma.jpg" /></template>
                    </el-input>
                </div>

            </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-row>
                <el-col :span="18" :offset="3">
                    <el-button type="primary" style="width:100%" @click="closeDialog">注册</el-button>
                    <p class="login-dialog-tip">注册即代表同意《BOKE协议》《隐私政策》</p>
                </el-col>
            </el-row>
        </span>
    </el-dialog>
</template>
<script>
    export default {
        name: 'RegisterDialog',
        props:['dialogVisible'],
        data() {
            return {
                email:'',
                code:'',
            }
            
        },
        methods: {
            closeDialog:function(){
                this.$emit('close');
            },
            close:function(){
                this.$emit('close');
            }
        }
    }
</script>
<style>
.el-dialog__header{
    padding:0px!important;
}
.login-dialog-msg,.login-dialog-title{
    text-align:center;
}
.login-dialog-title{
    text-align:center;
    color:#0084ff;
}
.login-dialog-top15{
    margin-top:15px;
}
.login-dialog-top30{
    margin-top:30px;
}
.login-dialog-tip{
    color:#8590a6;
    margin:10px 0;
    text-align:left;
    font-size:14px; 
}

</style>