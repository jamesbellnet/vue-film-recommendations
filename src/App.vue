<template>
	<div>
		<h1>vue-film-recommendations</h1>
		
		<button @click="getFilm">Get Film</button>
		
		<div v-if="film">
			<img v-if="film.poster_path != null" :src="'http://image.tmdb.org/t/p/w185/'+film.poster_path" :alt="film.title">

			<h2>{{ film.title }}</h2>
			
			<p>
				{{ film.overview }}
			</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'app',
	
	data() {
		return {
			film: null
		}
	},

	computed: {
		...mapGetters([
			'getLoading',
			'getFilms'
		])
	},

	created() {
		this.setFilms()
	},

	methods: {
		...mapActions([
			'setFilms'
		]),

		getFilm() {
			if(this.getFilms.length > 0) {
				this.film = this.getFilms.pop()
			} else {
				this.setFilms()
			}
		}
	}
}
</script>

<style lang="scss">
html, body {
	text-align: center;
	padding: 20px;
}

button {
	margin-bottom: 20px;
}
</style>
