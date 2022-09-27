import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewTry from '../components/NewTry.vue'
import PostProp from '../components/Propincomposite.vue'
import FuncUsable from '../views/funcUsable.vue'
import ShowPost from '../views/posts/Show.vue'
import CreatePost from '../views/posts/Create.vue'
import Blogview from '../views/Blog.vue'
import BlogviewPost from '../views/posts/BlogShow.vue'
import BlogCreatePost from '../views/posts/BlogCreate.vue'
import BlogTags from '../views/posts/BlogTags.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/try',
    name: 'newtry',
    component: NewTry
  },
  {
    path: '/post',
    name: 'postProp',
    component: PostProp
  },
  {
    path: '/funcUsable',
    name: 'funcUsable',
    component: FuncUsable
  },
  {
    path: '/post/:id',
    name: 'ShowPost',
    component: ShowPost,
    props: true
  },
  {
    path: '/postcreate',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/blogview',
    name: 'BlogView',
    component: Blogview
  },
  {
    path: '/blogviewpost/:id',
    name: 'BlogViewPost',
    component: BlogviewPost,
    props: true
  },
  {
    path: '/blogcreate',
    name: 'BlogCreatePost',
    component: BlogCreatePost
  },
  {
    path: '/tags/:tagcall',
    name: 'BlogTags',
    component: BlogTags,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
