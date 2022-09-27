<template>
	<!-- Page Header-->
	<header
		class="masthead"
		id="cacs"
	>
		<div class="container position-relative px-4 px-lg-5">
			<div class="row gx-4 gx-lg-5 justify-content-center">
				<div class="col-md-10 col-lg-8 col-xl-7">
					<div class="page-heading">
						<h1>Create New Post</h1>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- Main Content-->
	<main class="mb-4">
		<div class="container px-4 px-lg-5">
			<div class="row gx-4 gx-lg-5 justify-content-center">
				<div class="col-md-10 col-lg-8 col-xl-7">
					<div class="my-5">
						<form id="contactForm" @submit.prevent="handleSubmit">
							<div class="form-floating">
								<input
									class="form-control"
									id="name"
									type="text"
									v-model="title"
									placeholder="title your Post..."
									data-sb-validations="required"
								/>
								<label for="name">Title</label>
								<div class="invalid-feedback" data-sb-feedback="name:required">
									A Title is required.
								</div>
							</div>
							<div class="form-floating">
								<textarea
									type="text"
									v-model="body"
									class="form-control"
									id="body"
									placeholder="Enter your body here..."
									style="height: 12rem"
								></textarea>
								<label for="body">Body</label>
								<div class="invalid-feedback" data-sb-feedback="body:required">
									A Body is required.
								</div>
							</div>
							<div class="form-floating">
								<input
									class="form-control"
									id="tag"
									type="text"
									v-model="tag"
									@keydown.enter.prevent="handleKeydown"
									placeholder="tag your Post..."
									data-sb-validations="required"
								/>
								<label for="tag">Tag</label>
								<div class="invalid-feedback" data-sb-feedback="tag:required">
									A tag is required.
								</div>
							</div>
							<br />
							<!-- Submit success message-->
							<!---->
							<!-- This is what your users will see when the form-->
							<!-- has successfully submitted-->
							<div class="d-none" id="submitSuccessMessage">
								<div class="text-center mb-3">
									<div class="fw-bolder">Form submission successful!</div>
									To activate this form, sign up at
									<br />
									<a href="https://startbootstrap.com/solution/contact-forms"
										>https://startbootstrap.com/solution/contact-forms</a
									>
								</div>
							</div>
							<!-- Submit error message-->
							<!---->
							<!-- This is what your users will see when there is-->
							<!-- an error submitting the form-->
							<div class="d-none" id="submitErrorMessage">
								<div class="text-center text-danger mb-3">
									Error sending message!
								</div>
							</div>
							<!-- Submit Button-->
							<button
								class="btn btn-primary text-uppercase"
								type="submit"
							>
								Create
							</button>
						</form>

						<div v-for="tag in tags" :key="tag">#{{ tag }}</div>
						{{ title }}
						{{ body }}
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { ref } from "@vue/reactivity"
import { useRouter } from "vue-router"

export default {
	setup() {
		const router = useRouter()
		const title = ref("")
		const body = ref("")
		const tag = ref("")
		const tags = ref([])

		const handleKeydown = () => {
			// pertama tag akan diseleksi, jika value sudah ada tidak akan ditambahkan dan sebaliknya
			if (!tags.value.includes(tag.value)) {
				// replace() berfungsi untuk menggantikan spasi karakter dengan karakter yang ditentukan
				tag.value = tag.value.replace(/\s/g, "")

				tags.value.push(tag.value)
			}

			tag.value = ""
		};

		// async: menunggu sampai selesai program yang berjalan
		const handleSubmit = async () => {
			const post = {
				title: title.value,
				body: body.value,
				tag: tags.value,
			};

			await fetch("http://localhost:3000/posts/", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify(post),
			});

			router.push({
				name: "BlogView",
			});
		};

		return {
			title,
			body,
			tag,
			tags,
			handleKeydown,
			handleSubmit,
		};
	},
};
</script>

<style>
	#cacs {
		background-image: url('@/assets/img/contact-bg.jpg')
	}
</style>