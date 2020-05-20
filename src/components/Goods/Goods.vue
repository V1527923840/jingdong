<template>
  <div class="goodshow" :style="{height:wrapperHeight + 'px'}" ref="wrapper">
      <v-header :backFlag='true' title="商品展示"></v-header>
          <mt-loadmore :bottom-method="loadBottom"  :bottom-all-loaded="allLoaded" :auto-fill="autoFill" ref="loadmore" style="margin-bottom:55px;margin-top:40px;background-color: rgb(235, 238, 245);">
            <v-goodslist :goods='goods'></v-goodslist>
          </mt-loadmore>
      </div>
</template>

<script>
import {Get,Post} from '../../http'
export default {
    name:'Goods',
    data(){
        return{
            allLoaded:false,//为true时禁止调用拉动函数
            autoFill:false,//自动调用loadBottom直到撑满父容器
            wrapperHeight:0,//父容器高度
            page:1,
            goods:[],//商品数据
        }
    },
    created(e){
        console.log(this.$store.state.searchValue)
        this.goods = this.$route.params.list;
        // this.getGoods(1);
    },
    mounted(){
        //父容器高度（可视） = 设备高度 - 父容器的top
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods:{
        loadBottom(){
            this.getGoods(this.page);
            //通知状态改变
            this.$refs.loadmore.onBottomLoaded();
        },
        //获取商品数据
        getGoods(num){
            let value = this.$store.state.searchValue;
            Get(`/search/${num}/${value}`)
            .then(res=>{
                console.log(res)
                if(res.data.errcode === 200){
                    this.goods = this.goods.concat(res.data.list)
                }
            })
            
        }
    }
}
</script>

<style scoped lang='scss'>
@import '@/assets/css/Goods/Goods.scss';
</style>