import axios from 'axios'

export default {
    setFilms({ commit }) {
		commit('loading', true)

        axios
			.get(`${process.env.API_URL}discover/movie`, {
				params: {
					api_key: process.env.API_KEY,
					language: 'en-gb',
					sort_by: 'popularity.asc',
					include_video: false,
					with_original_language: 'en',
					page: Math.floor((Math.random() * 1000) + 1)
				}
			})
            .then((response) => {
				if(response.status === 200) {
					commit('films', response.data.results)
				}
            })
			.catch(error => {
				console.log(error)

				let status = error.response.status
				let statusText = error.response.statusText
				let errorMessage = 'Error: ' + status + ': ' + statusText
				
				commit('error', errorMessage)
			})
			.finally(() => commit('loading', false))
    }
}
