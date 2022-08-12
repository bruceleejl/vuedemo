<template>
    <main>
        <!-- 头部 -->
        <router-link to="/login">
            <div class="mytop">
                <div class="logorres">
                    <p>登录/注册</p>
                    <p>关注品牌 第一时间发现更多新品、折扣</p>
                </div>
                <span>></span>
            </div>
        </router-link>
        
        <!-- 待付款行 -->
        <div class="mylist">
            <ul>
                <li v-for="(item,index) in mylist" :key="index">
                    <img :src="item.src" alt="">
                    <p>{{item.listtxt}}</p>
                </li>
            </ul>
        </div>
        <!-- 优惠券行 -->
        <div class="coupon_list">
            <ul>
                <li v-for="(item,index) in coupon_list" :key="index">
                    <img :src="item.src" alt="">
                    <p>{{item.coupon_list_txt}}</p>
                </li>
            </ul>
        </div>
        <!-- 收藏行 -->
        <div class="collection">
            <ul>
                <li v-for="(item,index) in collection_list" :key="index">
                    <img :src="item.src" alt="">
                    <p>{{item.collection_txt}}</p>
                </li>
            </ul>
        </div>
        <div class="midimg">
            <img src="img/midimg.png" alt="">
        </div>
        <!-- 我的考拉下列表 -->
        <div class="listcon">
            <ul>
                <li class="licon" v-for="(item,index) in listcon" :key="index">
                    <img :src="item.src" alt="">
                    <!-- 图片下文本内容 -->
                    <div class="context">
                        <!-- 第一行 -->
                        <div class="textone">
                            <img :src="item.src1" alt="">
                            <span>{{item.c1}}</span>
                        </div>
                        <!-- 第二行 -->
                        <div class="texttwo">
                            <p><span>{{item.c2}}</span>{{item.c3}}</p>
                        </div>
                        <!-- 第三行 -->
                        <div class="textthree">
                            <div class="three_l">
                                <span>{{item.c4}}</span>
                            </div>
                            <div class="three_r">
                                <span>{{item.c5}}</span>
                            </div>
                        </div>
                        <!-- 第四行 -->
                        <div class="textfour">
                            <div class="four_1">
                                <span>{{item.c6}}</span>
                            </div>
                            <div class="four_2">
                                <span>{{item.c7}}</span>
                            </div>
                            <div class="four_3">
                                <span>{{item.c8}}</span>
                            </div>
                            <div class="four_4">
                                <span>{{item.c9}}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            mylist:[
                {
                    src:'img/login01.png',
                    listtxt:'待付款'
                },
                {
                    src:'img/login02.png',
                    listtxt:'待付款'
                },
                {
                    src:'img/login03.png',
                    listtxt:'待付款'
                },
                {
                    src:'img/login04.png',
                    listtxt:'待付款'
                },
                {
                    src:'img/login05.png',
                    listtxt:'待付款'
                },

            ],
            coupon_list:[
                {
                    src:'img/yhq01.png',
                    coupon_list_txt:'优惠券'
                },
                {
                    src:'img/yhq02.png',
                    coupon_list_txt:'红包'
                },
                {
                    src:'img/yhq03.png',
                    coupon_list_txt:'考拉豆'
                },
            ],
            collection_list:[
                {
                    src:'img/collection01.png',
                    collection_txt:'收藏'
                },
                {
                    src:'img/collection02.png',
                    collection_txt:'App下载'
                },
                {
                    src:'img/collection03.png',
                    collection_txt:'帮助与客服'
                },
                {
                    src:'img/collection04.png',
                    collection_txt:'设置'
                },
            ],
            listcon:[
                {
                    src:'img/con01.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'104',
                    c9:'.2'
                },
                {
                    src:'img/con02.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'104',
                    c9:'.2'
                },
                {
                    src:'img/con01.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'104',
                    c9:'.2'
                },
                {
                    src:'img/con02.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'104',
                    c9:'.2'
                },
                {
                    src:'img/con01.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'104',
                    c9:'.2'
                },
                {
                    src:'img/con01.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'104',
                    c9:'.2'
                },
                {
                    src:'img/con01.png',
                    src1:'img/icon01.png',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'123',
                    c9:'.1'
                },
                {
                    src:'img/con01.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'123',
                    c9:'.1'
                },
                {
                    src:'img/con01.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'123',
                    c9:'.1'
                },
                {
                    src:'img/con01.png',
                    src1:'img/icon01.png',
                    c1:'佰澳朗德',
                    c2:'自营',
                    c3:'BIO ISLAND 佰澳朗德 孕妇专用产前产后海藻油DHA胶囊',
                    c4:'1件9折',
                    c5:'包邮',
                    c6:'优惠价',
                    c7:'￥',
                    c8:'123',
                    c9:'.1'
                },
            ]
        }
        
    }
}
</script>
<style scoped>
main{
    margin: 0px 5px;
    background-color: #f5f5f5;
}
.mytop{
    color: black;
    /* background-color: aqua; */
    height: 150px;
    /* border-bottom-width:20px ; */
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: row;
}
.mytop span{
    margin-left: 90px;
    margin-top: 40px;
    font-size: 18px;
    font-weight: bolder;
}
.logorres{
    margin: 10px;
}
.logorres p:nth-of-type(1){
    font-size: 20px;
    font-weight: bolder;
}
.logorres p:nth-of-type(2){
    font-size: 13px;
}
.mylist{
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    font-size: 3.6vw;
}
.mylist img{
    width: 40%;
    /* margin-left: 10px; */
}
.mylist ul{
    display: flex;
    justify-content: space-between;
}
.mylist ul li{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.coupon_list{
    height: 25vw;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
}
.coupon_list ul{
    display: flex;
    justify-content: space-between;
}
.coupon_list img{
    width: 7vw;
    /* margin-left: 5px; */
}
.coupon_list ul li{
    width: 33%;
    padding: 10px 30px;
    height: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.coupon_list ul li p{
    /* width: 40px; */
    font-size: 3.6vw;
    height: 50px;
    /* margin-bottom: 20px; */
    /* padding: 10px; */

}
.collection{
    height: 100px;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
}
.collection ul{
    display: flex;
    justify-content: space-between;
}
.collection ul li img{
    /* width: 30px; */
    /* margin-left: 10px; */
    margin-top: 10px;
    /* padding: 10px; */
    width: 35%;
}
.collection p{
    height: 10px;
    font-size: 13px;
    /* margin-left: 10px; */
}
.collection ul li{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.midimg{
    margin: 10px;
}
.midimg img{
    width: 100%;
}
/* 我的考拉下列表 */
.licon{
    width: 48%;
    height: 300px;
    margin: 1%;
    overflow: hidden;
    background-color: white;
}
.licon img{
    width: 100%;
}
/* .listcon{
    height: calc(100vh - 435px);
} */
.listcon ul{
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    /* align-content: space-between; */
}
/* 商品图片下文本内容 */
.context{
    display: flex;
    flex-direction: column;
}
.textone{
    font-size: 13px;
    display: flex;
    flex-direction: row;
    align-content: center;
}
.textone img{
    width: 16px;
}
.textone span{
    margin-left: 5px;
}
.texttwo{
    padding: 3px 3px;
    display: flex;
    flex-direction: row;
    /* flex-flow: row wrap; */
    justify-content: space-between;
}
.texttwo span{
    padding: 0px 4px;
    font-size: 12px;
    width: 50px;
    background-color: red;
    border-radius: 13px;
    color: white;
    text-align: center;
}
.texttwo p{
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.textthree{
    display: flex;
}
.three_l{
    color: red;
    border: 1px solid red;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
}
.three_r{
    font-size: 12px;
    margin-left: 2px;
    color: red;
    border: 1px solid red;
}
.textfour{
    padding: 0px 3px;
    display: flex;
}
.four_1{
    color: red;
}
.four_2{
    line-height: 24px;
    font-size: 12px;
    color: red;
}
.four_3{
    /* line-height: 24px; */
    font-size: 17px;
    font-weight: bolder;
    color: red;
}
.four_4{
    line-height: 24px;
    font-size: 14px;
    font-weight: bolder;
    color: red;
}
</style>