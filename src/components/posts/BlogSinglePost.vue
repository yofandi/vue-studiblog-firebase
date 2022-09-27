<template>
	<router-link :to="{ name: 'BlogViewPost', params: { id: post.id } }">
		<h2 class="post-title">
			{{ post.title }}
		</h2>
		<h3 class="post-subtitle">
			{{ snippet }}
		</h3>
	</router-link>
	<span class="post-meta" v-for="tagitem in post.tag" :key="tagitem">
		<router-link :to="{ name: 'BlogTags', params: { tagcall: tagitem } }">
			#{{ tagitem }}
		</router-link>
	</span>
	Posted by
	<a href="#!">Start Bootstrap</a>
	on September 24, 2022
</template>

<script>
import { computed } from "vue"
export default {
	name: "BlogSinglePost",
	props: ["post"],
	setup(props) {
		const snippet = computed(() => {
			return props.post.body.substring(0, 50) + "..."
		});

		return { snippet }
	},
};
</script>
