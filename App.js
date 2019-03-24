import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
//import {List, ListItem} from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
        <FlatList
          data={[{key: 'Sumit'}, {key: 'Kumar'}, {key: 'Ghosh'}]}
          renderItem={({item}) => <Text style = {styles.item} >{item.key}</Text>}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderSeparator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "14%"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
