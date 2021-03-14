<template>
    <footer class="bg-white border-t">
        <div class="md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 p-4 space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <div>
                <h3>Yoga by Sup</h3>
                <p>A short description about the website which is around 2-3 lines. </p>
            </div>
            <div>
                <div v-for="route in routes">
                    {{route.label}}
                </div>
            </div>
            <div>
                <div class="contact-info">
                    <p>Ph No: +91 12345 67890</p>
                    <p>Email: example@xyz.com</p>
                </div>
                <div class="flex space-x-4 social-links">
                    <img class="w-4" v-for="icon in socialIcons" :src="`/icons/${icon}.svg`" :alt="`${icon}-icon`">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import routesMixin from '../mixins/routes';
    import {SOCIAL_ICONS} from '../../utils/constants';

    export default {
        name: 'AppFooter',
        mixins: [routesMixin],
        computed: {
            socialIcons() {
                return SOCIAL_ICONS;
            }
        }
    }
</script>