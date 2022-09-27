<template>
	<div class="home">
		<h1>Function Usable: Logic Component</h1>
		<div v-if="error">
			{{ error }}
		</div>
		<div v-if="posts.length">
			<PostList :posts="posts"></PostList>
		</div>
		<div v-else>
			<Loading />
		</div>
	</div>
</template>

<script>
import PostList from '../components/PostList.vue'
import GetPosts from '../composable/GetPosts.js'
import Loading from '@/components/Loading.vue'

export default {
	name: 'Propincomposite',
	components: {
		PostList,
		Loading
	},
	setup() {
		const { posts, error, load } = GetPosts()

		load()

		return { posts, error }
	}
}
</script>
