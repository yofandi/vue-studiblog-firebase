<template>
	<div v-if="error">
		{{ error }}
	</div>
	<div v-if="post">
		<h3> {{ post.title }} </h3>
		<p> {{ post.body }} </p>
		<span v-for="tagitem in post.tag" :key="tagitem"> #{{ tagitem }} </span>
	</div>
	<div v-else>
		<Loading />
	</div>
</template>

<script>
	import GetPost from '@/composable/GetPost.js'
	import Loading from '@/components/Loading.vue'

	export default {
		props: ['id'],
		components: {
			Loading
		},
		setup(props) {
			const {post, error, load} = GetPost(props.id)

			load()

			return {post, error}
		}
	}
</script>