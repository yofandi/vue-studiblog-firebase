<template>
	<div class="home">
		<h1>New Try</h1>
		<input type="text" v-model="search">
		<h2>{{ name }}</h2>
		<div v-for="(name, index) in result" :key="index">
			{{ name }}
		</div>
		<button @click="handleCLick">stop</button>
	</div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
	name: "Newtrypage",
	setup() {
		// const name = computed(() => {
		// 	return "lali"
		// });
		// ref dipakai untuk data reaktif artinya dapat diubah secara dinamis
		// computed dipakai untuk menyimpan data dalam cache. biasa dipakai untuk fitur search
		const search = ref('')
		const names = ref(['maei','sigma','teledot','fajbj','djnaj','fdnjanfna','dkfj'])

		// memantau setiap perubahan yang terjadi di search
		const stop = watch(search, () => {
			console.log('fungsi watch berjalan')
		})

		// akan berjalan otomatis pada saat component otomatis berjalan atau pertama kali dijalankan
		const stopEffect = watchEffect(() => {
			console.log('watch effect berjalan', search.value)
		})

		const result = computed(() => {
			return names.value.filter( (name) => name.includes(search.value) );
		})

		const handleCLick = () => {
			stop()
			stopEffect()
		}

		return { names, search, result, handleCLick }
	},
};
</script>
