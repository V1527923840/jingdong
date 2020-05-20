<template>
  <div>
      <v-header :backFlag='true' title="商品展示"></v-header>
      <div class="content">
        <v-swipe :imgs='imgs'></v-swipe>

        <div class="product-desc">
            <ul>
                <li><span class="product-desc-span">
                    {{info.title}}
                </span></li>
                <li class="price-li">市场价：
                    <s>￥{{info.market_price}}</s> 销售价：<span>￥{{info.sell_price}}</span></li>
                <li class="number-li">购买数量：<span @click="subtra">-</span><span>{{goodsNum}}</span><span @click="add">+</span></li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="addShopCart">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        
        <transition name="ballmove" @after-enter='afterEnter' >
            <div class="ball" v-if="isShow"></div>
        </transition>

        <div class="product-props">
            <ul>
                <li>--- 商品参数 ---</li>
                <li>商品货号：{{info.goods_no}}</li>
                <li>库存情况：{{info.stock_quantity}}件</li>
                <li>上架时间：{{info.add_time | converTime('YYYY-MM-DD')}}</li>
            </ul>
        </div>

        <div class="product-info">
            <ul>
                <li>
                    <mt-button type="primary" size="large" plain >图文介绍</mt-button>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </li>
            </ul>
        </div>

      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false,//加入购物车动画小球显示flag
            imgs:[
                {imgUrl:'../../static/image/lunbo1.png'},
                {imgUrl:'../../static/image/lunbo2.png'},
                {imgUrl:'../../static/image/lunbo3.png'},
                {imgUrl:'../../static/image/lunbo4.png'},
            ],
            info:{
                id:10,
                title:'Nike/耐克正品 2019新款男子运动休闲飞线减震气垫跑步鞋CI3706',
                market_price:100,
                sell_price:20,
                goods_no:'KB1234556',
                stock_quantity:100,
                add_time:new Date().getTime(),
            },
            goodsNum:1,//数量
        }
    },
    methods:{
        //小球动画钩子函数enter和afterEnter
        afterEnter(){
            this.isShow = false;
        },
        //数量减少
        subtra(){
            if(this.goodsNum === 1) return ;
            this.goodsNum--;
        },
        //数量增加
        add(){
            this.goodsNum++;
        },
        //加入购物车
        addShopCart(){
            this.isShow = true;
            //将数据添加到vuex中的购物车数据中
            this.$store.dispatch('addNumByAct',this.goodsNum);
        },
        afterEnter(){
            this.isShow = false
        }
    },
    created(){
        this.info.id=1;
    }
}
</script>

<style scoped lang='scss'>
@import '@/assets/css/Goods/GoodDetail.scss';

</style>>