<template>
    <div class="shopcar">
        <div class="top">
            <p>购物车</p>
            <div class="clearshopcar">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578204713446&di=516061b11be6eac1f4912e6f0f623342&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F46%2F91%2F5815980029ab5_610.jpg" class="clear-img">
                <p @click="clearShopcar">清空购物车</p>
            </div>
        </div>
        <div class="product">
            <div class="one" v-for="(item,i) in shopData" :key="i">
                <p class="title">{{item.name}}</p>
                <p class="price">￥{{item.price * item.num}}</p>
                <div class="add-count">
                    <p class="number-reduce" @click="clickChangeCount(-1, item.name)">-</p>
                    <label class="count">{{item.num}}</label>                      
                    <p class="number-add" @click="clickChangeCount(1, item.name)">+</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        methods: {
            // 点击加减商品数量
            clickChangeCount(num,name) {
                this.$store.commit("changeGoodsNum",{num,name})
            },
            // 清空购物车
            clearShopcar(){
                this.$store.commit("clearGoodsNum")
            }
        },
        computed:{
            // 从store获取商品列表数据
            // 菜单去重
            shopData(){
                let data=this.$store.getters.getshopcarlist;

                let obj={}

                data.forEach(v => {
                    if(obj[v.name]){
                        if(obj[v.name].num < v.num){
                            obj[v.name]=v
                        }
                    }else{
                        obj[v.name]=v
                    }
                });

                return Object.values(obj)
            }
        }
    }
</script>

<style lang="less" scoped>
    .shopcar{
        .top{
            padding: 10px;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            background: #d8f3fa;
            .clearshopcar{
                display: flex;
                .clear-img{
                    width: 18px;
                    height: 18px;
                    margin-right: 5px;
                }
            }
        }
        .product{
            background: #fff;
            .one{
                display: flex;
                justify-content: space-between;
                padding: 15px 10px;
                font-size: 14px;
                border-bottom: 1px solid #ccc;
                .title{
                    width: 80px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .price{
                    color:#EC1911;
                    font-size: 15px;
                }
                .add-count{
                    display: flex;
                    justify-content: space-around;
                    .count{
                        margin: 0 8px;
                        line-height: 22px;
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
            .take-price{
                display: flex;
            }
        }
    }
</style>