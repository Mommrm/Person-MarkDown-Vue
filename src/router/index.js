import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Community from '../views/Community'
import Search from '../views/Search'
import MineSpace from '../views/MineSpace'
import Other from '../views/Other'
import LandPage from '../views/LandPage'
import Register from '../views/Register'
import ArticleContent from '../views/ArticleContent'
import EditorPage from '../views/EditorPage'


Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/community', component: Community },
        { path: '/search', component: Search },
        { path: '/other', component: Other },
        { path: '/minespace', component: MineSpace },
        { path: '/landpage', component: LandPage },
        { path: '/register', component: Register },
        { path: '/articles/:articleid', component: ArticleContent },
        { path: '/editorpage', component: EditorPage },
    ]
})

export default router;