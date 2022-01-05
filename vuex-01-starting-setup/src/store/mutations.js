export default {
    logUserIn(state) {
        state.isLoggedIn = true
    },

    logUserOut(state) {
        state.isLoggedIn = false
    }
}