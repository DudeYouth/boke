<template>
    <el-card class="box-card ">
        <div slot="header" class="clearfix">
            <span>关于作者</span>
        </div>
        <el-row>
            <el-col :span="6">
                <img class="user-msg-avatar" src="static/images/avatar_default.png" />
            </el-col>
            <el-col :span="18">
                <h3 style="margin-bottom:5px;text-indent:5px;">心中的信仰</h3>
                <p class="margin-top0" style="text-indent:5px">市场营销、品牌战略、产品开发</p>
            </el-col>
        </el-row>
        <el-row class="text-center ">
            <el-col :span="8"  >
                <p class="ptext">话题</p>
                <h2>4</h2>
            </el-col>
            <el-col :span="8" >
                <p class="ptext">文章</p>
                <h2>6</h2>
            </el-col>
            <el-col :span="8">
                <p class="ptext">关注着</p>
                <h2>6</h2>
            </el-col>
        </el-row>
        <el-col class="margin-bottom15 ">
            <el-button class="big-button" type="primary">关注他</el-button>
        </el-col>
    </el-card>
</template>
<script>
export default{
    name:"UserMsg",
    data(){
        return {

        }
    }
}
</script>
<style>
.user-msg-avatar{
    width:100%;
}
.big-button{
    width:100%;
}
</style>