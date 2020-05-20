<template>
    <div>
        <v-header :backFlag='true' title="购物车"></v-header>

        <!-- 购物车中商品列表 -->
        <div class="goodsList">
            <ul>
                <li v-for="item in goodsList" :key="item.id" @touchstart='start(item.id)' @touchend='end'>
                    <div class="choose" @click="chooseGoods(item)"> 
                        <div :class="['choose-icon1',item.isChoose?'on':'off']"></div>
                        <div :class="['choose-icon2',item.isChoose?'off':'on']"></div>
                    </div>
                    <img :src="item.img" alt="">
                    <div class="detail">
                        <p>{{item.title | titleFilter(24)}}</p>
                        <div class="footer">
                            <p>￥10</p>
                            <div class="number">
                                <span @click="subtra(item)">-</span><span>{{item.goodsNum}}</span><span @click="add(item)">+</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        
        <!-- 合计结算 -->
        <div class="sum_Money">
            <div>
                <span>合计:</span>
                <span>￥{{totalPrice}}</span>
                <mt-button type='danger' size="small">结算</mt-button>
            </div>
            
        </div>
        <!-- 删除商品弹出窗 -->
        <div class="delBtn">
            <mt-popup v-model="delVisible" position='bottom' popup-transition='popup-fade'>
               <mt-button type="danger"  style="width:100vw" @click="delGoods">删除</mt-button>
               <mt-button type="default" style="width:100vw" @click="delVisible = false">取消</mt-button>
            </mt-popup>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            goodsList:[
                {
                    id:1,
                    isChoose:false,
                    img:'https://gw.alicdn.com/bao/uploaded/i4/725677994/O1CN01QixZiv28vIkRlp9kb_!!0-item_pic.jpg',
                    title:'亨氏番茄酱番茄沙司披萨薯条320g小包肯德基家用手抓饼酱挤压袋装',
                    goodsNum:1,
                    price:10
                },
                {
                    id:2,
                    isChoose:false,
                    img:'https://gw.alicdn.com/bao/uploaded/i4/725677994/O1CN01QixZiv28vIkRlp9kb_!!0-item_pic.jpg',
                    title:'亨氏番茄酱番茄沙司披萨薯条320g小包肯德基家用手抓饼酱挤压袋装',
                    goodsNum:1,
                    price:10
                },
                {
                    id:3,
                    isChoose:false,
                    img:'https://gw.alicdn.com/bao/uploaded/i4/725677994/O1CN01QixZiv28vIkRlp9kb_!!0-item_pic.jpg',
                    title:'亨氏番茄酱番茄沙司披萨薯条320g小包肯德基家用手抓饼酱挤压袋装',
                    goodsNum:1,
                    price:10
                },
            ],
            touchLoop:null,//长按定时器
            delVisible:false,//删除弹窗flag
            delId:-1,//需要删除的商品id
        }
    },
    methods:{
        //选中商品
        chooseGoods(item){
            item.isChoose = !item.isChoose;
            if(item.isChoose === true){
                //选中商品，则购物车数量增加
                this.$store.dispatch('addNumByAct',item.goodsNum)
            }else{
                //若商品未选中，删除购物车中相应的数量
                this.$store.dispatch('addNumByAct',-item.goodsNum)
            }
        },
        //减少商品数量
        subtra(item){
            if(item.goodsNum === 1) return;
            item.goodsNum--;
            item.isChoose = true;
            this.$store.dispatch('addNumByAct',-1)
        },
        //增加商品数量
        add(item){
            item.goodsNum++;
            item.isChoose = true;
            this.$store.dispatch('addNumByAct',1)
        },

        //商品长按弹出删除窗-----start
        start(id){
            this.delId = id;
            clearTimeout(this.touchLoop);
            this.touchLoop = setTimeout(()=>{
                // console.log('===')
                this.delVisible = true
            },800);
        },
        end(){
            clearTimeout(this.touchLoop);
        },

        //删除当前商品
        delGoods(){
            let index = this.goodsList.findIndex((value)=>value.id==this.delId);
            this.$store.dispatch('addNumByAct',-this.goodsList[index].goodsNum)
            this.goodsList.splice(index,1);
            this.delVisible = false;
        },
        //商品长按弹出删除窗-----end

    },
    computed:{
        totalPrice(){
            //购物车总价
            //如果商品选中，则将商品计算总价
            var tPrice = 0;
            for(let i in this.goodsList){
                if(this.goodsList[i].isChoose === true){
                    tPrice += this.goodsList[i].goodsNum*this.goodsList[i].price;
                }
            }
            return tPrice
        }
    },
    created(){
        let totalNum = 0;
        this.goodsList.forEach(el => {
            el.isChoose = true;
            totalNum += el.goodsNum;
        });
        // this.$store.dispatch('changeNumByAct',totalNum)
    }
}
</script>
<style scoped lang='scss'>
@import '@/assets/css/Shopcart/Shopcart.scss'
</style>

