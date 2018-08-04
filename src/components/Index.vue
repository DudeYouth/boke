
<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row :gutter="20">
                    <el-card class="box-card cancel-card-padding">
                        <el-col :span="4" class="release-btn ">
                            <router-link to="/ReleaseArticle" class="ptext">
                                <i class="el-icon-document"></i>&nbsp;
                                发布文章
                            </router-link>
                        </el-col>
                        <el-col :span="4" class="release-btn ptext">
                            <router-link to="/ReleaseMood" class="ptext">
                                <i class="el-icon-view"></i>&nbsp;
                                发布心情
                            </router-link>
                        </el-col>
                        <el-col :span="4" class="release-btn ptext">
                            <i class="el-icon-bell"></i>&nbsp;
                            发布话题
                        </el-col>
                    </el-card>
                </el-row>
                <el-row :gutter="20">
                    
                    <el-card class="box-card lists-box">
                        <router-link to="/ContentInfo">
                            <p class="lists-box-tag"><span class="lists-box-name">吧啦吧</span><span>啦合法萝莉╱Coser╱Lolita ／JK制服／小说／LOL硬核玩家</span></p>
                            <h4 class="lists-box-title">想男朋友出一部分钱买个ipad 过分吗？</h4>
                            <div class="lists-box-content">我发现，现在有的妹子，一到要钱要彩礼的时候都喜欢说一句 “我又不是真的要钱，只是看他的态度！” 那人家给了你别真要啊。。。 不给你别真跳脚急眼啊。。。</div>
                        </router-link>
                        <div class="lists-box-footer">
                            <el-button type="primary" plain>赞同10k</el-button>
                            <el-button type="primary" plain><i class="el-icon-caret-bottom"></i></el-button>
                            <el-button><i class="el-icon-tickets"></i>10条评论</el-button>
                            <el-button><i class="el-icon-share"></i> 分享</el-button>
                            <el-button><i class="el-icon-star-off"></i> 收藏</el-button>
                            <el-button><i class="el-icon-bell"></i>  感谢</el-button>
                        </div>
                    </el-card>
                    
                </el-row>
            </el-col>
            <el-col :span="8">
                <LoginRegister></LoginRegister>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import LoginRegister from './Common/LoginRegister';
    export default {
        name: 'Index',
        components:{
            LoginRegister
        },
        data() {
            return {
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
</style>