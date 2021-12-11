import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Password from '../views/Password.vue'
import Profile from '../views/Profile.vue'
import Dashboard from '../views/Dashboard.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import Image from '../views/Imageuploader.vue'
import Otp from '../views/Otp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/image',
    name: 'Image',
    component: Image,
  },
  {
    path: '/password',
    name: 'Password',
    component: Password,
  },
  // {
  //   path: '/dashboard',
  //   name: 'Dasboard',
  //   component: Dashboard,
  // },
  {
    path: '/login',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/getprofile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/updateuser',
    name: 'UpdateProfile',
    component: UpdateProfile,
  },
  {
    path: '/otp',
    name: 'Otp',
    component: Otp,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
