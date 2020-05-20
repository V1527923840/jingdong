import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        totalNum: 0,
        searchValue: '',
        classifyID:0,
    },
    mutations: {
        addNum(state,num) { 
            state.totalNum +=num;
        },
        changeNum(state,num) { 
            state.totalNum = num
        },
        //设置搜索栏内容
        setValue(state,value) { 
            state.searchValue = value;
        },
        //设置分类id
        setClassifyID(state,value) {
            state.classifyID = value;
        }
    },
    actions: {
        addNumByAct({ commit }, num) {
            commit('addNum',num)
        },
        changeNumByAct({ commit }, num) {
            commit('changeNum',num)
        },
        //设置搜索栏内容
        setValueByAct({ commit }, value) {
            commit('setValue',value)
        },
        //设置分类id
        setClassifyIDByAct({ commit },value) {
            commit('setClassifyID',value)
        }
    }
})

export default store;