import React, { useContext } from 'react';
import { Text, View, FlatList, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add post" onPress={addBlogPost} />
      <FlatList 
        data={state}
        keyExtractor={post => post.title} 
        renderItem={({ item }) => {
         return (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Feather name="trash" size={24} color="black" />
          </View>
         )
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  title: {
    flex: 1,
    fontSize: 18,
  }
});

export default IndexScreen;
