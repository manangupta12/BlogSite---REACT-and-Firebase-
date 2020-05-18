export const createBlog = (blog) => {
    return (dispatch,getState,{getFirestore,getFirebase}) => {
        const firebase = getFirestore();
        firebase.collection('blogs').add({
            ...blog,
            date : new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_BLOG', blog});
        }).catch((err)=>{
            dispatch({type: 'CREATE_BLOG_ERROR'})
        });
    }
}
