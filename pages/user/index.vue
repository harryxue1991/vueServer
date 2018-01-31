<template>
        <div>
                <h1 class="title">hello world</h1>
                <div>{{title}}</div>
        </div>
</template>
<script>
        import axios from 'axios'
        export default {
                layout: 'blog',
                asyncData (con) {  //用于异步加载
                        return axios.get('http://127.0.0.1:3000/xin')
                        .then((res) => {
                                return { 
                                        title: res.data.title 
                                }
                        })
                }
        }
</script>
<style scoped>
        .title {
                color: pink;
                font-size: 34px;
        }
</style>

