const initState = {
    blogs : [
        {id:1,title : "First",content : "loremdjfvjbnvjern"},
        {id:2,title : "First",content : "loremdjfvjbnvjern"},
        {id:3,title : "First",content : "loremdjfvjbnvjern"},
        {id:4,title : "First",content : "loremdjfvjbnvjern"},
        {id:5,title : "First",content : "loremdjfvjbnvjern"},
    ]
}

const blogReducer = (state=initState,action) => {
    return state
} 

export default blogReducer