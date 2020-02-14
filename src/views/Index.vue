<template>
  <div class="home">
    <!-- 顶部 -->
    <div class="head">
      <Header></Header>
    </div>

    <!-- 内容 -->
    <div class="top-menu">
      <router-link to="/" class="router"><span :class="{'selected':hashChange=='/'}">商品</span></router-link>
      <router-link to="/assessment" class="router"><span :class="{'selected':hashChange=='/assessment'}">评价</span></router-link>
      <router-link to="/merchant" class="router"><span :class="{'selected':hashChange=='/merchant'}">商家</span></router-link>
    </div>

    <!-- 主体页面路由 -->
    <div class="main">
      <router-view></router-view>
    </div>

    <!-- 购物车弹出框 -->
    <transition name="slide-fade">
      <div class="shopcar-board" v-show="showBoard">
        <Shopcar></Shopcar>
      </div>
    </transition>

    <!-- 页脚 -->
    <div class="foot" @click="showBoard=!showBoard">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shopcar from "../views/modules/Shopcar"
export default {
  components:{
    Header,Footer,Shopcar
  },
  data(){
    return{
      // currentLab:0,//当前选中项
      showBoard:false, //显示隐藏购物车
    }
  },
  methods: {
    // handleClick(val) {
    //   this.currentLab=val //当前选中项高亮
    // }
  },
  created(){
    // 一进页面就触发action 初始化vuex的列表数据
    this.$store.dispatch('initGoodsList')
    this.$store.dispatch('initSeller')
    this.$store.dispatch('initRateList')
  },
  computed: {
    hashChange() {
      return this.$route.path 
    }
  },
}
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .head{
      height: 145px;
    }
    .top-menu{
      display: flex;
      justify-content: space-around;
      padding:10px 0;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
      .router{
        text-decoration: none;
        color:#4C5459;
      }
      .selected{
          color:#EC1911;
          text-decoration: none;
      }
    }
    .main{
      flex:1;
      overflow: auto;
      background: #F4F5F7;
      margin-bottom: 60px;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateY(200px);
      opacity: 0;
    }
    .shopcar-board{
      width: 100%;
      position: fixed;
      bottom: 50px;
      max-height: 200px;
      overflow-y: auto;
    }
    .foot{
      height: 50px;
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
</style>
