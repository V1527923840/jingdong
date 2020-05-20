<template>
    <div>
        <v-header :backFlag='true' title="新闻列表"></v-header>
       
        <!-- 新闻列表 -->
        <div class="newlist">
            <ul>
                <li v-for="(item,index) in newList" :key="index">
                    <router-link :to="{ name:'NewsDetail',params:{id:item.id}}">
                        <img :src="item.pic">
                        <div class="concent">
                            <h4>{{item.title}}</h4>
                            <div class="news-desc">
                                <p>点击数:{{item.click}}</p>
                                <p>发表时间:{{item.date|converTime('YYYY-MM-DD')}}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <van-divider dashed v-if="moreFlag">没有更多了</van-divider>
        </div>
    </div>
</template>
<script>
import {Get,Post} from '../../http'
export default {
    name:'NewsList',
    data(){
        return{
            newList:[],//新闻数据
            moreFlag:false
        }
    },methods:{
        //获取新闻列表
        getData(num){
            Get(`/news/list/${num}`)
            .then(res=>{
                console.log(res);
                if(res.data.errcode === 200){
                    if(num===1){
                        this.newList = res.data.list;
                    }else{
                        this.newList = this.newList.concat(res.data.list)
                    }
                    if(this.newList.length === res.data.total){
                        this.moreFlag = true;
                    }
                }else{
                    this.$toast(res.data.message);
                }
            })
        },
    },created(){
        this.getData(1)
    }
}
</script>
<style scoped lang='scss'>
    @import '@/assets/css/News/NewsList.scss'
</style>


