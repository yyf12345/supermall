import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
  import ('../views/home/Home')
const Category = () =>
  import ('../views/category/Category')
const Cart = () =>
  import ('../views/cart/Cart')
const Profile = () =>
  import ('../views/profile/Profile')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/profile',
      component: Profile,
    }
  ],
  mode: 'history'
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router