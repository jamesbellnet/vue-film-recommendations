export default {
    films(state, films) {
        state.films = films
    },
    
    loading(state, loading) {
        state.loading = loading
    },

    error(state, error) {
        state.error = error
    }
}
