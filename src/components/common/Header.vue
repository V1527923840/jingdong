<template>
        <mt-header :back='backFlag' :title="title">
            <div v-if="backFlag" @click="goback()" slot="left">
                <mt-button icon="back" ></mt-button>
           </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
</template>
<script>
export default {
    name:'v-header',
    props:['title','backFlag'],
    created(){

    },
    data(){
        return{

        }
    },methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
header{
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
}
</style>
