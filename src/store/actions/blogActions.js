export const createBlog = (blog) => {
    return (dispatch,getState,{getFirestore,getFirebase}) => {
        const firebase = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firebase.collection('blogs').add({
            ...blog,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_BLOG', blog});
        }).catch((err)=>{
            dispatch({type: 'CREATE_BLOG_ERROR'})
        });
    }
}
