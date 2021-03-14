<template>
    <img :class="classes"
         src="/logo.svg"
         alt="Logo">
</template>

<script>
    export default {
        name: 'Logo',
        props: {
            classes: {
                type: String,
                default: ''
            }
        }
    }
</script>