<template>
  <div>
    <ul>
        <li v-for="(item,index) in goods" :key="index">
            <router-link :to="{name:'GoodDetail',query:{id:item.id}}">
                <img :src="item.img_url" alt="">
                <div class="title">{{item.title | titleFilter(12)}}</div>
                <div class="desc">
                    <div class="sell">
                        <span>￥{{item.sell_price}}</span>
                        <div>{{item.payments_num}}人付款</div>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'v-goodslist',
    props:['goods'],
    data(){
        return{

        }
    }
}
</script>

<style scoped lang='scss'>
@import '@/assets/css/Goods/Goods.scss';
</style>