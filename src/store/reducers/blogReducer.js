const initState = {}

const blogReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_BLOG':
        console.log('create blog success');
        return state;

      case 'CREATE_BLOG_ERROR':
        console.log('error in creating blog !', action.err);
        return state;

      default:
          return state;
    }
  };
  

export default blogReducer;