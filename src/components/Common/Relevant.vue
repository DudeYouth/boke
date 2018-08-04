<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>相关文章</span>
        </div>
        <div class="works-list">
            <p><span class="works-list-key">参与 3 次公共编辑</span><span class="float-right ptext">1230&nbsp;人阅读</span></p>
            <p><span class="works-list-key">rciky</span><span class="ptext">&nbsp;创建</span></p>
        </div>
        <div class="works-list">
            <p><span class="works-list-key">参与 3 次公共编辑</span><span class="float-right ptext">1230&nbsp;人阅读</span></p>
            <p><span class="works-list-key">rciky</span><span class="ptext">&nbsp;创建</span></p>
        </div>
    </el-card>
</template>
<script>
export default{
    name:"Relevant",
    data(){
        return {}
    }
}
</script>
<style>
.works-list{
    margin-bottom:25px;
}
.works-list p{
    margin:5px 0px;;
}
.works-list .works-list-key{
    color:#175199;
}
</style>
