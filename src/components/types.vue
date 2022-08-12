<template>
    <van-tree-select height="100vh" :items="items" :main-active-index.sync="active">
        <template #content>
            <div class="typeone" v-if="active === 0">
                <div class="onetop">
                    <ul>
                        <li>
                            <p>考拉海购出品</p>
                            <div class="onecon">
                                <ul>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>美妆彩妆</p>
                            <div class="onecon">
                                <ul>
                                    <li>
                                        <router-link to="/list">
                                            <img src="img/typeimg01.png" alt="">
                                        </router-link>
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>美妆彩妆</p>
                            <div class="onecon">
                                <ul>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg01.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="typeone" v-if="active === 1">
                <div class="onetop">
                    <ul>
                        <li>
                            <p>畅销星品</p>
                            <div class="onecon">
                                <ul>
                                    <li>
                                        <router-link to="/list">
                                            <img src="img/typeimg21.png" alt="">
                                        </router-link>
                                        
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>畅销星品</p>
                            <div class="onecon">
                                <ul>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>畅销星品</p>
                            <div class="onecon">
                                <ul>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>畅销星品</p>
                            <div class="onecon">
                                <ul>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <p>畅销星品</p>
                            <div class="onecon">
                                <ul>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg21.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg22.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                    <li>
                                        <img src="img/typeimg23.png" alt="">
                                        <p>IMFORME</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </van-tree-select>
</template>
<style scoped>
.onetop>ul>li{
    border-bottom: 1px solid gainsboro;
}
.onecon ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.onecon ul li{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    width: 30%;
}
.onecon ul li img{
    width: 100%;
}
</style>
<script>
export default {
    data() {
    return {
      active: 0,
      items: [
        { 
            text: '品牌墙' 
        }, 
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
        { 
            text: '美妆彩妆' 
        }, 
        { 
            text: '奶粉/纸尿裤' 
        },
      ],
    };
  },
}
</script>