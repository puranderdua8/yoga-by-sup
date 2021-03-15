<template>
    <div class="slider relative overflow-hidden h-screen">
        <div class="absolute top-0 left-0 flex justify-between items-center w-full h-full z-20">
            <button class="px-2" @click="current-=1" :disabled="current===0"><<</button>
            <button class="px-2" @click="current+=1" :disabled="current===slides.length-1">>></button>
        </div>
        <slide v-for="(slide, index) in slides" :key="index" v-bind="getSlideProps(slide, index)"/>
    </div>
</template>

<script>
    import Slide from './Slide';

    export default {
        name: 'Slider',
        data() {
            return {
                current: 0
            }
        },
        components: {
            Slide
        },
        props: {
            slides: {
                type: Array,
                default: () => ([])
            }
        },
        methods: {
            getSlideProps(slide, index) {
                return {
                    ...slide,
                    isCurrent: this.current === index
                }
            }
        }
    }
</script>