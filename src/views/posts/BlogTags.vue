<template>
	<!-- Page Header-->
	<header class="masthead" id="masthead">
		<div class="container position-relative px-4 px-lg-5">
			<div class="row gx-4 gx-lg-5 justify-content-center">
				<div class="col-md-10 col-lg-8 col-xl-7">
					<div class="site-heading">
						<h1>Clean Blog</h1>
						<span class="subheading">Post By Tag</span>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- Main Content-->
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<div v-if="error">
					{{ error }}
				</div>
				<div v-if="posts.length">
					<PostList :posts="postWithTag"></PostList>
				</div>
				<div v-else>
					<Loading />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PostList from "@/components/posts/BlogPosts.vue"
import GetPosts from "@/composable/GetPosts.js"
import Loading from "@/components/Loading.vue"
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
	name: "BlogTags",
	components: {
		PostList,
		Loading,
	},
	setup() {
		const route = useRoute()
		const { posts, error, load } = GetPosts()

		load();

		const postWithTag = computed(() => {
			return posts.value.filter((p) => p.tag.includes(route.params.tagcall))
		})

		console.log(route)

		return { posts, error, postWithTag }
	},
};
</script>

<style>
	#masthead {
		background-image: url('@/assets/img/home-bg.jpg');
	}
</style>