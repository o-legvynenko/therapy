
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Intro extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('home')}}>
            <View style={styles.wrapper}>
              <Text>Go to next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});