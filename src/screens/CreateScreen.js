import React, { useState, useContext } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.wrapper}>
      <Text>Enter Title:</Text>
      <TextInput style={styles.input} value={title} placeholder="Title" onChangeText={setTitle} />
      <Text>Enter Content:</Text>
      <TextInput style={styles.input} value={content} placeholder="Content" onChangeText={setContent} />
      <Button title="Add blog post" onPress={() => addBlogPost(title, content)} />
    </View>
  );
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

export default CreateScreen;
