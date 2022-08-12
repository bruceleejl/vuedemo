<template>
    <main>
        <!-- 头部搜索和登录/注册 -->
        <van-search show-action placeholder="请输入搜索关键词">
            <template #action>
                <div>搜索</div>
            </template>
        </van-search>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <div class="lunbotu">
                    <img src="img/lunbo01.png" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="lunbotu">
                    <img src="img/lunbo02.png" alt="">
                </div>
            </van-swipe-item>
        </van-swipe>
        <div class="headrow">
            <ul>
                <li>
                    <img src="img/head01.png" alt="">
                </li>
                <li>
                    <img src="img/head02.png" alt="">
                </li>
                <li>
                    <img src="img/head03.png" alt="">
                </li>
                <li>
                    <img src="img/head04.png" alt="">
                </li>
                <li>
                    <img src="img/head05.png" alt="">
                </li>
            </ul>
        </div>
        <div class="topcon">
            <div class="topone">
                <div class="topleft">
                    <p>
                        硬核补贴
                    </p>
                    <p>
                        <!-- <van-count-down :time="time">
                        <template #default="timeData">
                            <span class="block">{{ timeData.hours }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.minutes }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.seconds }}</span>
                        </template>
                        </van-count-down> -->
                        <van-count-down :time="time" />
                    </p>
                </div>
                <a href="">大牌底价补贴 >&nbsp;</a>
            </div>
            <div class="toptwo">
                <ul>
                    <li>
                        <img src="img/top01.png" alt="">
                        <div class="contxt">
                            <p>硬核价</p>
                            <span>￥136</span>
                        </div>
                        <div class="conmonny">
                            <span>￥300</span>
                        </div>
                    </li>
                    <li>
                        <img src="img/top02.png" alt="">
                        <div class="contxt">
                            <p>硬核价</p>
                            <span>￥136</span>
                        </div>
                        <div class="conmonny">
                            <span>￥300</span>
                        </div>
                    </li>
                    <li>
                        <img src="img/top03.png" alt="">
                        <div class="contxt">
                            <p>硬核价</p>
                            <span>￥136</span>
                        </div>
                        <div class="conmonny">
                            <span>￥300</span>
                        </div>
                    </li>
                    <li>
                        <img src="img/top04.png" alt="">
                        <div class="contxt">
                            <p>硬核价</p>
                            <span>￥136</span>
                        </div>
                        <div class="conmonny">
                            <span>￥300</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="topthree">
                <ul>
                    <li v-for="(item,index) in listtop" :key="index" v-bind:class="{'current':index==num}" v-on:click="change(index)">
                        <p>{{item.selone}}</p>
                        <span>{{item.seltwo}}</span>
                    </li>
                </ul>
            </div>

        </div>
        <div class="listcon">
            <ul>
                <li class="licon" v-for="(item,index) in listcon" :key="index">
                    <router-link to="/datacon">
                        <img :src="item.src" alt="">
                    </router-link>
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
    // el:'#app',
    data(){
        return{
            listtop:[
                {
                    selone:'精选',
                    seltwo:'猜你喜欢'
                },
                {
                    selone:'特惠',
                    seltwo:'多买多省'
                },
                {
                    selone:'美妆',
                    seltwo:'魅力装扮'
                },
                {
                    selone:'母婴',
                    seltwo:'家有萌宝'
                },
                {
                    selone:'数码',
                    seltwo:'酷玩科技'
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
                
            ],
            num:0,
            time: 30 * 60 * 60 * 1000,
        }
    },
    methods:{
        change(a){
            this.num=a;
        }
    },   
}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
/* 轮播 */
.lunbotu img{
    width: 100%;
}
.my-swipe .van-swipe-item {
    color: #fff;
    /* font-size: 20px; */
    /* line-height: 150px; */
    text-align: center;
    /* background-color: #39a9ed; */
  }
body{
    background-color: #f5f5f5;
}
main{
    margin: 0vw 10px;
    background-color: #f5f5f5;
}
.headrow{
    /* width: 96vw; */
    background-color: #f5f5f5;
    /* margin: 0px 2vw; */
}
.headrow ul{
    display: flex;
    flex-direction: row;
}
.headrow ul li{
    width: 20vw;
}
.headrow ul li img{
    width: 100%;
}
.topcon{
    /* width: 100vw; */
    /* margin:  0vw 2vw; */
    margin-top: 3vw;
    background-color: white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
}
.topleft{
    display: flex;
    align-items: center;
    justify-content: center;
}
.topleft p:nth-of-type(1){
    font-size: 20px;
    font-weight: bolder;
    font-family: '黑体';

}
/* 硬核补贴 */
.topone{
    margin-top: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.topone a{
    font-size: 13px;
    color: red;
}
.colon {
display: inline-block;
margin: 0 4px;
color: #ee0a24;
}
.block {
display: inline-block;
width: 22px;
color: #fff;
font-size: 12px;
text-align: center;
background-color: #ee0a24;
}
/* 硬核补贴下内容 */
.toptwo{
    margin-top: 3vw;
    /* width: 100vw; */
}

.toptwo ul{
    display: flex;
    flex-direction: row;
}
.toptwo ul li{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.toptwo ul li img{
    width: 25vw;
}
.contxt{
    display: flex;
    align-items: center;
}
.contxt p{
    font-size: 13px;
    color: red;
}
.contxt span{
    font-size: 16px;
    color: red;
    font-weight: bolder;
}
.conmonny{
    font-size: 13px;
    color: gray;
    text-decoration: line-through;
}
.topthree{
    width: 100%;
    background-color: #f5f5f5;
    padding: 10px 0px;
}
.topthree ul{
    display: flex;
    flex-direction: row;
}
/* 精选行 */
.topthree ul li{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.topthree li.current{
    font-size: 17px;
    color: red;
}
.topthree li.current span{
    width: 90%;
    color: white;
    background-color: red;
    border-radius: 13px;
    font-size: 12px;
    text-align: center;
}
.topthree ul li p{ 
    font-size: 17px;
    /* color: red; */
}
.topthree ul li span{ 
    width: 90%;
    /* color: white; */
    /* background-color: red; */
    border-radius: 13px;
    font-size: 12px;
    text-align: center;
}
/* 商品内容 */
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



