<template>
    <div id="header">
        <div class="head">
            <img :src="sellData.avatar" class="head-img">
            <div class="title">
                <h4>{{sellData.name}}</h4>
                <p class="time">{{sellData.description}}/{{sellData.deliveryTime}}分钟送达</p>
                <div class="sale">
                    <p class="pay">{{sellData.supports[0].description}}</p>
                    <p class="more">{{sellData.supports.length}}个<span>&gt;</span></p>
                </div>
            </div>
        </div>
        <div class="msg">
            <p class="announce">{{sellData.bulletin}}</p>
            <p class="msg-more">&gt;</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        created(){
        },
        computed:{
            //商家信息
            sellData(){
                return this.$store.state.scorelist
            },
        }
    }
</script>

<style lang="less" scoped>
    #header{
        .head{
            background: #484848 url("../assets/images/timg.jpg") no-repeat;
            color:#fff;
            padding: 20px 0 15px 30px;
            display: flex;
            justify-content: flex-start;
            .head-img{
                width: 80px;
                height: 80px;
                margin-right: 15px;
            }
            .title{
                h4{
                    padding-left: 38px;
                    background: url("../assets/images/brand@2x.png") no-repeat left;
                    background-size:32px 18px;
                }
                .time{
                    color:#CECDCB;
                    font-size: 14px;
                    margin: 10px 0 8px;
                }
                .sale{
                    display:flex;
                    justify-content: space-between;
                    color:#CECDCB;
                    font-size: 12px;
                    line-height: 24px;
                    .pay{
                        padding-left: 18px;
                        height: 24px;
                        background: url("../assets/images/decrease_1@2x.png") no-repeat left 8px;
                        background-size:12px 12px;
                    }
                    .more{
                        margin-left: 20px;
                        border-radius: 10px;
                        display: inline-block;
                        width: 36px;
                        height: 24px;
                        text-align: center;
                        background: #3E3630;
                    }
                }
            }
        }
        .msg{
            display: flex;
            justify-content: space-around;
            background: #3E3630;
            padding:6px 0;
            color:#CECDCB;
            .announce{
                font-size: 12px;
                width: 80%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-left: 40px;
                background: url("../assets/images/bulletin@2x.png") no-repeat 12px 3px;
                background-size:22px 12px;
            }
            .msg-more{
                line-height:15px;
            }
        }
        
    }
</style>