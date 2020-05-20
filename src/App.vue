<template>
  <div id="app">
    <router-view class="tmpl"/> 

    <mt-tabbar v-model="selected">

        <mt-tab-item id="Home">
          <img slot="icon" src="./assets/img/home.png">
          首页
        </mt-tab-item>



        <mt-tab-item id="Classify">
          <img slot="icon" src="./assets/img/classify.svg">
          分类
        </mt-tab-item>


        <mt-tab-item id="Shopcart">
          <img slot="icon" src="./assets/img/shoppingcart.png">
          购物车<mt-badge size='small' type="error">{{$store.state.totalNum}}</mt-badge>
        </mt-tab-item>


        <mt-tab-item id="NewsList">
          <img slot="icon" src="./assets/img/news.svg">
          新闻
        </mt-tab-item>
      </mt-tabbar>  
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return{
      selected:'',
    }
  },watch:{
    selected:function(newV,oldV){  
      this.$router.push({
        name:newV,
      });
    }
  },created(){
    let Height = document.body.clientHeight-41-59;
  }
}
</script>

<style scoped>
.mint-tabbar{
  position: fixed;
  bottom: 0;
}
</style>

