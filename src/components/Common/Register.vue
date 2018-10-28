<template>
    <el-dialog :visible="dialogVisible" class="register-box" width="30%" center :before-close="close">
        <h1 class="login-dialog-title">BOKE</h1>
        <h4 class="login-dialog-msg">BOKE您的烂笔头</h4>
        <el-row>
            <el-col :span="18" :offset="3">
                <el-form ref="formData" :rules="formRules" :model="formData">
                    <div class="login-dialog-top15">
                        <el-form-item prop="mobile">
                            <el-input placeholder="请输入你的手机号码" v-model="formData.mobile">
                                <template slot="prepend"><i class="el-icon-phone-outline"></i></template>

                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="login-dialog-top15">
                        <el-form-item prop="email">
                            <el-input placeholder="请输入您的邮箱账号" v-model="formData.email">
                                <template slot="prepend"><i class="el-icon-message"></i></template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="login-dialog-top15">
                        <el-form-item prop="passwd">
                            <el-input placeholder="请输入您的密码" type="password" v-model="formData.passwd">
                                <template slot="prepend"><i class="el-icon-tickets"></i></template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="login-dialog-top15">
                        <el-form-item prop="confirmPasswd">
                            <el-input placeholder="请输入确认您的密码" type="password" v-model="formData.confirmPasswd">
                                <template slot="prepend"><i class="el-icon-document"></i></template>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="login-dialog-top15">
                        <el-form-item prop="code">
                            <el-input placeholder="请输入手机验证码" v-model="formData.code">
                                <template slot="prepend"><i class="el-icon-view"></i></template>
                                <template slot="append"><el-button type="primary" :disabled="second!==0"  @click="sendCode">{{second===0?'发送验证码':second+'秒'}}</el-button></template>
                            </el-input>
                        </el-form-item>
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
import validate from "@/ulit/validate";
export default {
    name: "RegisterDialog",
    props: ["dialogVisible"],
    data() {
        const checkMobile = (rule, value,callback)=>{
            if( !validate.checkMobile(value) ){
                callback(new Error('请输入正确的手机号码！'));
            }else{
                callback();
            }
        }
        const checkEmail = (rule, value,callback)=>{
            if( !validate.checkEmail(value) ){
                callback(new Error('请输入正确的联系邮箱'));
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
        const checkConfirmPasswd = (rule, value,callback)=>{
            if( !validate.checkPasswd(value) ){
                callback(new Error('请输入正确的密码！'));
            }else if(this.formData.passwd!==this.formData.confirmPasswd){
                callback(new Error('输入的密码不一致，请重新输入！'));
            }else{
                callback();
            }
        }
        return {
            second:0,
            formData: {
                mobile: "",
                email: "",
                passwd:"",
                confirmPasswd:"",
                code: ""
            },
            formRules:{
                mobile:[
                    {
                        required:true,
                        message:"请输入您的手机号码",
                        trigger:'blur'
                    },
                    {
                        validator: checkMobile,  
                        trigger:'blur'
                    },
                ],
                email:[
                    {
                        required:true,
                        message:'请输入您的联系邮箱',
                        trigger:'blur'
                    },
                    {
                        validator:checkEmail,
                        trigger:'blur'
                    },           
                ],
                passwd:[
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
                confirmPasswd:[
                    {
                        validator: checkConfirmPasswd, 
                        trigger:'blur'
                    }          
                ],
                code:[
                    {
                        required:true,
                        message:'请输入手机验证码',
                        trigger:'blur'
                    },         
                ],
            }
        };
    },
    methods: {
        // 计时器
        timer:(function(){
            let timer = null;
            return (callback,num)=>{
                if( timer ){
                    return false;
                }
                timer = setInterval(()=>{
                    if( num===0){
                        clearInterval(timer);
                        timer = null;
                    }else{
                        num--;
                    }
                    callback&&callback(num);
                },1000);
            }
        })(),
        // 发送手机验证码
        sendCode() {
            this.$refs["formData"].validateField('mobile',(valid) => {
                if (!valid) {
                    this.$axios.get('/Mobilecode/send',{
                        params:{mobile:this.formData.mobile}
                    }).then(res=>{
                        if( res.status===100 ){
                            this.timer((num)=>{
                                this.second = num;
                            },60);
                        }else{
                            this.$message({
                                message: res.desc,
                                type: 'error'
                            });
                        }
                    })
                }
            })

        },
        // 注册提交
        registerSubmit() {
            this.$refs["formData"].validate((valid) => {
                console.log(valid)
                if (valid) {
                    this.$axios.post('/user/register',this.formData).then(res=>{
                        if( res.status===100 ){
                            this.$message({
                                message: res.desc,
                                type: 'success'
                            });
                        }else{
                            this.$message({
                                message: res.desc,
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
<style lang="less">
.register-box{
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
}
</style>
