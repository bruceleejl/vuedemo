<template>
    <main>
        <router-view></router-view>
            <ul class="bottombox">
                <li class="imgone">
                    <router-link to="/index">
                    <img src="img/home.png" alt="">
                    <img src="img/home01.png" alt="">
                    <br>
                    首页
                    </router-link>
                </li>
                <li>
                    <router-link to="/types">
                    <img src="img/scarch.png" alt="">
                    <img src="img/scarch01.png" alt="">
                    <br>
                    <span>分类</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/shopcar">
                    <img src="img/shopcar.png" alt="">
                    <img src="img/shopcar01.png" alt="">
                    <br>
                    <span>购物车</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/login">
                    <img src="img/user.png" alt="">
                    <img src="img/user01.png" alt="">
                    <br>
                    <span>我的考拉</span>
                    </router-link>
                </li>
            </ul>
    </main>
</template>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
body{
    overflow-x: hidden;
}
/* 底部导航 */
    .bottombox{
        position: fixed;
        width: 100%;
        height: 80px;
        bottom: 0px;
        left: 0px;
        border-top: 1px solid gray;
        background-color: #fff;
        text-align: center;
        overflow: hidden;
        /* display: flex;
        flex-direction: row; */
    }
    /* 底部导航 */
    .bottombox li{
        width: 25%;
        float: left;
        vertical-align:middle;
    }
    .bottombox a img:nth-of-type(1){
        display: inline-block;
        color: red;
    }
    .bottombox a img:nth-of-type(2){
        display: none;
    }
    .bottombox .router-link-active img:nth-of-type(1){
        display: none;
    }
    .bottombox .router-link-active img:nth-of-type(2){
        display: inline-block;
    }
    a{
        text-decoration: none;
        color: grey;
    }
    /* 底部导航 */
    .bottombox li img{
        width: 20px;

    }  
</style>