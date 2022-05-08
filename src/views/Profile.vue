<template>
<div v-if="user">
<p>{{user}}</p>
<button 
@click="logout"
>Logout</button>
</div>
<div v-else>
<p>{{this.$route.path}}</p>
<button
@click="login"
>Login</button>
</div>
</template>
<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = ref(route.query.id)
const user = ref(null)
if(id!==null | id!==undefined){
onBeforeMount(
    async() => {
        user.value = await fetch('/api/auth/token?code='+id.value, {
            method: 'POST'
        }).then(res => res.json())
        localStorage.setItem('user', JSON.stringify(user.value))
    })}
onMounted(() => {
    user.value = JSON.parse(localStorage.getItem('user'))
})
const logout = () => {
    localStorage.removeItem('user')
    user.value = null
    window.location.href = '/'
}
const login = () => {
    window.location.href = 'https://obm.auth.us-east-1.amazoncognito.com/login?client_id=7rts72q3ki6tjki5uk0jm3ujd7&response_type=code&scope=email+openid&redirect_uri=https://smartpro.solutions/auth/token'
}
</script>