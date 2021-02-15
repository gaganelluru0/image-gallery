<template>
<div class="display">
 <img :src=imageUrl class="img-thumbnail"/> 
</div>
</template>
<script>

export default {
    name:'RandomImage',
    data(){
        return{
        imageUrl:"https://picsum.photos/600"
        }
    }
 
 
}
</script>
<style scoped>

.display{
   text-align: center;
   padding: 100px;
   
}
</style>