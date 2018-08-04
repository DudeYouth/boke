<template>
    <h3 class="item-title"><span class="item-title-icon"></span>{{content}}</h3>
</template>

<script>
    export default {
        name:"ItemTitle",
        props:["content"],
        data(){
            return {
            }
        }
    }
</script>
<style>
    .item-title .item-title-icon{
        display:inline-block;
        width:3px;
        height:18px;    
        margin-right:10px;
        background-color:#0099FF;
        vertical-align: middle;
    }
</style>