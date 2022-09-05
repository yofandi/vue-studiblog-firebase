<template>
	<div class="post-list">
		<div v-for="post in posts" :key="post.id">
			<!-- <h3>{{ post.title }}</h3> -->
			<PostSingle :post="post"></PostSingle>
		</div>
	</div>
</template>

<script>
import PostSingle from './PostSingle.vue'
import {onMounted,onUnmounted,onUpdated} from 'vue'

export default {
	props: ["posts"],
	components: {
		PostSingle
	},
	setup(props) {
		// berjalan ketika props dilakukan pertama kali (lifecycle hook)
		onMounted(() => console.log('component mounted'))
		// untuk menghentikan mounted (lifecycle hook)
		onUnmounted(() => console.log('component onUnmounted'))
		// terjadi ketika ada penambahan dan pengubahan dan menghapus dalam komponen post (lifecycle hook)
		onUpdated(() => console.log('component onUpdated'))
	}
}
</script>
