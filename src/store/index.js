import Vue from 'vue'
import Vuex from 'vuex'
import { getGoodsList,getSeller,rateList } from "@/api/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        goodsList:[], //商品菜单数据
        scorelist:[], //商家信息数据
        ratingList:[],//商品评论列表
    },
    mutations:{
        initGoodsList(state,val){//商品菜单数据
            state.goodsList=val
        },
        initSeller(state,val){//商家信息数据
            state.scorelist=val
        },
        initRateList(state,val){//商品评论列表
            state.ratingList=val
        },
        // 改变商品数量
        changeGoodsNum(state,data){
            for(let obj of state.goodsList){
                for(let food of obj.foods){
                    if(food.name==data.name){
                        food.num+=data.num
                        // return
                    }
                }
            }
        },
        // 清空购物车
        clearGoodsNum(state){
            for(let obj of state.goodsList){
                for(let food of obj.foods){
                    food.num=0
                }
            }
        }
    },
    actions:{
        // 获取商品列表
        initGoodsList(context){
            getGoodsList().then(res=>{
                for(let obj of res.data.data){
                    for(let food of obj.foods){
                        // 添加一个商品数量的字段 food.num
                        food.num=0
                    }
                }
                context.commit('initGoodsList',res.data.data)
            })
        },
        // 获取商家信息
        initSeller(context){
            getSeller().then(res=>{
                context.commit('initSeller',res.data.data)
            })
        },
        // 获取评论列表
        initRateList(context){
            rateList().then(res=>{
                context.commit('initRateList',res.data.data)
            })
        },
    },
    // vuex 的计算属性
    getters:{
        // 获取购物车列表
        getshopcarlist(state){
            let arr=[]

            for(let obj of state.goodsList){
                for(let food of obj.foods){
                    if(food.num>0){
                        arr.push(food)  //如果商品数量大于0就加入到购物车中
                    }
                }
            }
            return arr
        },
    }
})
