import Login from './components/LoginPage.vue'
import CreatePage from './components/CreateAccPage.vue'
import CartPage from './components/CartPage.vue'
import HomePage from './components/HomePage.vue'
import ProductPage from './components/ProductPage.vue'
import ProductsPage from './components/ProductsPage.vue'
import CheckoutPage from './components/CheckoutPage.vue'
import ReportPage from './components/ReportPage.vue'
import {createRouter,createWebHashHistory} from "vue-router"

const routes =[
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'CreateAccPage',
        component:CreatePage,
        path:'/create-acc'
    },
    {
        name:'CartPage',
        component:CartPage,
        path:'/cart'
    },
    {
        name:'HomePage',
        component:HomePage,
        path:'/home'
    },
    {
        name:'ProductPage',
        component:ProductPage,
        path:'/product'
    },
    {
        name:'CheckoutPage',
        component:CheckoutPage,
        path:'/checkout'
    },
    {
        name:'ProductsPage',
        component:ProductsPage,
        path:'/products'
    },
    {
        name:'ReportPage',
        component:ReportPage,
        path:'/report'
    }
    
];

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router