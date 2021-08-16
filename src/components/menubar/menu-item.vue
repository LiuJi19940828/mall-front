<template>
  <div>
    <el-menu-item :key="home_menu.name" :index="home_menu.path">
      <i :class="home_menu.icon"></i>
      <span slot="title">{{ home_menu.name }}</span>
    </el-menu-item>
    <template v-for="menu in menus">
      <el-submenu :key="menu.name" :index=menu.path>
        <template slot="title">
          <i :class=menu.icon></i>
          <span>{{ menu.name }}</span>
        </template>
        <template v-for="child in menu.children">
          <el-menu-item :key="child.name" :index="child.path">
            <i :class=child.icon></i>
            <span slot="title">{{ child.name }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "menu-item",
  data() {
    return {
      menus,
      home_menu
    }
  }
}
const home_menu =
    {
      name: '首页',
      icon: '',
      children: [],
      path: '/home'
    }

const menus = [
  {
    name: '商品',
    icon: '',
    path: '/product',
    children: [{name: '商品列表', icon: '', path: '/product/list'}, {
      name: '添加商品',
      icon: '',
      path: '/product/add'
    }, {name: '商品分类', icon: '', path: '/product/category'}, {
      name: '商品类型',
      icon: '',
      path: '/product/type'
    }, {name: '品牌管理', icon: '', path: '/product/brand'}]
  },
  {
    name: '订单',
    icon: '',
    path: '/order',
    children: [{name: '订单列表', icon: '', path: '/order/list'}, {
      name: '订单设置',
      icon: '',
      path: '/order/settings'
    }, {name: '退货申请处理', icon: '', path: '/order/apply'}, {
      name: '退货原因设置',
      icon: '',
      path: '/order/reason'
    }]
  },
  {
    name: '营销',
    icon: '',
    path: '/sales',
    children: [{name: '秒杀活动列表', icon: '', path: '/sales/flash'}, {
      name: '优惠券列表',
      icon: '',
      path: '/sales/coupon'
    }, {
      name: '品牌推荐',
      icon: '',
      path: '/sales/brand'
    }, {
      name: '新品推荐',
      icon: '',
      path: '/sales/new'
    }, {name: '人气推荐', icon: '', path: '/sales/hot'},
      {name: '专题推荐', icon: '', path: '/sales/subject'},
      {name: '广告列表', icon: "", path: '/sales/advertise'}]
  },
  {
    name: '权限',
    icon: '',
    path: '/auth',
    children: [
      {name: '用户列表', icon: '', path: '/auth/user'},
      {name: '菜单列表', icon: '', path: '/auth/menu'},
      {name: '角色列表', icon: '', path: '/auth/role'},
      {name: '资源列表', icon: '', path: '/auth/res'}]
  }
]

</script>

<style scoped>

</style>