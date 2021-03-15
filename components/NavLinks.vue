<template>
    <nav :class="navClasses">
        <ul :class="listClasses">
            <li v-for="link in links" :key="link.to.name" :class="listItemClasses">
                <nuxt-link :to="link.to" :class="linkClasses" @click.native="$emit('link-clicked')">
                    {{link.label}}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavLinks',
        props: {
            links: {
                type: Array,
                default: []
            },
            navClasses: {
                type: String,
                default: ''
            },
            listClasses: {
                String,
                default: ''
            },
            listItemClasses: {
                String,
                default: ''
            },
            linkClasses: {
                type: String,
                default: ''
            }
        }
    }
</script>