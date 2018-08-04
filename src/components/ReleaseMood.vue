<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row :gutter="20">
                    <el-card class="box-car margin-top15" >
                        <div slot="header" class="clearfix">
                            <span>发布话题</span>
                        </div>
                        <item-title content="标题"></item-title>
                        <el-input  placeholder="请输入标题" v-model="title"></el-input>
                        <item-title content="内容"></item-title>
                        <el-input  type="textarea" v-model="content" :autosize="{ minRows: 8, maxRows: 10}" placeholder="请输入标题"></el-input>
                        <item-title content="分类"></item-title>
                        <el-select v-model="type" multiple placeholder="请选择" style="width:100%;">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <item-title content="标签"></item-title>
                        <el-select v-model="tag"   multiple placeholder="请选择" style="width:100%;">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-row class="margin-top15">
                            <el-button type="primary" round>发表</el-button>
                        </el-row>
                    </el-card>  
                </el-row>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <el-col :span="24" class="button-lists">
                        <el-button size="medium" class="big-button" @click="RegisterDialogVisible = true" type="primary">注册</el-button>
                    </el-col>
                    <el-col :span="24" class="button-lists">
                        <el-button size="medium" class="big-button" @click="LoginDialogVisible = true" >登录</el-button>
                    </el-col>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import ItemTitle from './Common/ItemTitle'
export default{
    name:"ReleaseMood",
    components:{
        ItemTitle,
    },
    data(){
        return {
            title:'',
            content:'',
            type:'',
            tag:'',
            options:[],

        }   
    },
}
</script>
<style>
    .box-card{
        margin-top:15px;
    }
    .lists-box{

    }
    .lists-box-tag{
        font-size:14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #646464;
    }
    .lists-box-name{
        font-weight:600;
    }
    .lists-box-footer{
        padding-top:15px;
    }
    .big-button{
        width:100%;
    }
    .button-lists{
        margin:10px 0px;
    }
    .release-btn{
        padding:15px 0px;
        text-align:center;
    }
    .release-btn:hover{
        color:#0099FF;
    }
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>