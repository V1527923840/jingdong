<template>
  <div>
    <v-header :backFlag='false' title="首页"></v-header>

    <div class="content">
       <!-- 搜索栏 -->
      <van-search v-model="searchValue" background='rgb(38,162,255)' @search='Search' placeholder="请输入搜索关键词"/>
      <!-- 轮播图-------start -->
      <v-swipe :imgs='imageList'></v-swipe>
      <!-- 轮播图-------end ---->

      <!-- 黏性导航tabs -->
        <van-tabs v-model="active" sticky :offset-top='40' background='rgb(0,178,98)' @click="changeTabs">
          <van-tab title-style='color:white' v-for="(item,index) in menu" :key="index" :title="item.title" >
              <v-goodslist :goods='classifyGoods'></v-goodslist>
          </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
import {Get,Post} from '../http';
export default {
  name: 'Home',
  data () {
    return {
      searchValue:'',
      active:'',
      menu:[ //导航---------数据------
        {title:'精选',id:1},
        {title:'新品',id:2},
        {title:'实惠',id:3},
        {title:'进口',id:4},
      ],
      imageList:[],
      classifyGoods:[],
      }
  },created (){
    this.getData();
    this.changeTabs(0,'');
  },
  methods:{
    //获取首页内容
    getData(){
      Get('/home')
      .then((res)=>{
        this.imageList = res.data.imgList;
        this.$store.dispatch('changeNumByAct',res.data.shopcartGoods)
      })
    },
    //切换黏性导航的tabs
    changeTabs(name,title){
      let ID = this.menu[name].id
      Get(`/home/classify/${ID}`)
      .then(res=>{
        if(res.data.errcode === 200){
          this.classifyGoods = res.data.list;
        }else{
          this.$toast.fail(res.data.message)
        }
      }).catch(err=>err)
    },
    //搜索栏搜索按钮
    Search(){
      let value = this.searchValue;
      Get(`/search/1/${value}`)
      .then(res=>{
        if(res.data.errcode === 200){
          this.$store.dispatch('setValueByAct',this.searchValue)
          this.$router.push({name:"Goods",params:{list:res.data.list,searchValue:this.searchValue}})
        }
        console.log(res)
      })
      .catch(err=>err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
@import '../assets/css/home.scss'
</style>
