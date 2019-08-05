import Vue from 'vue'
import Router from 'vue-router'

import news from './newsRouter'
import picture from './pictureRouter'
import topic from './topicRouter'
import mine from './mineRouter'

Vue.use(Router);

const routes = [
    news,
    picture,
    topic,
    mine,
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/404',
        component: ()=>import('../pages/common/NotFind/NotFind')
    },
];

export default new Router({
    mode: 'history',
    routes
})
