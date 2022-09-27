<template>
	<div class="home">
		<!-- menggunakan props di composition api -->
		<h1>Home</h1>
		<PostList v-if="showPosts" :posts="posts"></PostList>
		<div v-if="error">
			{{ error }}
		</div>
		<button @click="showPosts = !showPosts">Unmounted</button>
		<button @click="posts.pop()">Delete</button>
	</div>
</template>

<script>
import {ref} from 'vue'
import PostList from './PostList.vue'

export default {
	name: 'Propincomposite',
	components: {
		PostList
	},
	setup() {
		// const posts = ref([
		// 		{ id: 1, title: 'januari', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.done(Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
		// 		{  id: 2, title: 'febuari', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
		// ])
		const posts = ref([])
		const error = ref(null)

		// untuk mencegah proses selanjutnya berjalan sebelum proses yang sebelumnya selesai
		const load = async () => {
			try {
				// mengambil data dari json
				let data = await fetch('http://localhost:3000/posts')
				// await adalah Operator menunggu digunakan untuk menunggu Promise. Itu hanya dapat digunakan di dalam fungsi async dalam kode JavaScript biasa; namun dapat digunakan sendiri dengan modul JavaScript.
				if (! data.ok ) {
					throw Error('data empty')
				}

				posts.value = await data.json()
			} catch(err) {
				error.value = err.message
			}
		}

		load()

		const showPosts = ref(true)

		return { posts, showPosts, error }
	}
}
</script>
