<template>
    <main>
        <div class="shoppingcart">
            <!-- 购物车顶部 -->
            <div class="shoppingcart_top">
                <p>
                    购物车
                </p>
                <div class="top_img">
                    <img src="img/home01.png" alt="">
                    <img src="img/icon02.png" alt="">
                </div>
            </div>
            <!-- 购物车店铺 -->
            <div class="shoppingcart_shop">
                <p>
                    <img class="checkboxnoshow" v-show="noshow" @click="clickcheckbox" src="img/checkbox02.png" alt="">
                    <img class="checkboxisshow" v-show="isshow" @click="clickcheckbox1" src="img/checkbox01.png" alt="">
                    <img src="img/shoppingcarttop01.png" alt="">
                    <span>自营保税仓</span>
                </p>
            </div>
            <ul>
                <li v-for="(item,index) in shoppingcart" :key="index">
                    
                    <!-- 购物车商品内容 -->
                    <div class="shoppingcart_con">
                    <!-- 内容单选框 -->
                        <div class="shopcon_checkbox">
                            <img class="checkboxnoshow" v-show="connoshow" @click="clickcheckbox_con" src="img/checkbox02.png" alt="">
                            <img class="checkboxisshow" v-show="conisshow" @click="clickcheckbox1_con" src="img/checkbox01.png" alt="">
                        </div>
                        <!-- 商品内容图片 -->
                        <div class="shopcon_img">
                            <router-link to="/datacon">
                                <img :src="item.src" alt="">
                            </router-link>
                            <span>{{item.s01}}</span>
                        </div>
                        <!-- 商品选项信息 -->
                        <div class="shopcon_inf">
                            <div class="shopcon_inf_top">
                                <p>{{item.s02}}</p>
                            </div>
                            <div class="shopcon_inf_mid">
                                <span>{{item.s03}}</span>
                                <button v-on:click="reduce(index)">-</button>
                                {{item.conuts}}
                                <button v-on:click="add(index)">+</button>
                            </div>
                            <div class="shopcon_inf_down">
                                <span>
                                    {{item.price}}
                                </span>
                                <img src="img/del.png" alt="">
                            </div>
                            <!-- <td>{{totalPrice}}</td> -->
                        </div>
                    </div>
                </li>
                <li v-for="(item,index) in shoppingcart" :key="index">
                    <!-- 购物车商品内容 -->
                    <div class="shoppingcart_con">
                    <!-- 内容单选框 -->
                        <div class="shopcon_checkbox" >
                            <img class="checkboxnoshow" v-show="connoshow" @click="clickcheckbox_con" src="img/checkbox02.png" alt="">
                            <img class="checkboxisshow" v-show="conisshow" @click="clickcheckbox1_con" src="img/checkbox01.png" alt="">
                        </div>
                        <!-- 商品内容图片 -->
                        <div class="shopcon_img">
                            <router-link to="/datacon">
                                <img :src="item.src" alt="">
                            </router-link>
                            <span>{{item.s01}}</span>
                        </div>
                        <!-- 商品选项信息 -->
                        <div class="shopcon_inf">
                            <div class="shopcon_inf_top">
                                <p>{{item.s02}}</p>
                            </div>
                            <div class="shopcon_inf_mid">
                                <span>{{item.s03}}</span>
                                <button v-on:click="reduce(index)">-</button>
                                {{item.conuts}}
                                <button v-on:click="add(index)">+</button>
                            </div>
                            <div class="shopcon_inf_down">
                                <span>
                                    {{item.price}}
                                </span>
                                <img src="img/del.png" alt="">
                            </div>
                            <!-- <td>{{totalPrice}}</td> -->
                        </div>
                    </div>
                </li>
            </ul>
            <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
                <van-checkbox v-model="checked">全选</van-checkbox>
            </van-submit-bar>
            <div class="bottomnull">

            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            noshow:true,
            isshow:false,
            connoshow:true,
            conisshow:false,

            shoppingcart:[
                {
                    src:'img/recom01.png',
                    s01:'每日限购5件',
                    s02:'【新款番茄红333 N37】GIVENCHY 纪梵希 高定香榭小羊皮唇膏 3.4克',
                    s03:'颜色：#306',
                    conuts:1,
                    price:'199'
                }
            ]
        }
    },
    // computed:{
    //     totalPrice(a){
    //         console.log(this.shoppingcart[a].price)
    //         return parseInt(this.shoppingcart[a].price)*parseInt(this.shoppingcart[a].conuts);
    //     }
    // },
    methods:{
        clickcheckbox(){
            this.noshow = !this.noshow;
            this.isshow = !this.ishow;
        },
        clickcheckbox1(){
            if(this.isshow==true){
                this.isshow=false;
                this.noshow=true;
            }
        },
        clickcheckbox_con(){
            this.connoshow = !this.connoshow;
            this.conisshow = !this.conisshow;
        },
        clickcheckbox1_con(){
            if(this.conisshow==true){
                this.conisshow=false;
                this.connoshow=true;
            }
        },
        add(a){
            // console.log(this.conuts)
            this.shoppingcart[a].conuts=parseInt(this.shoppingcart[a].conuts)+1;
            
        },
        reduce(b){
            // console.log(this.conuts)
            this.shoppingcart[b].conuts=parseInt(this.shoppingcart[b].conuts)-1;
            
        }
    }
}
</script>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.shoppingcart_top{
    background-color: white;
    display: flex;
    justify-content: space-between;
}
.shoppingcart_top p{
    font-size: 4vw;
    margin-left: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top_img{
    display: flex;
    justify-content: space-between;
    width: 30%;
    /* margin-left: 60px; */
}
.top_img img{
    padding: 10px 0px;
    width: 40%;
}
/* 店铺行 */
.shoppingcart_shop{
    padding: 10px 0px;
    display: flex;
    align-items: center;
}
.shoppingcart_shop img{
    width: 6vw;
    margin-left: 10px;
}
.shoppingcart_shop img:nth-of-type(3){
    width: 7.84vw;
}
/* 购物车商品内容 */
.shoppingcart_con{
    background-color: white;
    display: flex;
    justify-content: space-between;
}
/* 购物车商品单选框 */
.shopcon_checkbox img{
    margin-top: 30px;
    padding: 10px;
    width: 6vw;
}
/* 购物车商品图片 */
.shopcon_img{
    width: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
/* 购物车商品图片 */
.shopcon_img a{
    width: 100%;
}
.shopcon_img a img{
    width: 100%;
}
/* 购物车商品图片下文字 */
.shopcon_img span{
    font-size: 3.2vw;
    color: red;
}
/* 购物车商品图片右侧 */
.shopcon_inf{
    margin: 10px;
}
/* 购物车商品图片右侧文字 */
.shopcon_inf_top p{
    margin: 10px 0px;
    font-size: 3.2vw;
    overflow: hidden;
    text-decoration: none;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
/* 右侧中间行 */
.shopcon_inf_mid{
    display: flex;
    justify-content: space-between;
}
.shopcon_inf_mid span{
    font-size: 3vw;
    color: gray;
}
.shopcon_inf_mid button{
    width: 5vw;
    background-color: white;
    border: 1px solid gray;
}
.shopcon_inf_down{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.shopcon_inf_down span{
    font-size: 3vw;
    color: red;
}
.shopcon_inf_down img{
    width: 12%;
}
.bottomnull{
    height: 20%;
    background-color: red;
}
::v-deep .van-submit-bar{
    bottom: 85px;
}
</style>