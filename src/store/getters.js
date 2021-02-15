export default{

    getImages(state){
        return state.images;
    },
    getImage(state){
        return state.image;
    },
    getPageNumber(state){
    return state.pageNumber;
    },
    getError(state){
        return state.error;
    },
    getPageUrl(state){
        return state.pageUrl
    }
}