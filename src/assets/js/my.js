import VueRouter from 'vue-router'
import first from '../../components/first.vue'
import index from '../../components/index.vue'
import list from '../../components/list.vue'
import datacon from '../../components/datacon.vue'
import shopcar from '../../components/shopcar.vue'
import login from '../../components/login.vue'
import res from '../../components/res.vue'
import my from '../../components/my.vue'
import types from '../../components/types.vue'
var router=new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/list',
                    component:list
                },
                
                {
                    path:'/shopcar',
                    component:shopcar
                },
                {
                    path:'/login',
                    component:login
                },
                {
                    path:'/res',
                    component:res
                },
                
                {
                    path:'/types',
                    component:types
                },
                {
                    path:'/my',
                    component:my,
                }
                
            ],
            redirect:'/index' 
        },
        {
            path:'/datacon',
            component:datacon
        },
        {
            path:"/*",
            redirect:'/index' 
        },
        {
            path:'/login'
        },
    ]
})
export default router;