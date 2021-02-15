import { GET_IMAGES,GET_ERROR, GET_IMAGE_BY_ID, DOWNLOAD_IMAGE} from './constants'
import axios from 'axios'
export default  {

     async [GET_IMAGES](context,url){
    
     await axios.get(url).then(response=>{
     
     context.commit(GET_IMAGES,response)
    }).catch(err=>{
     context.commit(GET_ERROR,err)
    
   })
  },

    async [GET_IMAGE_BY_ID](context,url){
      await axios.get(url).then(response=>{
        console.log(response.data)
       context.commit(GET_IMAGE_BY_ID,response.data)
       }).catch(err=>{
         console.log(err)
        context.commit(GET_ERROR,err)
      })
    },
    


    async [DOWNLOAD_IMAGE](context,image){
      console.log(image.author)
      await axios({
        url:image.download_url,
        method:'GET',
        responseType:'blob'
      }).then((response)=>{
        var fileUrl=window.URL.createObjectURL(new Blob([response.data]))
        var fileLink=document.createElement('a')
        fileLink.href=fileUrl
        fileLink.setAttribute('download',image.author+'.jpg')
       document.body.appendChild(fileLink)
       fileLink.click()
      }).catch(err=>{
        context.commit(GET_ERROR,err)
      })
    }

  }