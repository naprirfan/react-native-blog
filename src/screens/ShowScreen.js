import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find(item => item.id === id);

  return (
    <View style={styles.wrapper}>
        <Text style={styles.title}>{ blogPost.title }</Text>
        <Text>{ blogPost.content }</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <Entypo name="pencil" size={35} color="black" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
  }
});

export default ShowScreen;
