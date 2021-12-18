import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

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
      meta: { needsAuth: true },
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
  if (to.meta.needsAuth) {
    console.log('Needs auth');
    next();
  } else {
    next();
  }
  //   } else {
  // You can also pass a string of an existing route we want to go to
  // next({ name: 'team-members', params: { teamId: 't2' } });
  //   }
});

router.afterEach((to, from) => {
  // Useful for sending analytics data
  // Cannot use this cycle to control navigation or change what the user sees on the screen
  console.log('to: ', to, 'from: ', from);
});

export default router;
