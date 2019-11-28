<template>
    <section>
        
    <label> Upload your image to cloudinary!
        <input @change="handleFileChange()" type="file" ref="file">
    </label>
    <p>{{img}}</p>
    </section>
</template>

<script>
import {uploadImg} from '../services/CloudinaryService.js'

const CLOUD_NAME = 'dcbeo6630'
const PRESET_NAME = 'ut4qndey'

export default {
    data() {
        return {
            img: null
        }
    },
    computed: {
    
    },
    
    methods: {
        async handleFileChange() {
            const imgFile = this.$refs.file.files[0];
            const img = await uploadImg(CLOUD_NAME, PRESET_NAME, imgFile);
            this.img = img.url;
            //const  allImages = await store.addImageToThisHouse(houseId, resp.url);
        }
    },
    created() {
       
    }
}
</script>