<template>
  <div class="product">
    <!-- 左侧导航栏 -->
    <div class="left-goods">
      <!-- 滚动 -->
      <ul class="content">
        <div :class="{menu:true,selected:currentSelect===i}" 
              v-for="(item,i) in goodsList" :key="i"
              @click="showProduct(i)">
          <div class="leftMenuList">
            <p class="title-p">{{ item.name }}</p>
          </div>
        </div>
      </ul>
    </div>

    <!-- 商品信息 -->
    <div class="right-goods">
      <ul class="content">
        <div :id="i" v-for="(item,i) in goodsList" :key="i">
          <p class="tips">{{item.name}}</p>
          <div class="meal"  v-for="(food,index) in item.foods" :key="index">
              <img :src="food.icon" class="meal-img">
              <div class="meal-msg">
                  <h4 class="meal-title">{{food.name}}</h4>
                  <p class="replay">{{food.description}}</p>
                  <p class="count">月售{{food.sellCount}}份<span class="good">好评率100%</span></p>
                  <div class="select">
                      <p class="price">￥{{food.price}}<del class="sale-price" v-if="food.oldPrice">￥{{food.oldPrice}}</del></p>
                      <div class="add-count">
                        <p class="number-reduce" v-show="food.num >0" @click="clickChangeCount(-1,food.name)">-</p>
                          <label v-show="food.num >0">{{food.num}}</label>                      
                        <p class="number-add" @click="clickChangeCount(1,food.name)">+</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      currentSelect:0, //当前选中项索引
      scrollY:0  //实时滚动的Y轴大小
    };
  },
  methods: {
    // 点击左边菜单选项显示对应的右边栏
    showProduct(i){
      this.currentSelect=i
      this.rightScroll.scrollToElement(document.getElementById(i),600)
    },
    // 点击添加商品数量
    clickChangeCount(num,name){
      this.$store.commit('changeGoodsNum',{ num,name})
    }
  },
  created(){
  },
  mounted(){
    this.leftScroll=new BScroll('.left-goods',{
      click:true

    });
    this.rightScroll=new BScroll('.right-goods',{
      click:true,
      probeType:3
    });
    this.rightScroll.on('scroll',(obj)=>{ //监听右边滚动事件
      if(obj.y<=0){
        this.scrollY=Math.abs(obj.y) //获取滚动的距离
      }
      // console.log(this.getRightHeight) [0, 1165, 1317, 1453, 1807, 2052, 2313, 2667, 3239, 4000]

      for(let i=0;i<this.getRightHeight.length-1;i++){
        let height1=this.getRightHeight[i]; //第一个盒子高度
        let height2=this.getRightHeight[i+1]; //第一个加二个盒子的高度

        if(this.scrollY >= height1 && this.scrollY < height2){
          // console.log(i)
          this.currentSelect=i //当前索引index的菜单项高亮
          return i
        }
      }
    })
  },
  computed:{
    //计算右边菜单的div高度
    getRightHeight(){
      var arr=[0]
      let height=0 //第一个的高度为0
      for(let i=0;i<this.goodsList.length;i++){
        height+=document.getElementById(i).offsetHeight //高度累加
        arr.push(height)
      }
      return arr
    },
    // 获取菜单信息
    goodsList(){
      return this.$store.state.goodsList
    },
    
  }
  
};
</script>

<style lang="less" scoped>
.product {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  .left-goods{
    background: #f4f5f7;
    flex: 0 0 80px;
    height: 100%;
    overflow: auto;
    .menu {
      .leftMenuList{
        display: flex;
        align-items: center;
        margin: 0 10px;
        height: 50px;
        border-bottom: 1px solid #ccc;
        font-size: 13px;
      }
    }
    .selected {
      background-color: #fff;
    }
  }
  .right-goods {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    .tips {
      color: #93989e;
      font-size: 13px;
      padding: 5px 15px;
    }
    .meal {
      display: flex;
      justify-content: flex-start;
      padding: 15px 15px 10px;
      background: #fff;
      border-bottom: 1px solid #ccc;
      width: 100%;
      .meal-img {
        width: 70px;
        height: 70px;
      }
      .meal-msg {
        padding-left: 10px;
        width: 60%;
        .meal-title {
          font-size: 15px;
        }
        .replay {
          font-size: 12px;
          width: 40%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #93989e;
          padding: 5px 0;
        }
        .count {
          font-size: 12px;
          color: #93989e;
          .good {
            margin-left: 10px;
          }
        }
        .select {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
          width: 100%;
          .price {
            color: red;
            font-weight: bold;
            padding: 3px 0;
            .sale-price {
              color: #93989e;
              margin-left: 10px;
              font-size: 12px;
            }
          }
          .add-count{
            display: flex;
            label{
              margin: 0 5px;
            }
            .number-reduce,.number-add {
              width: 18px;
              height: 18px;
              line-height: 16px;
              font-weight: bold;
              font-size: 18px;
              text-align: center;
              border-radius: 50%;
              border:2px solid #01a0dd;
            }
            .number-add{
              color: #fff;
              background: #01a0dd;
            }   
          }
        }
      }
    }
  }
}
</style>


