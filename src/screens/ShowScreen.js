import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find(item => item.id === id);

  return (
    <View>
        <Text>{ blogPost.title }</Text>
    </View>
  );
}

export default ShowScreen;
