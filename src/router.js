import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SignUp from './views/SignUp.vue'
import PlayList from './views/PlayList.vue'


const routes = [
    {
        path: '/',
        component: HomePage
    },
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})

export default router