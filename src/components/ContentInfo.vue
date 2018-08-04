
<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row :gutter="20">
                    <el-card class="box-card lists-box">
                        <h4 class="lists-box-title">想男朋友出一部分钱买个ipad 过分吗？</h4>
                        <div class="lists-box-content">我发现，现在有的妹子</div>
                        <div class="margin-top15">
                            <el-tag
                                class="margin-right15"
                                type="success"
                                v-for="type in types"
                                :key="type.name">
                                {{type.name}}
                            </el-tag>
                        </div>
                        <div class="margin-top15">
                            <el-tag
                                class="margin-right15"
                                v-for="tag in tags"
                                :key="tag.name">
                                {{tag.name}}
                            </el-tag>
                        </div>
                        <div class="lists-box-footer">
                            <el-button type="primary" plain>赞同10k</el-button>
                            <el-button type="primary" plain><i class="el-icon-caret-bottom"></i></el-button>
                            <el-button><i class="el-icon-tickets"></i>10条评论</el-button>
                            <el-button><i class="el-icon-share"></i> 分享</el-button>
                            <el-button><i class="el-icon-star-off"></i> 收藏</el-button>
                            <el-button><i class="el-icon-bell"></i>  感谢</el-button>
                        </div>
                    </el-card>
                    <el-card class="box-card">
                        <p>我发现，现在有的妹子，一到要钱要彩礼的时候都喜欢说一句 “我又不是真的要钱，只是看他的态度！” 那人家给了你别真要啊。。。 不给你别真跳脚急眼啊。。。</p>
                    </el-card>
                    <Comment ></Comment>
                </el-row>
            </el-col>
            <el-col :span="8">
                <user-msg></user-msg>
                <works></works>
                <relevant></relevant>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Comment from './Common/Comment';
    import Works from './Common/Works';
    import Relevant from './Common/Relevant';
    import UserMsg from './Common/UserMsg';
    export default {
        name: 'Index',
        components:{
            Comment,
            Works,
            Relevant,
            UserMsg
        },
        data() {
            return {
                types:[{
                    name:'类型1'
                },{
                    name:'类型2'
                }],
                tags:[{
                    name:'标签1'
                },{
                    name:'标签2'
                }],
            }
        },
        methods: {
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
</style>