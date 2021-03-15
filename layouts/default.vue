<template>
    <div class="flex flex-col w-full">
        <navbar/>
        <main class="flex-1">
            <Nuxt/>
        </main>
        <app-footer/>
    </div>
</template>

<script>
    import Navbar from '../components/Header/Navbar';
    import AppFooter from '../components/Footer/AppFooter';

    export default {
        components: {
            Navbar,
            AppFooter
        }
    }
</script>