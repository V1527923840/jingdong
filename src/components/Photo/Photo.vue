<template>
    <div class="imgtext">   
        <!-- 顶部导航栏 -->
        <v-header :backFlag='true' title="图文分享"></v-header>

        <!-- 图片以瀑布流形式显示 -->
        <div class="photo-list" :style="{'height':Height+'px'}">
            <ul id="photo">
                <li v-for="(img,index) in content" :key="index">
                    <a>
                        <img :src='img.img_url'>
                        <p>
                            <span>{{img.title | titleFilter(12)}}</span>
                            <br>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Height:0,
            content:[//图片数据//美文数据
            {
                title:'美女1美女1美女1美女1美女1美女1美女1',
                img_url:"../../../static/image/float/1.jpg",
                text:'11111111111111'
            },{
                title:'美女2',
                img_url:"../../../static/image/float/2.jpg",
                text:'11111111111111'
            },{
                title:'美女3',
                img_url:"../../../static/image/float/3.jpg",
                text:'11111111111111'
            },
            {
                title:'美女4',
                img_url:"../../../static/image/float/4.jpg",
                text:'11111111111111'
            },{
                title:'美女5',
                img_url:"../../../static/image/float/5.jpg",
                text:'11111111111111'
            },{
                title:'美女6',
                img_url:"../../../static/image/float/6.jpg",
                text:'11111111111111'
            },{
                title:'美女7',
                img_url:"../../../static/image/float/7.jpg",
                text:'11111111111111'
            },
            ],
        }
    },
    mounted(){
        this.photoOnload(2);
    },
    methods:{
        photoOnload(n){
            let that = this;
            let arr = [],minHeight;
            var li = document.querySelectorAll('#photo li');
            for(let i in this.content){
                let img = new Image();
                img.src = this.content[i].img_url;
                img.onload = function(){
                    //前两张图片top都为45px，两张图片以后则判断元素的高度，优先排列在短的那一行。
                    if(i < n){
                        li[i].style.top = 45 + 'px';
                        li[i].style.left = 50*i +'vw';
                        arr.push(li[i].offsetHeight);
                    }else{
                        minHeight = Math.min.apply(null,arr);
                        let index = arr.indexOf(minHeight)
                        li[i].style.top = arr[index] + 45 +'px';
                        li[i].style.left = 50*index + 'vw';
                        arr[index] += li[i].offsetHeight;
                    };
                    //绝对布局 设置不了父元素的高度，只能js动态设置
                    that.Height = Math.max.apply(null,arr) + 40
                    
                };
            };
            
        }
    },
}
</script>
<style scoped lang='scss'>
    @import '@/assets/css/Photo/photo.scss'
</style>
