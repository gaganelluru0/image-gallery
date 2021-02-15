<template>

<div>

    <div class="page-buttons ">
      <b-button id="prev"  :disabled="pageNumber<=1"   variant="info" @click="prev"><b>Previous</b></b-button>
      <b-button  variant="info" id="next"  @click="next"><b>Next</b></b-button>
    </div>

   <b-container center class="display">
     <span><b>Limit </b><b-form-input type="number"   v-model.number="limit" /></span>
   </b-container>
   <h4 class="print"><b>Page :{{pageNumber}}</b> </h4>

  <div v-if="error==null" class="row">
  <div class="gallery col-md-3" v-for="image in images" :key="image.id">
  <router-link :to="{name:'SelectedImage',params:{id:image.id}}"><b-img :src=imageSize(image) class="img-thumbnail"/></router-link>
  <br>
  <router-link class="author" :to="{name:'SelectedImage',params:{id:image.id}}"><b>{{image.author}}</b></router-link>
  </div>
  </div>

  <div class="display" v-else>
    <h1>{{error.message}}</h1>
  </div>

  </div>

</template>
<script>


import {CHANGE_LIMIT, GET_IMAGES, NEXT_PAGE, PREVIOUS_PAGE} from '../store/constants'
import {mapGetters, mapMutations} from 'vuex'
export default {
name:"ImageList",

data(){
   return{
        limit:30
        }
},

methods:{
  ...mapMutations({
  next:NEXT_PAGE,
  prev:PREVIOUS_PAGE
  }),

  imageSize(image){ 
  return image.download_url.substring(0,24)+'/'+image.id+'/300'
  },
  
},

computed:{
  ...mapGetters({
   pageNumber:'getPageNumber',
   pageUrl:'getPageUrl',
   images:'getImages',
   error:'getError'
  })
},



mounted(){
   this.$store.dispatch(GET_IMAGES,this.pageUrl)
},

watch:{
  pageUrl(){
   
    this.$store.dispatch(GET_IMAGES,this.pageUrl)
  },
  limit(){
    this.$store.commit(CHANGE_LIMIT,this.limit)
  }
}
 

}

</script>

<style scoped>
.gallery{
  
  
  padding-left: 80px;
  margin-bottom: 50px;
 

}
.page-buttons{
  padding: 20px;
  padding-top: 100px;
}

.display{
  padding: 100px;
  padding-top:10px;
  text-align: center;
  padding-bottom: 10px;
  color: white;
}
.author{
  color: white;
  font-weight: bold;
  text-decoration: none;
}
.print{
  text-align: center;
  color: white;
  padding:20px;
}
#next{
  right: 10px;
  top:70px;
  float: right;
  width: 100px;
}
.limit{
  width: 100px;
}
#prev{
 width: 100px;
}

</style>
