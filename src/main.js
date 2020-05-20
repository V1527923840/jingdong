// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import './http'

Vue.config.productionTip = false

// mint-ui--------------start
import "../static/css/global.css"
import MintUI from 'mint-ui'
Vue.use(MintUI);
import "mint-ui/lib/style.css"
// mint-ui--------------end

//vant-ui--------start
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
//vant-ui--------end

// 引入常用全局组件---------start
import MyUl from './components/common/MyUl'
Vue.component(MyUl.name,MyUl);
import MyLi from './components/common/MyLi'
Vue.component(MyLi.name,MyLi);
// import NewsList from './components/News/NewsList'
// Vue.component(NewsList.name,NewsList);
import Header from './components/common/Header'
Vue.component(Header.name, Header);
import Swipe from './components/common/Swipe'
Vue.component(Swipe.name, Swipe);
import GoodsList from './components/common/GoodsList'
Vue.component(GoodsList.name,GoodsList)
// 引入常用全局组件---------end




//过滤器-----------start
//时间格式过滤器
import Moment from 'moment';
Vue.filter('converTime', function(data,formatStr) {
    return  Moment(data).format(formatStr)
})

//title长度过滤器
Vue.filter('titleFilter', function (str, num) {
  //当字符串小于等于num值时，返回str原数据；
  //当字符串大于num值时，将原数据中num后的数据替换成“...”
  if (str.length <= num) {
    return str;
  } else {
    return str.substr(0, num - 1) + '...';
  }
})
//过滤器-----------end


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
