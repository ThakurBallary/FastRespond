import React, { Component } from 'react';
import { FlatList, Image, ListView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
      yellow: 0,
      score: 0,
      activeColor: 'green',
    }
  }

  touched = (color) => {
    // console.log(this.state)
    this.setState({
      [color] : this.state[color] + 1,
      score: this.state.score + 1,
    })
    this.changeActiveColor();
  }

  changeActiveColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow']
    activateColor = colors[Math.floor(Math.random() * 4 + 0)]
    this.setState({
      activeColor: activateColor,
    })
    console.log(this.state)
  }

  render() {
    console.log(this.state.activeColor)
    let redStatus = this.state.activeColor === 'red' ? {opacity: 1} : {opacity: .5}
    let greenStatus = this.state.activeColor === 'green' ? {opacity: 1} : {opacity: .5}
    let blueStatus = this.state.activeColor === 'blue' ? {opacity: 1} : {opacity: .5}
    let yellowStatus = this.state.activeColor === 'yellow' ? {opacity: 1} : {opacity: .5}
    return (
      <View style={styles.container}>
        <Text style={styles.score} >{this.state.score}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={this.touched.bind(this, 'red')}
            style={[styles.box, styles.red, redStatus]} >
            <Text
              style={styles.colorScore}
              >{this.state.red}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.touched.bind(this, 'green')} >
            <View
              style={[styles.box, styles.green, styles.greenBox, styles.rotate45, greenStatus]} >
              <Text
                style={[styles.colorScore, {transform: [{ rotate: '-45deg'}]}]}
                >{this.state.green}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={this.touched.bind(this, 'blue')}
            style={[styles.box, styles.blue, blueStatus]}>
            <Text
              style={styles.colorScore}
              >{this.state.blue}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.touched.bind(this, 'yellow')}
            style={[styles.box, styles.yellow, yellowStatus]}>
            <Text
              style={styles.colorScore}
              >{this.state.yellow}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    margin: 10,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenBox: {
    width: 80,
    height: 80,
    margin: 20,
  },
  rotate45: {
    transform: [{ rotate: '45deg'}],
  },
  red: {
    backgroundColor: '#F25022',
  },
  blue: {
    backgroundColor: '#01A4EF',
  },
  green: {
    backgroundColor: '#7FBA00',
  },
  yellow: {
    backgroundColor: '#FFB901'
  },
  row: {
    flexDirection: 'row'
  },
  colorScore: {
    fontSize: 16,
    color: '#fff',
  },
  score: {
    fontSize: 30,
    color: '#444',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 1,
  }
});
