<template>
    <main>
        <div class="login_win">
            <div class="login_top">
                <img src="img/kaolalogo.png" alt="">
                <p>考拉海购</p>
            </div>
            <div class="login_phone">
                <input type="text" placeholder="请输入手机号">
                <div class="phone_code">
                    <input type="text" placeholder="请输入验证码">
                <button>获取验证码</button>
                </div>
            </div>
            <div class="checkboxone">
                <input type="radio">我已阅读并同意 <a href="">隐私政策</a>和 <a href="">服务政策</a>
            </div>
            <router-link to="/my">
            <div class="login_button">
                <button>登录</button>
                <span>使用密码验证登录</span>
            </div>
            </router-link>
            <p>其他登录方式</p>
        </div>
    </main>
</template>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
main{
    background-color: white;
}
.login_top{
    margin-top: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login_top img{
    width: 13vw;
}
.login_top p{
    margin-left: 10px;
    font-weight: bolder;
    font-size: 6vw;
}
.login_phone{
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.login_phone input{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 10vw;
    border-radius: 4vw;
    border: none;
    margin-top: 10px;
    background-color: #f5f5f5;
}
/* .login_phone button{
    top: 8.9rem;
    left: 16rem;
    position: absolute;
    border: none;
    border-left: 1px solid gainsboro;
    font-size: 4vw;
    color: red;
    width: 25%;
} */
.checkboxone{
    margin: 10px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-size: 3.5vw;
}
.checkboxone a{
    text-decoration-line: underline;
    padding: 0px 10px;
    color: gray;
}
.login_button{
    display: flex;
    flex-wrap: wrap;
     justify-content: center;
    align-items: center;
}
.login_button button{
    width: 90%;
    border-radius: 4vw;
    border: none;
    height: 10vw;
    color: white;
    background: linear-gradient(to right,#ff98af,#ff8e9b,#ff8284);
    /* display: flex; */
   text-align: center;
}
.login_button span{
    color: gray;
    font-size: 3vw;
    margin-top: 2vw;
    margin-left: 56vw;
}
.login_win>p{
    font-size: 3.6vw;
    color: gray;
    margin-top: 10vw;
    text-align: center;
}
.phone_code{
    margin-top: 4vw;
    width: 90%;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    height: 10vw;
    border-radius: 4vw;
}
.phone_code input{
    margin-top: 0px;
    /* border-right: 1px solid gainsboro; */
    height: 10vw;
    width: 70%;
}
.phone_code>button{
    /* margin-top: 10px; */
    width: 30%;
    height: 10vw;
    padding: 4px 0px;
    border: none;
    border-radius: 4vw;
    /* border-left: 1px solid gainsboro; */
    background-color: transparent;
    font-size: 3.6vw;
    color: red;
    /* width: 25%; */
}
</style>