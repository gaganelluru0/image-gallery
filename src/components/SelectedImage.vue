<template>
<div>
    
    <div v-if="image!=null && error==null" class="display">

    <br>
    <img :src=imageSize(image) class="img-thumbnail"/>
    <br>
    <h3 @click="author(image.url)">Author: <b>{{image.author}}</b></h3>
    <h3>Image Id: <b>{{image.id}}</b></h3><br>
    <button @click="download" class="btn btn-primary"><b>Download Image</b></button>

    </div>


   <div class="display" v-else-if="error!=null">
   <h1>{{error.message}}</h1>
   </div>


    <div class="display" v-else>
    <span class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
     </span>
     <h1>Loading</h1>
    </div>
   
</div>
     
</template>
<script>


import {  DELETE_IMAGE, DOWNLOAD_IMAGE, GET_IMAGE_BY_ID } from '../store/constants';
import { mapGetters} from 'vuex'
export default {
name:"SelectedImage",
props:['id'],

data(){
    return{
            imageId:this.id,
            imageUrl:'https://picsum.photos/id/'+this.id+'/info',
          }
       },

methods:{
       
        download(){
           this.$store.dispatch(DOWNLOAD_IMAGE,this.image)
        },
         
        imageSize(image){
            return image.download_url.substring(0,24)+'/'+image.id+'/600'
            },
        author(url){ 
            window.location.href=url
            }
        },

computed:{

        ...mapGetters({
       image:'getImage',
       error:'getError'
        })

        },
   
beforeMount(){
    this.$store.commit(DELETE_IMAGE)
},

mounted(){
    this.$store.dispatch(GET_IMAGE_BY_ID,this.imageUrl)
    }
 
}



</script>
<style scoped>


.display{
    text-align: center;
    color: white;
    padding: 100px;
}
</style>