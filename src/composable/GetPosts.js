import { ref } from "vue"

const posts = ref([])
const error = ref(null)

const GetPosts = () => {
	// untuk mencegah proses selanjutnya berjalan sebelum proses yang sebelumnya selesai
	const load = async () => {
		try {
			await new Promise(resolve => {
				setTimeout(resolve, 2000)
			})
			// mengambil data dari json
			let data = await fetch("http://localhost:3000/posts")
			// await adalah Operator menunggu digunakan untuk menunggu Promise. Itu hanya dapat digunakan di dalam fungsi async dalam kode JavaScript biasa; namun dapat digunakan sendiri dengan modul JavaScript.
			if (!data.ok) {
				throw Error("data empty")
			}

			posts.value = await data.json()
		} catch (err) {
			error.value = err.message
		}
	};

	return { posts, error, load }
};

export default GetPosts;
