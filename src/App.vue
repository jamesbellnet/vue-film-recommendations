<template>
	<div>Welcome</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'app',
	
	data() {
		return {
			films: []
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
		])
	}
}
</script>

<style lang="scss">

</style>
