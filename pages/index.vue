<template>
    <div class="form-container">
        <h1>Login Form</h1>
        <form @submit.prevent>
            <input class="border border-grey-500 rounded" type="email" v-model="email" placeholder="Enter email"/>
            <input class="border border-grey-500 rounded" type="password" v-model="password"
                   placeholder="Enter password"/>
            <button @click="handleLogin">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            handleLogin() {
                // TODO: Add validations
                const {email, password} = this;
                this.$store.dispatch('user/login', {email, password})
                    .then(() => this.$router.push('/admin'))
                    .catch(e => console.log(e));
            }
        }
    }
</script>