<template>
    <div class="seller">
        <ul class="content">
            <!-- 商家 -->
            <div class="seller-msg">
                <div class="top">
                    <div class="title">
                        <h4>{{goodsmsg.name}}</h4>
                        <div class="star">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_off@2x.png" class="star-img">
                            <p class="number">({{goodsmsg.ratingCount}})</p>
                            <p>月售{{goodsmsg.sellCount}}单</p>
                        </div>
                    </div>
                    <div class="collection">
                        <img src="../../assets/images/heart.png" class="heart">
                        <p>已收藏</p>
                    </div>
                </div>
                <div class="seller-price">
                    <div class="start-price">
                        <p class="price-title">起送价</p>
                        <p class="price-content"><span class="price-num">{{goodsmsg.minPrice}}</span>元</p>
                    </div>
                    <div class="dispatch">
                        <p class="price-title">商家配送</p>
                        <p class="price-content"><span class="price-num">{{goodsmsg.deliveryPrice}}</span>元</p>
                    </div>
                    <div class="time">
                        <p class="price-title">平均配送时间</p>
                        <p class="price-content"><span class="price-num">{{goodsmsg.deliveryTime}}</span>分钟</p>
                    </div>
                </div>
            </div>

            <!-- 公告活动 -->
            <div class="announcement">
                <h4>公告与活动</h4>
                <div class="introduce">
                    <p class="intro">{{goodsmsg.bulletin}}</p>
                    <div class="jian" v-for="(item,index) in goodsmsg.supports" :key="index">
                        <img src="../../assets/images/decrease_3@2x.png" class="jian-img" v-if="item.type==0">
                        <img src="../../assets/images/discount_3@2x.png" class="jian-img" v-if="item.type==1">
                        <img src="../../assets/images/special_3@2x.png" class="jian-img" v-if="item.type==2">
                        {{item.description}}
                    </div>
                </div>
            </div>

            <!-- 商家实景 -->
            <div class="real">
                <!-- <h4>商家实景</h4> -->
                <ul class="content">
                    <div class="real-img">
                        <img class="shop-img" :src="item" v-for="(item,index) in goodsmsg.pics" :key="index">
                    </div>
                </ul>
            </div>

            <!-- 商家信息 -->
            <div class="messages">
                <h4 class="shop-title">商家信息</h4>
                <div class="shop-msg" v-for="(item,index) in goodsmsg.infos" :key="index">
                    <p class="shop-tips">{{item}}</p>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
        data(){
            return{
            }
        },
        created(){
        },
        mounted(){
            new BScroll('.seller',{
                click:true,
            })
            new BScroll('.real',{
                click:true,
            })
        },
        computed:{
            // 获取商家信息
            goodsmsg(){
                return this.$store.state.scorelist
            },
        }
    }
</script>

<style lang="less" scoped>
    .seller{
        background: #F4F5F7;
        height: 100%;
        width: 100%;
        .seller-msg{
            background: #fff;
            padding:15px 20px;
            .top{
                display: flex;
                justify-content: space-between;
                padding-bottom: 10px;
                border-bottom:1px solid #ccc;
                .title{
                    .star{
                        font-size: 13px;
                        margin: 10px 0;
                        color:#51565A;
                        display: flex;
                        justify-content: flex-start;
                        .star-img{
                            width: 16px;
                            height: 16px;
                            margin-right: 5px;
                        }
                        .number{
                            margin:0 15px 0 5px;
                        }
                    }
                }
                .collection{
                    font-size: 13px;
                    color:#51565A;
                    .heart{
                        padding: 6px 10px 3px;
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            .seller-price{
                padding: 15px 0 5px;
                display: flex;
                justify-content: space-around;
                .price-title{
                    color:#93989E;
                    font-size: 12px;
                }
                .price-content{
                    text-align: center;
                    font-size: 12px;
                    .price-num{
                        font-size: 20px;
                    }
                }
            }
        }
        .announcement{
            background: #fff;
            margin-bottom: 20px;
            padding:15px 20px;
            .introduce{
                padding-left: 15px;
                font-size: 13px;
                .intro{
                    border-bottom: 1px solid #ccc;
                    color:#F38085;
                    padding: 10px 0 15px;
                    line-height: 26px;
                }
                .jian{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    height: 50px;
                    line-height: 50px;
                    color:#51565A;
                    border-bottom: 1px solid #ccc;
                    .jian-img{
                        width: 18px;
                        height: 18px;
                        margin-right: 10px;
                    }
                }
                .sale{
                    height: 50px;
                    line-height: 50px;
                    color:#51565A;
                    border-bottom: 1px solid #ccc;
                    padding-left: 28px;
                    background: url("../../assets/images/discount_3@2x.png") no-repeat left;
                    background-size:18px 18px;
                }
                .tes{
                    height: 50px;
                    line-height: 50px;
                    color:#51565A;
                    border-bottom: 1px solid #ccc;
                    padding-left: 28px;
                    background: url("../../assets/images/special_3@2x.png") no-repeat left;
                    background-size:18px 18px;
                }
            }
        }
        .real{
            background: #fff;
            margin-bottom: 20px;
            padding:15px 20px;
            color:#51565A;
            width: 90%;
            .real-img{
                margin-top: 15px;
                display:flex;
                overflow-x:scroll;
                width: 90%;
                .shop-img{
                    margin-left: 5px;
                    width: 105px;
                    height: 100px;
                }
            }
        }
        .messages{
            background: #fff;
            margin-bottom: 40px;
            padding:15px 20px;
            color:#51565A;
            .shop-title{
                padding:10px 0;
            }
            .shop-msg{
                .shop-tips{
                    padding:15px;
                    border-top:1px solid #ccc;
                    font-size: 13px;
                }
            }
        }
    }
</style>