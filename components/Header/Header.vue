<template>
        <div  id="Header">
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        :router="true"
                        active-text-color="#ffd04b">
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/user">home</el-menu-item>
                </el-menu>
        </div>
</template>
<script>

export default {
        props: ['activeIndex'],
        data(){
                return{
                        
                }
        },
        mounted(){

        },
        methods:{
                handleSelect(key, keyPath) {
                        // console.log(key, keyPath);
                }
        },
}
</script>
<style scoped>
        #Header {
                height: 60px;
                line-height: 60px;
                border-bottom: 1px solid #ccc;
                color: pink;
                box-sizing: border-box;
        }
</style>