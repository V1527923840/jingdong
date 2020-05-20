import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router) 

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home')
    },{
      path: '/classify',
      name: 'Classify',
      component: () => import('@/components/Classify/Classify'),
      redirect:'/classify/detail',
      children: [
        {
          path: '/classify/detail',
          name: 'ClassifyDetail',
          component:()=> import('@/components/Classify/ClassifyDetail')
        }
      ]
    },{
      path: '/shopcart',
      name: 'Shopcart',
      component: () => import('@/components/Shopcart/Shopcart')
    },{
      path: '/goods',
      name: 'Goods',
      component: () => import('@/components/Goods/Goods')
    },{
      path: '/gooddetail',
      name: 'GoodDetail',
      component: () => import('@/components/Goods/GoodDetail')
    },{
      path: '/search',
      name: 'Search',
      component: () => import('@/components/Search/Search')
    },{
      path:'/newslist',
      name:"NewsList",
      component:() => import('@/components/News/NewsList')
    },{
      path:'/news/detail/:id',
      name:'NewsDetail',
      component:() => import('@/components/News/NewsDetail'),
    },{
      path:'/photo',
      name:'Photo',
      component:() => import('@/components/Photo/Photo'),
    }
  ]
})
