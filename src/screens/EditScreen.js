import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { editBlogPost, state } = useContext(Context);
  const blogPost = state.find(item => item.id === id);

  return (
    <BlogPostForm 
      onSubmit={(title, content) => editBlogPost(title, content, id, () => navigation.navigate('Index'))}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
}

export default EditScreen;
