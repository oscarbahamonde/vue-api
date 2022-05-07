<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '../components/HelloWorld.vue'
import { ref } from 'vue'
import { onBeforeMount} from 'vue'

const msg = ref(null)
onBeforeMount(async () => {
  msg.value = await fetch('/api/hello').then(res => res.json())
})



</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
  <a href="https://obm.auth.us-east-1.amazoncognito.com/login?client_id=7rts72q3ki6tjki5uk0jm3ujd7&response_type=code&scope=email+openid&redirect_uri=https://smartpro.solutions/auth/token"><button>Login</button></a>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
