import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Me from '@/components/Me'
import ReleaseArticle from '@/components/ReleaseArticle'
import ReleaseMood from '@/components/ReleaseMood'
import ContentInfo from '@/components/ContentInfo'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/Me',
            name: 'Me',
            component: Me
        },
        {
            path: '/ReleaseArticle',
            name: 'ReleaseArticle',
            component: ReleaseArticle
        },
        {
            path: '/ReleaseMood',
            name: "ReleaseMood",
            component: ReleaseMood,
        },
        {
            path: '/ContentInfo',
            name: 'ContentInfo',
            component: ContentInfo,
        }
    ]
})