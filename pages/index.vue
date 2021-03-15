<template>
    <slider :slides="slides"/>
</template>

<script>
    import Slider from '../components/Slider/Slider';

    export default {
        components: {
            Slider
        },
        computed: {
            slides() {
                return [
                    {
                        img: 'https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828_1280.jpg',
                        content: {
                            title: 'Image 1',
                            desc: 'Description for image 1'
                        }
                    },
                    {
                        img: 'https://cdn.pixabay.com/photo/2016/11/18/14/15/coast-1834827_1280.jpg',
                        content: {
                            title: 'Image 2',
                            desc: 'Description for image 2'
                        }
                    },
                    {
                        img: 'https://cdn.pixabay.com/photo/2018/04/21/15/21/meditation-3338691_1280.jpg',
                        content: {
                            title: 'Image 3',
                            desc: 'Description for image 3'
                        }
                    }
                ]
            }
        }
    }
</script>