<template>
    <el-card class="box-card comment-box">
        <el-row class="comment-box-item">
            <img class="comment-box-avatar" src="static/images/avatar_default.png" />
            <span>ricky</span>
            <span class="ptext">回复</span>
            <span>ricky01</span>
            <span class="float-right">3分钟前</span>
            <p class="comment-box-content">我发现，现在有的妹子，一到要钱要彩礼的时候都喜欢说一句 “我又不是真的要钱，只是看他的态度！”</p>
            <div><span class="comment-box-operation"><i class="el-icon-star-off"></i>&nbsp;566</span><span class="comment-box-operation"><i class="el-icon-message"></i>&nbsp;查看对话</span></div>
        </el-row>
        <el-row class="comment-box-item">
            <img class="comment-box-avatar" src="static/images/avatar_default.png" />
            <span>ricky</span>
            <span class="ptext">回复</span>
            <span>ricky01</span>
            <span class="float-right">3分钟前</span>
            <p class="comment-content">我发现，现在有的妹子，一到要钱要彩礼的时候都喜欢说一句 “我又不是真的要钱，只是看他的态度！”</p>
        </el-row> 
    </el-card>
</template>
<script>
export default{
    name:"Comment",
    data(){
        return {}
    }
}
</script>
<style>
.comment-box{}
.comment-box .comment-box-item{
    line-height:50px;
    margin-bottom:15px;
    border-bottom:1px solid #efefef;
}
.comment-box .comment-box-avatar{
    width:50px;
    vertical-align: middle;
}
.comment-box .comment-box-content{
    margin-top:0;
    margin-bottom:0;
    line-height:30px;
}
.comment-box .comment-box-operation{
    color:#77839c;
    margin-right:25px;
}
</style>
