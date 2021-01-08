import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { 
        id: Math.floor(Math.random() * 999999), 
        title: action.payload.title,
        content: action.payload.content,
      }];
    case 'edit_blogpost':
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.content = action.payload.content;
        }
        return item;
      })
    case 'delete_blogpost':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  }
};

const editBlogPost = (dispatch) => {
  return (title, content, id, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { title, content, id }});
    callback();
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer, 
  { 
    addBlogPost, 
    deleteBlogPost,
    editBlogPost,
  }, 
  [
    {title: 'Test post', content: 'Test content', id: 1},
  ],
);
