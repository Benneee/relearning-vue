import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        }
    },

    mutations: {
        increment(state) {
            state.counter = state.counter + 1
        },

        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },

        logUserIn(state) {
            state.isLoggedIn = true
        },

        logUserOut(state) {
            state.isLoggedIn = false
        }
    },

    getters: {
        finalCounter(state) {
            return state.counter * 2
        },

        // When a getter is dependent on the value of another getter
        // Since the state variable isn't necessarily needed, we can replace with "_"
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        },

        isLoggedInState(state) {
            return state.isLoggedIn
        }
    },

    actions: {
        increment(context) {
            // context has a lot of properties in it, one of which is "commit"
            // Since actions can run asynchronous code, we will try it here
            setTimeout(() => {
                context.commit('increment')
            }, 2000)
        },

        increase(context, payload) {
            context.commit('increase', payload)
        },

        logUserIn(context) {
            context.commit('logUserIn')
        },

        logUserOut(context) {
            context.commit('logUserOut')
        }
    }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
