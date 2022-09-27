import { ref } from 'vue'

const GetPost = (id) => {

const post = ref(null)
const error = ref(null)
	// untuk mencegah proses selanjutnya berjalan sebelum proses yang sebelumnya selesai
	const load = async () => {
		try {
			// mengatur durasi waktu sebelum menampilkan data
			await new Promise(resolve => {
				setTimeout(resolve, 2000)
			})

			// mengambil data dari json
			let data = await fetch('http://localhost:3000/posts/' + id)
			// await adalah Operator menunggu digunakan untuk menunggu Promise. Itu hanya dapat digunakan di dalam fungsi async dalam kode JavaScript biasa; namun dapat digunakan sendiri dengan modul JavaScript.
			if (!data.ok) {
				throw Error("data empty")
			}

			post.value = await data.json()
		} catch (err) {
			error.value = err.message
		}
	};

	return { post, error, load }
};

export default GetPost
