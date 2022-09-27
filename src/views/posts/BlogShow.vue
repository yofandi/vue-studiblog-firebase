<template>
	<div v-if="error">
		{{ error }}
	</div>
	<div v-if="post">
		
		<!-- Page Header-->
		<header class="masthead img-ser">
			<div class="container position-relative px-4 px-lg-5">
				<div class="row gx-4 gx-lg-5 justify-content-center">
					<div class="col-md-10 col-lg-8 col-xl-7">
						<div class="post-heading">
							<h1> {{ post.title }} </h1>
							<span class="meta" v-for="tagitem in post.tag" :key="tagitem"> #{{ tagitem }} </span>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Post Content-->
		<article class="mb-4">
			<div class="container px-4 px-lg-5">
				<div class="row gx-4 gx-lg-5 justify-content-center">
					<div class="col-md-10 col-lg-8 col-xl-7">
						<p>
							{{ post.body }}
						</p>
					</div>
				</div>
			</div>
		</article>

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

<style scoped>
	.img-ser {  
		background-image: url('@/assets/img/home-bg.jpg');
	}
</style>
