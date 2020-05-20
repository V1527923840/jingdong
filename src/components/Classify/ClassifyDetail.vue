<template>
  <!-- <div> -->
      <div class="scroll" ref="wrapper" :style="{height:Height+'px'}">
          <div class="scroll_content">
               <van-image class="title_img" :src="detail.imgUrl"></van-image>
                <van-grid class="classify_item" :gutter="10" :column-num="3">
                    <van-grid-item v-for="item in detail.content" :key="item.id" @click="showDetail">
                        <van-image :src="item.icon" />
                        <p>{{item.title}}</p>
                    </van-grid-item>
                </van-grid>
          </div>
      </div>
  <!-- </div> -->
</template>

<script>
import {Get,Post} from '../../http'
import BScroll from '@better-scroll/core'
export default {
    name:'ClassifyDetail',
    data(){
        return{
            Height:'',
            detail:{},

        }
    },
    methods:{
        //获取分类内容
        getData(id){
            Get(`/classifyDetail/${id}`)
            .then(res=>{
                console.log(res)
                if(res.data.errcode === 200){
                    this.detail = res.data.content;
                }
            })
        },
        //进入分类中
        showDetail(){
            this.$toast('该功能还没开放');
        }
    },
    mounted(){
        //局部数据滚动
        this.bs = new BScroll(this.$refs.wrapper,{
            scrollY: true,
            click: true,
        })
    },
    created(){
        this.Height = document.body.clientHeight-41-59;
        this.getData(0)
    },
    computed:{
        ID(){
            return this.$store.state.classifyID;
        }
    },
    watch:{
        ID(old,newd){
            this.getData(newd)
        }
    }
}
</script>

<style lang='scss'>
.scroll{
    height: 100%;
    overflow: hidden;
    .scroll_content{
        height: max-content;
        .title_img{
            width: 96%;
            height: 8rem;
            margin: 10px 2%;
        }
        .classify_item{
            .van-image__img{
                width: 50px;
                height: 50px;
            }
            p{
                font-weight: bolder;
                font-size: .7rem;
                margin-top: 10px;
            }
        }
    }
}

</style>