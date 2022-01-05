export default {
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
}