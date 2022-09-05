<template>
	<div class="home">
		<h1>Function Usable: Logic Component</h1>
		<PostList :posts="posts"></PostList>
		<div v-if="error">
			{{ error }}
		</div>
	</div>
</template>

<script>
import PostList from '../components/PostList.vue'
import GetPosts from '../composable/GetPosts.js'

export default {
	name: 'Propincomposite',
	components: {
		PostList
	},
	setup() {
		const { posts, error, load } = GetPosts()

		load()

		return { posts, error }
	}
}
</script>
