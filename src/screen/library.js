
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Library extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Library</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});