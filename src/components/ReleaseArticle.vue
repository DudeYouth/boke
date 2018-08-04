
<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row :gutter="20">
                    
                    <el-card class="box-car margin-top15" >
                        <div slot="header" class="clearfix">
                            <span>发布文章</span>
                        </div>
                        <item-title content="标题"></item-title>
                        <el-input v-model="title" placeholder="请输入标题"></el-input>
                        <item-title content="文章内容"></item-title>
                        <editor class="editor" :value="content"  :setting="editorSetting" @input="(content)=> content = content"></editor>

                        <item-title content="分类"></item-title>
                        <el-select v-model="types"  multiple placeholder="请选择" style="width:100%;    ">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <item-title content="标签"></item-title>
                        <el-select v-model="tags" multiple placeholder="请选择" style="width:100%;    ">
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
    import Editor from './Common/Editor'
    import ItemTitle from './Common/ItemTitle'
    export default {
        name: "ReleaseArticle",
        data: function () {
            return {
                content:'我是富文本编辑器的内容',
                //tinymce的配置信息 参考官方文档 https://www.tinymce.com/docs/configure/integration-and-setup/
                editorSetting:{
                    height:400,
                },
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                title:'',
                content:'',
                types: [],
                tags: [],
            }
        },
        components:{
            Editor,
            ItemTitle,
        },
        methods:{

        }
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