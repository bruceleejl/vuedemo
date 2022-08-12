<template>

    <main>
        <div class="kaolalogo">
            <img src="img/kaolalogo.png" alt="">
            <span>打开考拉</span>
        </div>
        
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <div class="topback">
                <img src="img/back.png" alt="">
            </div>
            <van-swipe-item>
                <div class="data_img">
                    <img src="img/datacon01.png" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="data_img">
                    <img src="img/datacon02.png" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="data_img">
                    <img src="img/datacon03.png" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="data_img">
                    <img src="img/datacon04.png" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="data_img">
                    <img src="img/datacon05.png" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="data_img">
                    <img src="img/datacon06.png" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="data_img">
                    <img src="img/datacon07.png" alt="">
                </div>
            </van-swipe-item>
        </van-swipe>
        <div class="comdis">
            <!-- <img src="img/zhekoubeijing.png" alt=""> -->
            <div class="comleft">
                <div class="disleft_one">
                    <span>￥</span>
                </div>
                <div class="disleft_two">
                    <span>99</span>
                </div>
                <div class="disleft_three">
                    <span>起</span>
                </div>
                <div class="disleft_four">
                    <span>
                        优惠价
                        <i>￥</i>
                        <h5>69</h5>
                        <i>起</i>
                    </span>
                </div>
            </div>
            <div class="comright">
                <img src="img/kaolazhekou.png" alt="">
                <p>
                    <span>距结束</span>
                    <van-count-down :time="time" />
                </p>
            </div>
        </div>
        <div class="comvip">
            <p>
                开通黑卡下单预计省3.45元,可得10元红包?
                <span>立即开卡</span>
            </p>
        </div>
        <div class="cominf">
            <div class="inftop">
                <p>
                <span>下单立减30元</span>
                <span>券满300减30</span>
                <span>豆抵0.6元</span>
                <i>领券 > </i>
                </p>
            </div>
            <div class="inftwo">
                <div class="border_r">
                    <img src="img/datacon01.png" alt="">
                </div>
                <img src="img/datacon06.png" alt="">
                <p>#999 滋润 (期效至23年5月)</p>
                <img src="img/datacon07.png" alt="">
            </div>
            <div class="jinkoushui">
                <p>进口税：预计￥22.83起 ？</p>
            </div>
            <div class="inftype">
                <p>【全新丝绒999】 Dior迪奥烈艳蓝金唇膏口红999哑光/840/888/720/772/760/100/080新版</p>
            </div>
            <div class="cor_com">
                <img src="img/corcom.png" alt="">
                <p>跨境商品</p>
            </div>
        </div>
        <div class="go_inf">
            <div class="go_inf_top">
                <p>
                    <img src="img/msg.png" alt="">
                        <img src="img/yes.png" alt="">
                        <i>入驻严审 ></i>
                        <img src="img/yes.png" alt="">
                        <i>权威质检 ></i>
                </p>
            </div>
            <div class="go_inf_del">
                    <div class="go_inf_img">
                        <img src="img/go01.png" alt="">
                        <span class="inf_line"></span>
                        <img src="img/go02.png" alt="">
                        <span  class="inf_line"></span>
                        <img src="img/go03.png" alt="">
                    </div>
                    <p>
                        <span>法国品牌</span>
                        <span>商家保税仓发货</span>
                        <span>张家口市</span>
                    </p>
            </div>
            <van-cell is-link @click="showPopup">
                <div class="type_sel">
                    <p>
                        <span>
                            选择
                        </span>
                        <span>
                            颜色
                        </span>
                    </p>
                </div>
            </van-cell>
            <van-cell is-link @click="goaddr">
                <div class="add_sel">
                    <p>
                        <span>配送</span>
                        <span>金华至张家口桥东区
                        <p>付款后，48小时内发货，预计8月15日送达</p>
                        </span>
                    </p>
                </div>
            </van-cell>
            <van-cell is-link @click="goaddr">
                <div class="add_sel">
                    <p>
                        <span>运费</span>
                        <span>免运费</span>
                    </p>
                </div>
            </van-cell>
            <van-cell is-link @click="goaddr">
                <div class="sxg">
                    <p>
                        <img src="img/shengxingou.png" alt="">
                        <span>极速退款·上门取件</span>
                    </p>
                </div>
            </van-cell>
            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                <van-area title="标题" :area-list="areaList" />
            </van-popup>
            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                <van-area title="标题" :area-list="areaList" />
            </van-popup>
            <p class="shuoming">说明：不支持7天无理由退货</p>
        </div>
        <div class="fjth_img">
            <img src="img/fjth.png" alt="">
        </div>
        <!-- 商品评价 -->
        <div class="comeva">
            <div class="eva_top">
                <p>
                    <span>商品评价(999)</span>
                    <span>好评98.3% ></span>
                </p>
            </div>
            <div class="eva_two">
                <p>
                    <span>颜色漂亮(32)</span>
                    <span>漂亮精致(14)</span>
                    <span>物流快(20)</span>
                </p>
            </div>
            <div class="eva_con">
                <ul>
                    <li>
                        <div class="con_one">
                            <div class="con_txt">
                                <img src="img/icon02.png" alt=""><span>李***h</span>
                                <p>上嘴效果：非常顺滑 但看起来又有些哑光 丝绒质感很惊艳 包装品质：好 商品价格：能接受 还是比专柜合适很多 整体感受：很喜欢 质感效果都很好 比999哑光和滋润的都更显色  </p>
                                <p>颜色：新款丝绒#999</p>
                            </div>
                            <div class="con_img">
                                <img src="img/evacon01.png" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="con_one">
                            <div class="con_txt">
                                <img src="img/icon02.png" alt=""><span>李***h</span>
                                <p>上嘴效果：非常顺滑 但看起来又有些哑光 丝绒质感很惊艳 包装品质：好 商品价格：能接受 还是比专柜合适很多 整体感受：很喜欢 质感效果都很好 比999哑光和滋润的都更显色  </p>
                                <p>颜色：新款丝绒#999</p>
                            </div>
                            <div class="con_img">
                                <img src="img/evacon01.png" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="con_one">
                            <div class="con_txt">
                                <img src="img/icon02.png" alt=""><span>李***h</span>
                                <p>上嘴效果：非常顺滑 但看起来又有些哑光 丝绒质感很惊艳 包装品质：好 商品价格：能接受 还是比专柜合适很多 整体感受：很喜欢 质感效果都很好 比999哑光和滋润的都更显色  </p>
                                <p>颜色：新款丝绒#999</p>
                            </div>
                            <div class="con_img">
                                <img src="img/evacon01.png" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 海外旗舰店 -->
        <div class="seashop">
            <div class="sealeft">
                <img src="img/farmacity.png" alt="">
            </div>
            <div class="seashop_txt">
                <p>farmacity海外旗舰店</p>
                <div class="seashop_mid">
                    <p>
                        综合体验
                        <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" size="13px"/>
                    </p>
                </div>
            </div>
            <p>进店看看</p>
            <i>></i>
        </div>
        <!-- 相关推荐 -->
        <div class="recom">
            <p>相关推荐</p>
            <div class="recom_con">
                <ul>
                    <li v-for="(item,index) in recomlist" :key="index">
                        <div class="recom_img">
                            <img :src="item.src" alt="">
                            <i>{{item.recom5}}</i>
                            <div class="img_txt">
                                <p>
                                    <span>{{item.recom1}}</span>
                                    {{item.recom2}}
                                </p>
                            </div>
                            <div class="img_mo">
                                <p>{{item.recom3}}</p>
                                <span>{{item.recom4}}</span>    
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 详细介绍 -->
        <div class="xxjs">
            <span class="intrline"></span>
            <p>详细介绍</p>
            <span class="intrline"></span>
        </div>
        <!-- 产品信息 -->
        <div :class="{'proinf':1,'one':nums,'two':0}" >
                <h4>产品信息</h4>
                <p>
                    <span>功能</span>
                    <span>装扮</span>
                </p>
                <p>
                    <span>是否为特殊用途化妆品</span>
                    <span>否</span>
                </p>
                <p>
                    <span>化妆品备案编号/注册证号</span>
                    <span>无</span>
                </p>
                <p>
                    <span>质地</span>
                    <span>膏状</span>
                </p>
                <p>
                    <span>产品类型</span>
                    <span>口红</span>
                </p>
                <p>
                    <span>适用部位</span>
                    <span>唇部</span>
                </p>
                <p>
                    <span>包装</span>
                    <span>其他</span>
                </p>
                <p>
                    <span>品名</span>
                    <span>烈焰蓝金唇膏</span>
                </p>
                <p>
                    <span>适用年龄</span>
                    <span>50岁以上  18-35岁  35-50岁 18岁以下</span>
                </p>
                <p>
                    <span>妆效</span>
                    <span>哑光 光泽</span>
                </p>
                <p>
                    <span>是否为特殊用途化妆品</span>
                    <span>否</span>
                </p>
                <p>
                    <span>限期使用日期范围</span>
                    <span>3年</span>
                </p>
        </div>
        <div class="transall" @click="showall" v-text="isshow">
        </div>
        <!-- 产品介绍、底部图片 -->
        <div class="botcom_img">
            <ul>
                <li v-for="(item,index) in botimg" :key="index">
                    <img :src="item.src" alt="">
                </li>
            </ul>
        </div>
        <van-collapse v-model="activeNameone">
            <van-collapse-item name="1">
                <template #title>
                <div>版本说明</div>
                </template>
                由于海淘商品是品牌方交由不同国家的生产厂家生产且出售国家地区不同，因此会出现同一商品多版本情况，不同版本的商品会存在细微的差异
            </van-collapse-item>
        </van-collapse>
        <van-collapse v-model="activeNametwo">
            <van-collapse-item name="1">
                <template #title>
                <div>包装与生产日期</div>
                </template>
                1. 商品发货后，通常预计10-16个工作日到货（跨境运输受地域远近、相关管制等各因素影响，时效可能存在迟延，请随时关注后台物流更新轨迹并以此为准）
                <br>
                2. 请您于签收时开箱查验确认内物商品完好，若出现问题，尽可能完整拍摄外箱及面单、箱内清单及实物问题照片或视频，联系考拉商家为您解决。
                <br>
                更多内容您可查看平台公示的相关规则、服务帮助，或联系考拉客服9510286
            </van-collapse-item>
        </van-collapse>
        <van-collapse v-model="activeNamethree">
            <van-collapse-item name="1">
                <template #title>
                <div>价格说明</div>
                </template>
                1、划线价、参考价：商品展示的划线价或参考价可能是品牌专柜价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在考拉上曾经展示过的销售价；由于地区、时间的差异性和市场行情的波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
                <br>
                <br>
                2、促销价：如无特殊说明，促销价是销售商在参考价基础上给予的优惠价格。如有疑问，您可以与客服联系。
                <br>
                <br>
                3、考拉价：考拉非会员用户购买的商品详情页显示的售价，是非会员用户最终决定是否购买该商品的依据。
                <br>
                <br>
                4、会员价：在考拉价的基础上给予会员用户的优惠价格，仅会员用户可以会员价购买该商品。
                <br>
                <br>
                5、折扣：页面显示的“折扣”为考拉价与划线价的对比，该对比值仅供您参考，不作为计算考拉价的依据。 
                <br>
                <br>
                6、价格异常：因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺利购物。
            </van-collapse-item>
        </van-collapse>
        <van-collapse v-model="activeNamefour">
            <van-collapse-item name="1">
                <template #title>
                <div>消费者告知书</div>
                </template>
                <p>尊敬的客户：</p>
                您好！为帮助您更好地选购境外商品,
                <span class="msgbook">
                    请您在购买前务必认真、详细阅读并完全理解本告知书的全部内容，并对自身风险承担做出客观判断,
                </span>
                同意本告知书内容后再下单购买：
                <br>
                <br>
                1、 您在考拉海购上购买的跨境商品等同于境外购买，商品本身可能无中文标签，如有需要，您可以通过商品详情页查看相关商品标签中文翻译或联系客服。
                <br>
                <br>
                2、根据相关法律政策，您选购的跨境商品仅限个人自用，不得进行再次销售。
                <br>
                <br>
                3、您购买的跨境商品符合原产地有关质量、安全、卫生、环保、标识等标准或技术规范要求，可能与我国标准有所不同，由此可能产生的危害、损失或者其他风险，将由您自行承担。
                <br>
                <br>
                4、考拉海购为平台经营者，商品均由商家向您提供，由其承担商品质量安全保证责任。
                <br>
                <br>
                考拉海购精选全球好货，严控每一个环节，为顾客提供正品保障。
                <br>
                <br>
                考拉海购不会通过任何非官方渠道与您联系，也不会主动要求您点击链接进行订单退款或取消订单。
                <br>
                <p>&nbsp;&nbsp;&nbsp;谢谢！</p>
            </van-collapse-item>
        </van-collapse>
        <div class="recforyou">
            <p>为你推荐</p>
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
        </div>
        <!-- 加入购物车 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="onClickButton"
            />
        </van-goods-action>
    </main>
</template>
<script>
// import $ from 'jquery'
export default {
  data() {
    return {
        time: 30 * 60 * 60 * 1000,
        show: false,
        value: 4.5,
        activeNameone: ['1'],
        activeNametwo: ['1'],
        activeNamethree: ['1'],
        activeNamefour: ['1'],
        isshow:"展开",
        nums:false,

        areaList : {
        province_list: {
            110000: '北京市',
            120000: '天津市',
        },
        city_list: {
            110100: '北京市',
            120100: '天津市',
        },
        county_list: {
            110101: '东城区',
            110102: '西城区',
            // ....
        },
        },
        recomlist:[
            {
                src:'img/recom01.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'8色可选'
            },
            {
                src:'img/recom02.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'12色可选'
            },
            {
                src:'img/recom03.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'8色可选'
            },
            {
                src:'img/recom04.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'8色可选'
            },
            {
                src:'img/recom02.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'10色可选'
            },
            {
                src:'img/recom04.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'8色可选'
            },
            {
                src:'img/recom02.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'8色可选'
            },
            {
                src:'img/recom01.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'8色可选'
            },
            {
                src:'img/recom01.png',
                recom1:'自营',
                recom2:'【经典小辣椒】MAC魅可 子弹头时尚唇膏 chili复古红气质牛血色 新品尤雾弹',
                recom3:'每满400减50',
                recom4:'￥99',
                recom5:'8色可选'
            },
        ],
        botimg:[
            {
                src:'img/bottomimg01.png'
            },
            {
                src:'img/bottomimg02.png'
            },
            {
                src:'img/bottomimg03.png'
            },
            {
                src:'img/bottomimg04.png'
            },
            {
                src:'img/bottomimg05.png'
            },
            {
                src:'img/bottomimg06.png'
            },
            {
                src:'img/bottomimg07.png'
            },
            {
                src:'img/bottomimg08.png'
            },
            {
                src:'img/bottomimg09.png'
            },
            {
                src:'img/bottomimg10.png'
            },
            {
                src:'img/bottomimg11.png'
            },
            {
                src:'img/bottomimg12.png'
            },
            {
                src:'img/bottomimg13.png'
            },
            {
                src:'img/bottomimg14.png'
            },
            {
                src:'img/bottomimg15.png'
            },
            {
                src:'img/bottomimg16.png'
            },
            {
                src:'img/bottomimg17.png'
            },
            {
                src:'img/bottomimg18.png'
            },
            {
                src:'img/bottomimg19.png'
            },
            {
                src:'img/bottomimg20.png'
            },
            {
                src:'img/bottomimg21.png'
            },
            {
                src:'img/bottomimg22.png'
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
    };
    
  },
  methods: {
    onClickIcon() {
    //   Toast('点击图标');
    },
    onClickButton() {
    //   Toast('点击按钮');
    },
    showPopup() {
      this.show = true;
    },
    goaddr() {
      this.show = true;
    },
    showall(){
        this.nums=!this.nums
        if(this.nums==true){
            this.isshow="收起"
        }else{
            this.isshow="展开"
        }
    }
  },
  mounted(){
    // $('.transall').click(function(){
    //     // console.log(123)
    //     $('.proinf').animate({"height":"800px"})
    // })
  }
}
</script>
<style scoped>
.my-swipe .van-swipe-item {
color: #fff;
/* font-size: 20px; */
/* line-height: 150px; */
text-align: center;
/* background-color: #39a9ed; */
}
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}

main{
    margin: 0px 5px;
    background-color: #f5f5f5;
}
.topback{
    position: absolute;
    left: 10px;
    z-index: 666;
}
.topback img{
    width: 20%;
}
/* 考拉下载logo */
.kaolalogo{
    position: fixed;
    right: 0px;
    top: 50%;
    z-index: 666;
    display: flex;
    flex-direction: column;
    /* text-align: center; */
}
.kaolalogo img{
    width: 65px;
}
.kaolalogo span{
    font-size: 13px;
    color: white;
    padding: 0px 5px;
    border-radius: 10px;
    background: linear-gradient(to right,#ff0204,#ff1831,#fb3b6a);
}
.data_img{
    height: 380px;
}
.data_img img{
    width: 100%;
}
/* 展开 */
.takeup{
    height: 800px;
}
/* 商品折扣 */
.comdis{
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-image: url('../../public/img/zhekoubeijing.png');
    background-size: 100%;
}
.comleft{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.van-count-down{
    color: white;
}
.comright{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.comright img{
    margin-left: 10px;
    margin-top: 20px;
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.comright p{
    margin-bottom: 20px;
    font-size: 14px;
    padding: 0px;
    display: flex;
    color: white;
    align-items: center;
    
}
.comright span{
    padding: 0px;
    line-height: 10px;
}
/* 商品折扣左边 */
.disleft_one{
    color: white;
    padding: 30px 0px;
}
.disleft_two{
    color: white;
    font-size: 22px;
}
.disleft_three{
    color: white;
}
.disleft_four span{
    height: 30px;
    width: 110px;
    border-radius: 20px;
    font-size: 13px;
    margin-left: 5px;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: center;
    background-color: white;
}
.disleft_four span i{
    font-weight: bolder;
}
.disleft_four span h5{
    font-size: 18px;
}
/* 开通黑卡 */
.comvip{
    /* display: flex; */
    /* align-items: center; */
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    font-size: 12px;
    color: #eed0a7;
    background:linear-gradient(to right,#333333,#444444,#575757) ;
}
.comvip span{
    display: inline-block;
    text-align: center;
    width: 70px;
    font-size: 12px;
    /* margin: 10px 0px; */
    margin-left: 30px;
    padding:3px 0px;

    border-radius: 16px;
    color: black;
    background:linear-gradient(to right,#ffe3bd,#ffe7c6,#ffecd2) ;
}
.cominf{
    margin: 10px 0px;
    background-color: white;
    border-radius: 5px;
}
.inftop{
    margin: 10px;
    padding-top: 10px;
}
.inftop span{
    font-size: 13px;
    margin-left: 7px;
    color: red;
    background-color: #ffeaea;
}
.inftop i{
    font-size: 14px;
    margin-left: 70px;
    color: red;
}
.inftwo{
    margin: 10px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.border_r{
    width: 40px;
    padding: 0px 10px;
    border-right: 1px solid black;
}
.border_r img{
    margin-right: 20px;
}
.inftwo img{
    width: 40px;
    border: 1px solid black;
    border-radius: 50%;
}
.inftwo>img:nth-of-type(1){
    margin-left: 10px;
}
.inftwo>img:nth-of-type(2){
    margin-left: 10px;
}
.inftwo p{
    color: gray;
    padding: 0px 10px;
    margin: 0px 5px;
    font-size: 13px;
    line-height: 20px;
}
.jinkoushui{
    padding: 10px 10px;
    color: gray;
    font-size: 13px;
}
.inftype{
    font-size: 17px;
    font-weight: bolder;
}
.cor_com{
    font-size: 15px;
    padding: 10px 0px;
    color: gray;
    display: flex;
    align-items: center;
}
.cor_com img{
    padding-right:10px;
    width: 16px;
}
.go_inf{
    background-color: white;
    padding: 5px 0px;
}
.go_inf_top{
    padding: 15px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
}
.go_inf_top img{
    margin-left: 10px;
    width: 15px;
}
.go_inf_top img:nth-of-type(1){
    width: 90px;
}
.go_inf_top i{
    /* line-height: 15px; */
    margin-left: 5px;
}
.go_inf_img{
    /* padding: 0px 30px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.go_inf_del{
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
}
.go_inf_del img{
    width: 20px;
}
.go_inf_del p span{
    padding: 10px 20px;
}
.inf_line:nth-of-type(1){
    width: 110px;
    height: 1px;
    margin-bottom: 5px;
    background: red;
    display: inline-block;
}
.inf_line:nth-of-type(2){
    width: 110px;
    height: 1px;
    margin-bottom: 5px;
    background: rgb(226, 178, 178);
    display: inline-block;
}
.type_sel p span:nth-of-type(2){
    margin-left: 20px;
    font-weight: bolder;
}
.add_sel p span:nth-of-type(2){
    margin-left: 20px;
}
.add_sel span p{
    margin-left: 50px;
}
.sxg img{
    width: 50px;
}
.shuoming{
    font-size: 13px;
    color: gray;
}
.fjth_img img{
    /* height: 50px; */
    width: 100%;
}
.comeva{
    padding: 10px 0px;
    background-color: white;
}
.eva_top p span:nth-of-type(1){
    font-weight: bolder;
}
.eva_top p span:nth-of-type(2){
    margin-left: 180px;
    color: red;
}
.eva_two{
        margin-top: 10px;
}
.eva_two span{
    font-size: 13px;
    margin: 10px;
    padding: 5px;
    background-color: #ffeaea;
}
/* 商品评价内容 */
.eva_con{
    margin: 10px 0px;
}
.eva_con ul{
    display: flex;
    flex-direction: row;
    overflow-x: auto;
}
.eva_con ul li{
    display: flex;

    border-radius: 10px;
    margin-right: 10px;
    background-color: #f5f5f5;
}
.con_one{
    /* margin-top: 20px; */
    display: flex;
    flex-direction: row;
}
.con_txt{
    margin: 5px 0px;
}
.con_txt p{
    width: 200px;
    font-size: 13px;
    margin: 10px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.con_txt p:nth-of-type(2){
    margin: 0px;
    margin-left: 30px;
    color: gray;
}
.con_txt img{
    margin-left: 10px;
    width: 15px;
}
.con_img img{
    width: 100px;
}
/* 海外旗舰店内容 */
.seashop{
    margin: 10px 0px;
    border-radius: 13px;
    background-color: white;
    display: flex;
}
.seashop>p{
    margin-left: 90px;
    line-height: 55px;
    color: red;
}
.seashop>i{
    line-height: 55px;
}
.sealeft img{
    padding: 10px 0px;
    width: 50px;
}
.seashop_txt{
    padding:10px 0px;
}
.seashop_txt>p{
    font-weight: bolder;
}
.seashop_mid{
    border-radius: 13px;
    background-color: #f5f5f5;
}
.seashop_mid p{
    /* font-weight: bold; */
    font-size: 13px;
}
/* 相关推荐 */
.recom{
    border-radius: 10px;
    padding: 10px 0px;
    margin: 10px 0px;
    background-color: white;
}
.recom>p{
    font-size: 17px;
    font-weight: bolder;
}
.recom_con ul{
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}
.recom_con ul li{
    margin: 6px;
    width: 30%;
    background-color: #f5f5f5;
}
.recom_img{
    display: flex;
    flex-direction: column;
}
.img_mo{
    background-color: white;
}
.img_mo>p{
    width: 75px;
    font-size: 12px;
    color: red;
    background-color: #ffeaea;
}
.img_mo>span{
    color: red;
    font-weight: bolder;
}
.img_txt{
    display: flex;
    background-color: white;
}
.img_txt span{
    padding: 2px 3px;
    border-radius: 7px;
    font-size: 12px;
    color: white;
    background-color: red;
}
.img_txt p{
    font-size: 13px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.recom_img{
    position: relative;
}
.recom_img img{
    width: 110px;
}
.recom_img i{
    font-size: 12px;
    position: absolute;
    padding: 2px 0px;
    left: 3px;
    top: 20px;
    width: 16px;
    color: gray;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
}
.intrline:nth-of-type(1){
    width: 110px;
    height: 1px;
    /* margin-bottom: 5px; */
    background: gainsboro;
    display: inline-block;
}
.xxjs{
    /* margin-left: 50px; */
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.intrline:nth-of-type(2){
    width: 110px;
    height: 1px;
    /* margin-bottom: 5px; */
    background: gainsboro;
    display: inline-block;
}
/* 产品信息 */
.proinf{
    background-color: white;
    height: 240px;
    overflow: hidden;
}
.proinf p{
    display: flex;
}
.proinf p span:nth-of-type(1){
    width: 97px;
    font-size: 14px;
    margin: 5px;
    color: gray;
    /* display: flex;
    justify-content: space-between; */
}
.proinf p span:nth-of-type(2){
    font-size: 14px;
    margin-left: 10px;
    margin: 5px;
    /* display: flex;
    justify-content: space-between; */
}
.botcom_img{
    margin-top: 10px;
}
.botcom_img img{
    width: 100%;
}
.msgbook{
    font-size: 15px;
    font-weight: bolder;
}
/* 为你推荐 */
.recforyou>p{
    text-align: center;
    padding: 10px 0px;
    font-weight: bolder;
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
.one{
    height: 450px;
}
.two{
    height: 240px;
}
.transall{
    background-color: white;
    text-align: center;
}
</style>