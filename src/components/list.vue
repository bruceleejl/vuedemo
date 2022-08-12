<template>
    <main>
        <!-- <van-grid :border="false" :column-num="3"> -->
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
    <!-- </van-grid> -->
    </main>
</template>
<script>
export default {
    // el:'#app',
    data(){
        return{
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
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
main{
    margin: 0vw 10px;
    background-color: #f5f5f5;
}
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
