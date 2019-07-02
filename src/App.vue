<template>
	<div>
		<h1 class="mb-4">Recommend a film!</h1>
		
		<button
			type="button"
			class="btn btn-dark"
			@click="getFilm"
		>Get Film</button>

		<div v-show="getLoading" class="mt-3">
			<i class="fas fa-spinner fa-spin"></i>
		</div>

		<div v-show="getError" class="alert alert-danger mt-3" role="alert">
			{{ getError }}
		</div>
		
		<div v-if="film" class="container">
			<div class="row">
				<div class="col-md-6">
					<img
						v-if="film.poster_path != null"
						:src="'http://image.tmdb.org/t/p/w185/'+film.poster_path"
						:alt="film.title"
						class="my-3"
					>
					<span
						v-else
						class="no-image"
					>Image not available</span>
				</div>
				<div class="col-md-6">
					<div>
						<h2 class="mb-3">{{ film.title }}</h2>
						
						<p>
							{{ film.overview }}
						</p>
					</div>
				</div>
			</div>
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
			'getFilms',
			'getLoading',
			'getError'
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
	@mixin flex() {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	div.row,
	div.col-md-6 {
		@include flex();
	}

	div.container {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}

	span.no-image {
		width: 185px;
		height: 280px;
		background: #a9a9a9;
		@include flex();
	}
</style>
