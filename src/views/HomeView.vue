<template>
  <div class="home">
    <h1>Ref</h1>
    <!-- <p ref="p">Hai, saya {{ name }} dan ini nomor saya {{ number }} </p> -->
    <p ref="p">Hai, saya {{ contactOne.name }} dan ini nomor saya {{ contactOne.number }} </p>
    <button @click="handleCLick">Click!</button> 
    <button @click="number++">Increment</button>
    <input type="text" v-model="name">

    <h2>Reactive</h2>
    <p ref="p">Hai, saya {{ contactTwo.name }} dan ini nomor saya {{ contactTwo.number }} </p>
    <button @click="handleCLickTwo">Click!</button> 

    <br>

    <button class="btn btn-primary">Button</button>
    <p class="para">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    // func setup akan dijalankan pertama kali
    
    // data reaktif di composition API
    // const p = ref(null) 

    // const name = ref("Hamin")
    // const number = ref("085287299213")

    const contactOne = ref({ name: "Luluk", number:"0874927492345" })
    const contactTwo = reactive({ name: "Janice", number:"902380948398" })

    const handleCLick = () => {
      // console.log(p, p.value)
      // p.value.classList.add('paragraf')
      // p.value.textContent = "Yofand"

      // name.value = 'michele'
      // number.value = '09232'

      contactOne.value.name = 'Luna'
      contactOne.value.number = '082343488581739475'
    }

    const handleCLickTwo = () => {
      contactTwo.name = 'Nisa'
      contactTwo.number = '98378428892'
    }

    return {
      contactOne, contactTwo, handleCLick, handleCLickTwo
      // name, number, handleCLick
    }

    // beda data disini dengan data() adalah pada dengan variable cons datanya tidak reaktif sedangkan data() ia reaktif
  },
  // created() {
  //   console.log('created')
  // },
  mounted() {
    console.log($('.para').text())
  }
}
</script>
