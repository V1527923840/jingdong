<template>
    <div class="NewsDetail_container">
        <v-header :backFlag='true' title="新闻详情"></v-header>
        <div >
            <h4>{{newsInfo.title}}</h4>
            <div class="tips">
                <div>浏览数：{{newsInfo.click}}</div>
                <div>分类：{{newsInfo.type}}</div>
                <div>发布时间：{{newsInfo.date | converTime('YYYY-MM-DD')}}</div>
            </div>
            <hr>
            <div class="news-content" v-html="newsInfo.content"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newsInfo:{
                //新闻详情数据
                title:'习近平三次地方考察强调办好这件事',
                click:1,
                type:'时事热点',
                date:new Date().getTime(),
                content:`<div class="article" id="article">
				<p>　　原标题：化危为机 习近平三次地方考察强调办好这件事</p>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/301/w550h551/20200427/ebe0-isuiksn5875274.png" alt=""></div>
                <p>　　复工关系就业稳定，复产关系经济发展。如何在做好疫情防控的前提下，有序推进复工复产，是习近平总书记始终关心的大事。</p>
                <p>　　今年农历春节后，习近平先后三次离京赴地方考察调研。</p>
                <p>　　3月10日，在抗击新冠肺炎疫情的关键时刻，习近平专门赴湖北武汉考察疫情防控工作，在战“疫”最前线指挥“有针对性地开展援企、稳岗、扩就业等工作”。</p>
                <p>　　3月29日至4月1日，在浙江考察时，习近平来到宁波北仑大碶高端汽配模具园区同工人们亲切交谈：“这次我来调研，就是要听一听你们的意见。在当前复工复产的形势下，你们最关心什么？需要解决哪些问题？”</p>
                <p>　　4月22日，习近平来到陕西汽车控股集团有限公司总装车间察看生产线，了解产品研发、生产、销售和复工复产情况，对他们克服疫情影响创产销历史新高表示赞赏。</p>
                <p>　　从“适时启动”到“积极破解”难点、堵点，再到“全面推进”，习近平辗转三地，释放出在毫不放松疫情防控的前提下，加快恢复生产生活秩序、加快推动复工复产的积极信号，为企业复工复产和社会生活秩序恢复注入了“强心剂”。</p>
                <p>　　央视网《联播+》特进行梳理，在复工复产扩面提速的当下，与您一起坚定信心，为实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦贡献力量。</p>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/483/w550h733/20200427/7225-isuiksn5875328.png" alt=""></div>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/483/w550h733/20200427/a35e-isuiksn5875377.png" alt=""></div>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/483/w550h733/20200427/bd2c-isuiksn5875420.png" alt=""></div>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/483/w550h733/20200427/ba33-isuiksn5875479.png" alt=""></div>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/483/w550h733/20200427/6632-isuiksn5875523.png" alt=""></div>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/483/w550h733/20200427/2946-isuiksn5875559.png" alt=""></div>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/483/w550h733/20200427/b8df-isuiksn5875590.png" alt=""></div>
                <div class="img_wrapper"><img src="//n.sinaimg.cn/news/crawl/483/w550h733/20200427/7348-isuiksn5875630.png" alt=""></div>
                <p>　　（中央广播电视总台央视网）</p>	
                </div>`
            },
        }
    },created(){
        //1.获取路由参数
        let { id } = this.$route.params;
        //2.拼接后台url发起请求
        let url = 'getnew/' +aid;
        this.$axios.get(url).then(res=>{
        //3.响应的数据渲染到页面上，通过一个详情对象
                this.newsInfo = res.data
        }).catch(err=>console.log(err)
        )
        
    }
}
</script>
<style  lang='scss'>
@import '@/assets/css/News/NewsDetail.scss'
</style>
