import  { GET_IMAGES,GET_ERROR, GET_IMAGE_BY_ID, DELETE_IMAGE, NEXT_PAGE,PREVIOUS_PAGE ,CHANGE_LIMIT} from './constants'

export default  {
  
  [GET_IMAGES](state,response){
      state.paginationLink=response.headers.link
      state.images=response.data;
    },
    
  [GET_ERROR](state,data){
      state.error=data;
    },
 

  [GET_IMAGE_BY_ID](state,data){
    state.image=data
  },
 
  [NEXT_PAGE](state){
    var parse = require('parse-link-header');
    var parsed=parse(state.paginationLink);
    state.pageUrl=parsed.next.url
    state.pageNumber=parsed.next.page
   
  }
  ,
  [PREVIOUS_PAGE](state){
    var parse = require('parse-link-header');
    var parsed=parse(state.paginationLink);
    state.pageUrl=parsed.prev.url
    state.pageNumber=parsed.prev.page
   
}
,
[CHANGE_LIMIT](state,limit){

  var position=state.pageUrl.lastIndexOf('=')
  var url=state.pageUrl.substring(0,position+1)
  state.pageUrl=url+limit
  
  
}
,
  [DELETE_IMAGE](state){
    state.image=null
   
  }
}
