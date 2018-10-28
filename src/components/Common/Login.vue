<template>
    <el-dialog :visible="dialogVisible" class="login-box" width="30%" center :before-close="close">
        <h1 class="login-dialog-title">BOKE</h1>
        <h4 class="login-dialog-msg">BOKE您的烂笔头</h4>
        <el-row>
            <el-col :span="18" :offset="3">
                <el-form ref="formData" :rules="formRules" :model="formData">
                    <div class="login-dialog-top15">
                        <el-form-item prop="account">
                            <el-input placeholder="请输入您的手机号码或者邮箱账号" v-model="formData.account" clearable>
                                <template slot="prepend"><i class="el-icon-message"></i></template>
                                
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="login-dialog-top15">
                        <el-form-item prop="password">
                            <el-input placeholder="请输入您的登陆密码" type="password" v-model="formData.password" clearable>
                                <template slot="prepend"><i class="el-icon-tickets"></i></template>
                                
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="login-dialog-top15">
                        <el-form-item prop="code">
                            <el-input placeholder="请输入验证码" v-model="formData.code" >
                                <template slot="prepend"><i class="el-icon-picture-outline"></i></template>
                                <template slot="suffix"><img class="code-image" @click="changeCode" :src="'http://www.ricky.kim/server/index/verify_code?id='+checkCodeId" /></template>
                            </el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-row>
                <el-col :span="18" :offset="3">
                    <el-button type="primary" style="width:100%" @click="loginSubmit">登 录</el-button>
                </el-col>
            </el-row>
        </span>
    </el-dialog>
</template>
<script>
import validate from "@/ulit/validate";
export default {
    name: 'LoginDialog',
    props:['dialogVisible'],
    data() {
        const checkEmailMobile = (rule, value,callback)=>{
            if( !validate.checkMobile(value)&&!!validate.checkEmail(value) ){
                callback(new Error('请输入正确的账号！'));
            }else{
                callback();
            }
        }
        const checkPasswd = (rule, value,callback)=>{
            if( !validate.checkPasswd(value) ){
                callback(new Error('请输入正确的密码！'));
            }else{
                callback();
            }
        }
        return {
            checkCodeId:0,
            formData:{
                account:'',
                password:'',
                code:'',
            },
            formRules:{
                account:[
                    {
                        type:'email',
                        validator:checkEmailMobile,
                    }
                ],
                password:[
                    {
                        required:true,
                        message:'请输入您的密码',
                        trigger:'blur'
                    },
                    {
                        validator: checkPasswd, 
                        trigger:'blur'
                    }, 
                ],
                code:[
                    {
                        required:true,
                        message:'请输入图形验证码',
                        trigger:'blur'
                    }
                ]
            }
        }
        
    },
    methods: {
        // 切换验证码
        changeCode(){
            this.checkCodeId = new Date().getTime();
        },
        loginSubmit:function(){
            this.$refs['formData'].validate((valid)=>{
                if( valid ){
                    this.$axios.post('/user/login',this.formData).then(res=>{
                        this.changeCode();
                        console.log(document.cookie,9999999);
                        console.log(res);
                    }).catch(()=>{
                        this.changeCode();
                    })
                }
            })
        },
        close:function(){
            this.$emit('close');
        }
    }
}
</script>
<style lang="less">
.login-box{
    .code-image{
        width:80px;
        height:97%;
        margin-right:-5px;
        border:1px solid rgba(0,0,0,0);
        border-left:1px solid #dcdfe6
    }
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
}


</style>