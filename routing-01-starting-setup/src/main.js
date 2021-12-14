import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(), // use the browser's in-built history mechanism
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      //   beforeEnter(to, from, next) {
      //     console.log('beforeEnter');
      //     console.log('to: ', to);
      //     console.log('from: ', from);
      //     next();
      //   },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',

  scrollBehavior(to, from, savedPosition) {
    // console.log('to: ', to, 'from: ', from, 'saved: ', savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top };
  },
});

router.beforeEach((to, from, next) => {
  //   console.log('Global beforeEach');
  //   console.log('to: ', to, 'from: ', from);
  // next();
  // next(false); // cancels the navigation
  //   if (to.name === 'team-members') {
  next();
  //   } else {
  // You can also pass a string of an existing route we want to go to
  // next({ name: 'team-members', params: { teamId: 't2' } });
  //   }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
