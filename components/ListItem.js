import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class ListItem extends Component {
  render() {
    return (
      <View
        style={styles.container} >

        {/* left side */}
        <View style={styles.left} >
          <Image
            source={require('../assets/EventPlannerActivity.png')}
            style={styles.thumbnail} />
        </View>

        {/* center content */}
        <View style={styles.center} >
          <Text
            style={styles.title}>
            Title
          </Text>
          <Text
            style={styles.description}>
            Description
          </Text>
          <View
            style={styles.status} >
            <Ionicons name="md-checkmark-circle" style={styles.statusIcon} />
            <Text
              style={styles.statusText} >
              0/2
            </Text>
          </View>
        </View>

        {/* right side  */}
        <View style={styles.right} >
          <Text
            style={styles.time} >
            4:00 PM
          </Text>
          <View
            style={styles.rightBottom} >
            <Ionicons name="md-volume-mute" style={styles.mute} />
            <Ionicons name="ios-more" style={styles.more} />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 4,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  description: {
    fontSize: 12,
  },
  left: {
    flex: 1,
  },
  more: {
    fontSize: 20,
    padding: 4,
    margin: 4,
  },
  mute: {
    fontSize: 20,
    padding: 4,
    margin: 4,
  },
  right: {
    flex: 1,
    alignItems: 'center'
  },
  rightBottom: {
    flexDirection: 'row',
  },
  status: {
    alignSelf: 'flex-start',
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    padding: 2,
    marginTop: 2,
  },
  statusIcon: {
    color: '#fff',
    fontSize: 8,
    marginLeft: 4,
    marginRight: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 8,
    marginRight: 4,
  },
  time: {
    fontSize: 12,
  },
  title: {
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
});
