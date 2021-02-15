import Vue from 'vue'
import VueRouter from 'vue-router'
import ImageList from '../components/ImageList'
import SelectedImage from '../components/SelectedImage'
import PageNotFound from '../components/PageNotFound'
import RandomImage from '../components/RandomImage'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:"ImageList",
    component: ImageList,
   
  },
  {
   path:'/select/:id',
   name:"SelectedImage",
   
   props:true,
   component:SelectedImage
 },
  
  {
   path:'/random',
   name:"RandomImage",
   component:RandomImage
  },
  {
    path:'/:catchAll(.*)',
    name:"NotFound",
    component:PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
