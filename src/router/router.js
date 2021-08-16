import VueRouter from 'vue-router'
import index from '@/views/login/login'
import error from '@/views/error/error'
import home from '@/views/home/home'
import productList from '@/views/product/list'
import productAdd from '@/views/product/add'
import productUpdate from '@/views/product/update'
import productCategory from '@/views/product/category/category'
import productType from '@/views/product/type'
import productBrand from '@/views/product/brand'
import orderList from '@/views/order/list'
import orderSettings from '@/views/order/settings'
import orderApply from '@/views/order/apply'
import orderReason from '@/views/order/reason'
import flash from '@/views/sales/flash/index'
import coupon from '@/views/sales/coupon/index'
import brand from '@/views/sales/brand/index'
import news from '@/views/sales/new/index'
import hot from '@/views/sales/hot/index'
import subject from '@/views/sales/subject/index'
import advertise from '@/views/sales/advertise/index'
import user from '@/views/authority/user/index'
import menu from '@/views/authority/menu/index'
import role from '@/views/authority/role/index'
import res from '@/views/authority/resource/index'
import res_category from '@/views/authority/resource/category'
import categoryAdd from '@/views/product/category/add'
import categoryUpate from '@/views/product/category/update'
import Vue from 'vue'


Vue.use(VueRouter);

const route = new VueRouter({
    routes: [
        {
            name: 'login',
            path: '/login',
            component: index
        },
        {
            name: 'error',
            path: '/error',
            component: error
        },
        {
            name: 'home',
            path: '/home',
            component: home
        },
        {
            name: 'product_list',
            path: '/product/list',
            component: productList
        }, {
            name: 'product_add',
            path: '/product/add',
            component: productAdd,
        },
        {
            name: 'product_update',
            path: '/product/update',
            component: productUpdate,
        },
        {
            name: 'product_category',
            path: '/product/category',
            component: productCategory
        }, {
            name: 'product_type',
            path: '/product/type',
            component: productType
        }, {
            name: 'product_brand',
            path: '/product/brand',
            component: productBrand
        },
        {
            name: 'order_list',
            path: '/order/list',
            component: orderList
        }, {
            name: 'order_settings',
            path: '/order/settings',
            component: orderSettings
        }, {
            name: 'order_apply',
            path: '/order/apply',
            component: orderApply
        }, {
            name: 'order_reason',
            path: '/order/reason',
            component: orderReason
        }, {
            name: 'flash',
            path: '/sales/flash',
            component: flash
        }, {
            name: 'coupon',
            path: '/sales/coupon',
            component: coupon
        },
        {
            name: 'brand',
            path: '/sales/brand',
            component: brand
        }, {
            name: 'new',
            path: '/sales/new',
            component: news
        }, {
            name: 'hot',
            path: '/sales/hot',
            component: hot
        },
        {
            name: 'subject',
            path: '/sales/subject',
            component: subject
        },
        {
            name: 'advertise',
            path: '/sales/advertise',
            component: advertise
        },
        {
            name: 'user',
            path: '/auth/user',
            component: user
        },
        {
            name: 'menu',
            path: '/auth/menu',
            component: menu
        },
        {
            name: 'role',
            path: '/auth/role',
            component: role
        },
        {
            name: 'resource',
            path: '/auth/res',
            component: res
        },
        {
            name: 'resource_category',
            path: '/res/category',
            component: res_category
        },
        {
            name: 'product_category_add',
            path: '/product/category/add',
            component: categoryAdd
        }, {
            name: 'product_category_update',
            path: '/product/category/update',
            component: categoryUpate
        }

    ]
})

export default route;
