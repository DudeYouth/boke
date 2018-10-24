<template>
    <el-dialog :visible="dialogVisible" width="30%" center :before-close="close">
        <h1 class="login-dialog-title">BOKE</h1>
        <h4 class="login-dialog-msg">BOKE您的烂笔头</h4>
        <el-row>
            <el-col :span="18" :offset="3">
                <el-form ref="formData" :rule="formRules" :model="formData">
                    <div class="login-dialog-top15">
                        <el-input placeholder="请输入你的手机号码" v-model="formData.mobile">
                            <template slot="prepend"><i class="el-icon-message"></i></template>

                        </el-input>
                    </div>
                    <div class="login-dialog-top15">
                        <el-input placeholder="请输入您的邮箱账号" v-model="formData.email">
                            <template slot="prepend"><i class="el-icon-message"></i></template>

                        </el-input>
                    </div>
                    <div class="login-dialog-top15">
                        <el-input placeholder="请输入手机验证码" v-model="formData.code">
                            <template slot="prepend"><i class="el-icon-picture-outline"></i></template>
                            <template slot="append"><el-button type="primary" @click="sendCode">发送验证码</el-button></template>
                        </el-input>
                    </div>
                </el-form>
            </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-row>
                <el-col :span="18" :offset="3">
                    <el-button type="primary" style="width:100%" @click="registerSubmit">注册</el-button>
                    <p class="login-dialog-tip">注册即代表同意《BOKE协议》《隐私政策》</p>
                </el-col>
            </el-row>
        </span>
    </el-dialog>
</template>
<script>
export default {
    name: "RegisterDialog",
    props: ["dialogVisible"],
    data() {
        const checkMoblie = (rule, value,callback)=>{
            if( !/^1[35678][0-9]{9}$/.test(value) ){
                callback(new Error('请输入正确的手机号码！'));
            }else{
                callback();
            }
        }
        return {
            formData: {
                mobile: "",
                email: "",
                code: ""
            },
            formRules:{
                mobile:[
                    {
                        require:true,
                        message:"请输入您的手机号码",
                        trigger:'blur'
                    },
                    {
                        validator: checkMoblie,  
                        trigger:'blur'
                    },
                ]
            }
        };
    },
    methods: {
        sendCode() {},
        registerSubmit() {
            this.$refs["formData"].validate((valid) => {
                if (valid) {
                    this.$axios.post('/user/register',this.formData).then(res=>{
                        if( res.status===100 ){
                            this.$message({
                                message: '注册成功！',
                                type: 'success'
                            });
                        }else{
                            this.$message({
                                message: res.content,
                                type: 'error'
                            });
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        close() {
            this.$emit("close");
        }
    }
};
</script>
<style>
    .el-dialog__header {
        padding: 0px !important;
    }
    .login-dialog-msg,
    .login-dialog-title {
        text-align: center;
    }
    .login-dialog-title {
        text-align: center;
        color: #0084ff;
    }
    .login-dialog-top15 {
        margin-top: 15px;
    }
    .login-dialog-top30 {
        margin-top: 30px;
    }
    .login-dialog-tip {
        color: #8590a6;
        margin: 10px 0;
        text-align: left;
        font-size: 14px;
    }
</style>
