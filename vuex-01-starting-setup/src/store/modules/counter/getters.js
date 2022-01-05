export default {
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
}