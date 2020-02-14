<template>
    <div class="footer">
        <div class="car">
            <div class="bgcar">
                <img :src="iconUrl" class="shop-car">
            </div>
        </div>
        <h4 class="total">￥{{totalPrice}}</h4>
        <p class="dispatch">另需配送费￥4元</p>
        <p class="start-price">￥20起送</p>
    </div>
</template>

<script>
    export default {
        computed:{
            iconUrl(){
                if(this.$store.getters.getshopcarlist.length >0){//如果购物车有东西，图标就变为黄色购物车
                    return "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578148151482&di=fbb432a035bda9ce1d959c7ca73dfc65&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F41%2F71%2F581363dd90489_610.jpg"
                }
                return "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578148890492&di=cdce163b95349fe23c50161076895165&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F07%2F24%2F62b5a212fe4483dc7119199a137fdbd6.jpg"
            },
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
            },
            // 计算总价
            totalPrice(){
                let price=0;

                for(let obj of this.shopData){
                    price+=obj.price * obj.num
                }
                return price
            },

        }
    }
</script>

<style lang="less" scoped>
    .footer{
        background: #141C27;
        height: 50px;
        line-height: 50px;
        display: flex;
        color:#CECDCB;
        justify-content: space-between;
        font-size: 14px;
        .total{
            font-size: 16px;
        }
        .car{
            margin:-10px 0 0 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #141C27;
            .bgcar{
                width: 42px;
                height: 42px;
                border-radius: 50%;
                margin:6px 0 0 4px;
                background: #F6F6F6;
                .shop-car{
                    width: 30px;
                    height: 30px;
                    margin:6px 0 0 6px;
                }
            }
        }
        .dispatch{
            font-size: 12px;
        }
        .start-price{
            padding:0 20px;
            background: #2B343B;
        }
    }
</style>