import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = "https://mock.yonyoucloud.com/mock/6670"

import MintUI from 'mint-ui'
Vue.use(MintUI);

//拦截器---------------start
//定义拦截器
//1:请求发起前显示Loading open();
Axios.interceptors.request.use(function(config){
    //不变配置：   可变，可以设置的公共的请求头操作
    MintUI.Indicator.open({
      text:'玩命儿加载中...',
      spinnerType:'fading-circle'
    });
    return config;
  })
  //2.响应回来后关闭Loading close()
  Axios.interceptors.response.use(function(response){
    MintUI.Indicator.close();
    return response;
  })


//拦截器---------------end

export function Get(url) {
    return new Promise(async (resole, reject) => {
        try {
            const res = await Axios.get(url);
            resole(res);
        } catch (err) {
            reject(err)
        }
    })
}

export function Post(url, params) {
    return new Promise(async (resole, reject) => {
        try {
            const res = await Axios.post(url,params);
            resole(res);
        } catch (err) {
            reject(err)
        }
    })
}
