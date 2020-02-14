<template>
    <div class="evaluate">
    <!-- 评价 -->
        <ul class="content">
            <!-- 综合评分 -->
            <div class="rating">
                <div class="left-rating">
                    <p class="score">{{scorelist.score}}</p>
                    <h4 class="composite">综合评分</h4>
                    <p class="bigger">高于周边商家{{scorelist.rankRate}}%</p>
                </div>
                <div class="right-rating">
                    <div class="top-star">
                        <p>服务态度</p>
                        <div class="stars">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_off@2x.png" class="star-img">
                        </div>
                        <p class="grade">{{scorelist.serviceScore}}</p>
                    </div>
                    <div class="center-star">
                        <p>口味评分</p>
                        <div class="stars">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_on@2x.png" class="star-img">
                            <img src="../../assets/images/star24_off@2x.png" class="star-img">
                        </div>
                        <p class="grade">{{scorelist.foodScore}}</p>
                    </div>
                    <div class="bottom-time">
                        <p>送达时间<span class="send-time">{{scorelist.deliveryTime}}分钟</span></p>
                    </div>
                </div>
            </div>
            <!-- 内容评价 -->
            <div class="rating-list">
                <div class="category">
                    <p class="total">全部<span class="total-num">57</span></p>
                    <p class="good">满意<span class="total-num">47</span></p>
                    <p class="bad">不满意<span class="total-num">10</span></p>
                </div>
                <div class="iscontent">
                    <p class="check">只看有内容的评价</p>
                </div>
                <div class="content-list">
                    <div class="detail" v-for="(rate,index) in ratingList" :key="index">
                        <div class="radius">
                            <img :src="rate.avatar" class="head-img">
                        </div>
                        <div class="right-box">
                            <div class="top-title">
                                <p class="username">{{rate.username}}</p>
                                <p class="date">{{rate.rateTime | formate}}</p>
                            </div>
                            <div class="top-star">
                                <img src="../../assets/images/star24_on@2x.png" class="star-img">
                                <img src="../../assets/images/star24_on@2x.png" class="star-img">
                                <img src="../../assets/images/star24_on@2x.png" class="star-img">
                                <img src="../../assets/images/star24_on@2x.png" class="star-img">
                                <img src="../../assets/images/star24_off@2x.png" class="star-img">
                                <p class="center-time">{{rate.deliveryTime}}分钟送达</p>
                            </div>
                            <h4 class="middle">{{rate.text}}</h4>
                            <div class="bottom-goods">
                                <p class="select-foods" v-for="item in rate.recommend" :key="item">{{item}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import moment from "moment";

export default {
    data(){
        return{
            
        }
    },
    created(){
        // getSeller().then((data)=>{
        //     this.scorelist=data.data.data;
        // })
        // rateList().then((data)=>{
        //     this.ratingList=data.data.data;
        // })
    },
    mounted(){
        new BScroll('.evaluate',{
            click:true
        })
    },
    filters:{
        formate(t) {
            //格式化创建时间
            return moment(t).format("YYYY-MM-DD hh:mm:ss");
        },
    },
    computed:{
        // 获取商家信息
        scorelist(){
            return this.$store.state.scorelist
        },
        //获取评论列表
        ratingList(){
            return this.$store.state.ratingList
        },
    }
}
</script>

<style lang="less" scoped>
    .evaluate{
        height: 100%;
        .rating{
            background: #fff;
            padding:20px;
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            .left-rating{
                border-right:1px solid #ccc;
                text-align: center;
                padding-right: 15px;
                .score{
                    color:#FE9B02;
                    font-size: 26px;
                }
                .composite{
                    padding: 5px 0;
                    font-size: 14px;
                }
                .bigger{
                    font-size: 12px;
                    color:#929699;
                }
            }
            .right-rating{
                padding-left: 15px;
                color:#353C43;
                .top-star,.center-star{
                    display: flex;
                    justify-content: space-around;
                    font-size: 13px;
                    margin-bottom: 10px;
                    .stars{
                        margin: 0 13px;
                        .star-img{
                            width: 15px;
                            height: 15px;
                            margin-right: 5px;
                        }
                    }
                    .grade{
                        color:#FE9B02;
                    }
                }
                .bottom-time{
                    font-size: 13px;
                    .send-time{
                        margin-left: 13px;
                        color:#929699;
                    }
                }
            }
        }
        .rating-list{
            background: #fff;
            padding:20px;
            .category{
                display: flex;
                border-bottom: 1px solid #eee;
                padding-bottom: 20px;
                .total,.good,.bad{
                    display: inline-block;
                    width: 70px;
                    height: 36px;
                    text-align: center;
                    line-height: 36px;
                    font-size: 14px;
                    margin-right:10px;
                    .total-num{
                        font-size: 12px;
                        margin-left: 5px;
                    }
                }
                .total{
                    background: #00A0DC;
                    color:#fff;
                }
                .good{
                    background: #CCECF7;
                    color:#4D5760;
                }
                .bad{
                    background: #EAEBED;
                    color:#4D5760;
                }
            }
            .iscontent{
                padding:12px;
                font-size: 14px;
                color:#929699;
                border-bottom: 1px solid #ccc;
            }
            .content-list{
                .detail{
                    padding: 20px 10px;
                    display: flex;
                    justify-content: flex-start;
                    color:#353C43;
                    font-size: 12px;
                    border-bottom: 1px solid #ccc;
                    .radius{
                        width: 30px;
                        height: 30px;
                        .head-img{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                        }
                    }
                    .right-box{
                        flex:1;
                        padding-left: 15px;
                        .top-title{
                            display: flex;
                            justify-content: space-between;
                            .date{
                                color:#929699;
                            }
                        }
                        .top-star{
                            display: flex;
                            justify-content: flex-start;
                            margin: 5px 0;
                            .star-img{
                                width: 10px;
                                height: 10px;
                                margin-right: 5px;
                            }
                            .center-time{
                                color:#929699;
                                margin-left: 7px;
                            }
                        }
                        .middle{
                            font-size: 13px;
                            line-height: 20px;
                        }
                        .bottom-goods{
                            display: flex;
                            justify-content: flex-start;
                            flex-wrap:wrap;
                            .select-foods{
                                display: inline-block;
                                width: 60px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                border:1px solid #ccc;
                                margin: 10px 5px 0 0;
                                color:#929699;
                                font-size: 12px;
                            }
                        }
                    }
                    
                }
            }
        }
    }
</style>