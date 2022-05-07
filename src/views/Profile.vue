<template>
<p>{{user.username}}</p>
<p>{{user.email}}</p>
</template>
<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const id = (ref(route.query.id)) ? ref(ref(route.query.id)) : ref(localStorage.getItem('user["id"]'))
const user = ref(null)
onBeforeMount(
    async() => {
        user.value = await fetch('/api/auth/token?code='+id.value, {
            method: 'POST'
        }).then(res => res.json())
        localStorage.setItem('user', JSON.stringify(user.value))
    })
onMounted(
    user.value = JSON.parse(localStorage.getItem('user'))
)
</script>