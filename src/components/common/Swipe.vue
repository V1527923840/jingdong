<template>
  <div class="swipe">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item v-for="(item,index) in imgs || myimgs" :key="index">
            <img :src='item.imgUrl'>
        </mt-swipe-item>
        </mt-swipe>
  </div>
</template>

<script>
export default {
    name:'v-swipe',
    props:['url','imgs'],
    data(){
        return{
            myimgs:[],
        }
    },
    created(){

    }
}
</script>

<style scoped lang='scss'>
.swipe{
    width: 100%;
    height: 200px;
    // margin-bottom: 10px;
    img{
        width: 100%;
        height: 200px;
    }
}
</style>

