import axios from 'axios'

const request = axios.create({
    baseURL: 'http://172.16.14.243:3000',    //配置服务器IP+端口
    // baseURL: 'http://172.20.10.7:3000',
    timeout: 10000   //请求超时
})

//获取商家信息
export var getSeller = () => {
    return request.get('/api/seller')
}

//获取商品列表
export var getGoodsList = () => {
    return request.get('/api/goods')
}

//获取评论列表
export var rateList = () => {
    return request.get('/api/ratings')
}