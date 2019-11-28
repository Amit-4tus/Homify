<template>
    <section>
        <p>iiii</p>
        
         <label> Upload your image to cloudinary!
        <input @change="handleFileChange()" type="file" ref="file">
    </label>
    </section>
</template>

<script>
import {uploadImg} from '../services/CloudinaryService.js'



export default {
    data() {
        return {
            
        }
    },
    computed: {
    
    },
    
    methods: {
        async handleFileChange() {
            const f = this.$refs.file.files[0];
            console.log(f);
            const resp = await uploadImg(f);
            console.log(resp);
            // const  allImages = await store.addImageToThisHouse(houseId, resp.url);
        }
    },
    created() {
       
    }
}
</script>