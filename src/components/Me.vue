<template>
    <div>
        <el-row :gutter="20">
            <el-card class="box-card header-box cancel-card-padding">
                <div class="header-top"></div>
                <div class="header-bottom">
                    <el-col :span="16" :offset="4">
                        <h2>tedu</h2>
                        <p>暂无个人资料</p>
                    </el-col>
                    <el-col :span="4" class="edit-btn">
                        <el-button>编辑资料</el-button>
                    </el-col>
                </div>
                <div class="header-avatar">
                    <img src="static/images/avatar_default.png" />
                </div>
            </el-card>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row :gutter="20">
                    <el-card class="box-card lists-box">
                        <p class="lists-box-tag"><span class="lists-box-name">吧啦吧</span><span>啦合法萝莉╱Coser╱Lolita ／JK制服／小说／LOL硬核玩家</span></p>
                        <h4 class="lists-box-title">想男朋友出一部分钱买个ipad 过分吗？</h4>
                        <div class="lists-box-content">我发现，现在有的妹子，一到要钱要彩礼的时候都喜欢说一句 “我又不是真的要钱，只是看他的态度！” 那人家给了你别真要啊。。。 不给你别真跳脚急眼啊。。。</div>
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
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                    </div>
                    <p>参与 3 次公共编辑</p>
                </el-card>
                <el-card class="box-card text-center cancel-card-padding margin-top15">
                    <el-col :span="12" style="border-right:1px solid #ddd;">
                        <p class="ptext">已关注</p>
                        <h2>4</h2>
                    </el-col>
                    <el-col :span="12">
                        <p class="ptext">被关注</p>
                        <h2>6</h2>
                    </el-col>
                </el-card>
            </el-col>
        </el-row>
        <login-dialog v-bind:dialogVisible="LoginDialogVisible" v-on:close="closeLoginDialog"></login-dialog>
        <register-dialog v-bind:dialogVisible="RegisterDialogVisible" v-on:close="closeRegisterDialog"></register-dialog>
    </div>
</template>
<script>
export default {
    name:"Me",
    data(){
        return {}
    },
    methods:{

    }
}
</script>
<style>
.header-box{
    position: relative;
    margin:15px 0px;
    
}

.header-box .header-top{
    height:150px;
    background: #f3f3f3;
}
.header-box .header-bottom{
    height:90px;
}
.header-box .header-bottom .edit-btn{
    margin-top:40px;
}
.header-box .header-avatar{
    position:absolute;
    left:50px;
    top:80px;
    height:100px;
    width:100px;
    background-color:#f6f6f6;
    border:5px solid #fff;
    border-radius:5px;
    overflow:hidden;
}
.header-box .header-avatar img{
    width:100%;
}
</style>