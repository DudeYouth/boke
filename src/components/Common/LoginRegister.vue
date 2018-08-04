<template>
    <div>
        <el-card class="box-card">
            <el-col :span="24" class="button-lists">
                <el-button size="medium" class="big-button" @click="RegisterDialogVisible = true" type="primary">注册</el-button>
            </el-col>
            <el-col :span="24" class="button-lists">
                <el-button size="medium" class="big-button" @click="LoginDialogVisible = true" >登录</el-button>
            </el-col>
        </el-card>
        <login-dialog v-bind:dialogVisible="LoginDialogVisible" v-on:close="closeLoginDialog"></login-dialog>
        <register-dialog v-bind:dialogVisible="RegisterDialogVisible" v-on:close="closeRegisterDialog"></register-dialog>
    </div>

</template>
<script>
    import LoginDialog from './Login';
    import RegisterDialog from './Register';
    export default{
        name:"LoginRegister",
        components:{
            LoginDialog,
            RegisterDialog,
        },
        data() {
            return {
                LoginDialogVisible:false,
                RegisterDialogVisible:false,
            }
        },
        methods: {
            closeLoginDialog:function(){
                this.LoginDialogVisible=false;
            },
            closeRegisterDialog:function(){
                this.RegisterDialogVisible=false;
            }
        }
    }
</script>
<style>
    .big-button{
        width:100%;
    }
</style>
