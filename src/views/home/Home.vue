<template>
  <div id="home">
    <!-- 头部导航栏 -->
    <nav-bar class="home-nav" >
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐栏 -->
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'

// home请求数据的封装
import {getHomeMultidata} from 'network/home'


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  data() {
    return {
      // 存储请求的数据，指向存储数据的堆空间
      banners: [],
      recommends: []
    }
  },
  created(){
    // 请求多个数据，异步操作
    getHomeMultidata().then(res=> {
      console.log(res);
      // res在函数作用域里，函数调用结束就会被清除，因此用result存储
      // 箭头函数this向上找一层，因此此处的this是created里的，而created里的this指向此模板
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>