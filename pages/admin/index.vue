<template>
    <div>
        <h1>Admin home</h1>
        <button @click="handleLogout">Logout</button>
    </div>
</template>

<script>
    export default {
        name: 'index',
        middleware: 'auth',
        methods: {
            handleLogout() {
                this.$store.dispatch('user/logout').then(() => this.$router.push('/'))
            }
        }
    }
</script>