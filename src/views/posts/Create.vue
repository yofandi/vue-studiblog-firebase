<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<div>
				<label for="">Title</label>
				<input type="text" v-model="title" />
			</div>
			<div>
				<label for="">Body</label>
				<textarea type="text" col="30" v-model="body"></textarea>
			</div>
			<div>
				<label for="">Tag</label>
				<input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />
			</div>
			<button type="submit">Create</button>
		</form>
		<div v-for="tag in tags" :key="tag">
			#{{ tag }}
		</div>
		{{ title }}
		{{ body }}
	</div>
</template>

<script>
import { ref } from "@vue/reactivity"
import { useRouter } from 'vue-router'

export default {
	setup() {
		const router = useRouter()
		const title = ref('')
		const body = ref('')
		const tag = ref('')
		const tags = ref([])

		const handleKeydown = () => {
			// pertama tag akan diseleksi, jika value sudah ada tidak akan ditambahkan dan sebaliknya
			if (!tags.value.includes(tag.value)) {
				// replace() berfungsi untuk menggantikan spasi karakter dengan karakter yang ditentukan
				tag.value = tag.value.replace(/\s/g, '')

				tags.value.push(tag.value)
			}
			
			tag.value = ''
		}

		// async: menunggu sampai selesai program yang berjalan
		const handleSubmit = async () => {
			const post = {
				title: title.value, 
				body: body.value,
				tag: tags.value
			}

			await fetch('http://localhost:3000/posts/', {
				method: 'POST',
				headers: { 'content-Type': 'application/json' },
				body: JSON.stringify(post)
			})

			router.push({
				name: 'funcUsable'
			})
		}

		return {
			title,
			body,
			tag,
			tags,
			handleKeydown,
			handleSubmit
		}
	},
}
</script>
