<template>
    <div class="slide absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 transition-opacity duration-500 ease-in-out"
         :class="{'opacity-100': isCurrent}"
         :style="slideStyles">
        <div class="flex flex-col items-center absolute left-0 bottom-0 w-full pb-8">
            <h3>{{content.title}}</h3>
            <p>{{content.desc}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Slide',
        props: {
            img: {
                type: String,
                required: true
            },
            content: {
                type: Object,
                default: () => ({})
            },
            isCurrent: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            slideStyles() {
                return {backgroundImage: `url(${this.img})`}
            }
        }
    }
</script>