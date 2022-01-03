import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },

    mutations: {
        increment(state) {
            state.counter = state.counter + 1
        },

        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
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
        }
    }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
