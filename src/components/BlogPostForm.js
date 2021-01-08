import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.wrapper}>
      <Text>Enter Title:</Text>
      <TextInput style={styles.input} value={title} placeholder="Title" onChangeText={setTitle} />
      <Text>Enter Content:</Text>
      <TextInput style={styles.input} value={content} placeholder="Content" onChangeText={setContent} />
      <Button title="Save blog post" onPress={() => onSubmit(title, content)} />
    </View>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  input: {
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  }
});

export default BlogPostForm;
