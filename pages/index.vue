<template>
        <div>
                <Header :activeIndex="activeIndex"></Header>
                <nuxt-link to="user">跳转至user</nuxt-link>
                <h2 class="subtitle" @click="aaa">
                        Nuxt.js project
                </h2>
        </div>
</template>

<script>
import Header from '~/components/Header/Header.vue'

export default {
        layout: 'default',
        data() {
                return {
                        activeIndex: '/'
                }
        },
        components: {   
                Header
        },
        mounted() {
                
        },
        methods: {
                aaa() {
                        alert(1);
                }
        }
}
</script>

<style scoped >
        
</style>
