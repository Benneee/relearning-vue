import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import AllUsers from './pages/AllUsers.vue'
import CourseGoals from './pages/CourseGoals.vue'


import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: AllUsers
        },
        {
            path: '/goals',
            component: CourseGoals
        }
    ]
})

const app = createApp(App)

app.use(router)

// The app is mounted only when the router is aware of the page that should be loaded
// This helps to ensure animation isn't played on initial page load during route transitions
router.isReady()
    .then(() => {
        app.mount('#app');
    })

