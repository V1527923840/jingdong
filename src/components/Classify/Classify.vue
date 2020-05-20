<template>
    <div>
        <v-header :backFlag='false' title="分类"></v-header>
        
        <div class="classify" :style="{height:Height+'px'}">
            <div class="classify_content">
                <van-sidebar v-model="activeKey" @change="classifyChange">
                    <van-sidebar-item v-for="item in classifyList" :key="item.id" :title="item.title"/>
                </van-sidebar>
            </div>
            <div class="grid_content">
                <router-view/>
            </div>  
        </div>
    </div>
</template>
<script>
import {Get,Post} from '../../http'
import BScroll from '@better-scroll/core';
export default {
    data(){
        return{
            Height:'',//侧边导航栏的高度
            activeKey:'',
            classifyList:[],
        }
    },
    methods:{
        classifyChange(index){
            // console.log(this.classifyList[index].id);
            this.$store.dispatch('setClassifyIDByAct',this.classifyList[index].id);
        }
    },
    created(){
        Get('/classifyList')
        .then(res=>{
            console.log(res)
            if(res.data.errcode===200){
                this.classifyList = res.data.list
            }
        })
        .catch(err=>err)
    },
    mounted(){
        this.Height = document.body.clientHeight-41-59;
    }
}
</script>
<style scoped lang='scss'>
@import '../../assets/css/Classify/Classify.scss'
</style>

