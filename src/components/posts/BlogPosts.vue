<template>
	<div v-for="post in posts" :key="post.id">	
	<!-- Post preview-->
		<div class="post-preview">
			<!-- <h3>{{ post.title }}</h3> -->
			<BlogSinglePost :post="post"></BlogSinglePost>
		</div>
		<!-- Divider-->
		<hr class="my-4" />
	</div>
</template>

<script>
import BlogSinglePost from "./BlogSinglePost.vue";
import { onMounted, onUnmounted, onUpdated } from "vue";

export default {
	props: ["posts"],
	components: {
		BlogSinglePost,
	},
	setup(props) {
		// berjalan ketika props dilakukan pertama kali (lifecycle hook)
		onMounted(() => console.log("component mounted"));
		// untuk menghentikan mounted (lifecycle hook)
		onUnmounted(() => console.log("component onUnmounted"));
		// terjadi ketika ada penambahan dan pengubahan dan menghapus dalam komponen post (lifecycle hook)
		onUpdated(() => console.log("component onUpdated"));
	},
};
</script>
