/* @flow */
import React, { Component } from 'react';
import { FlatList, Image, ListView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with the new state
          console.log()
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  startXamprGame = () => {
    this.props.navigation.navigate('XamprGame')
  }

  render() {
  	let email = this.props.navigation.state.params.email;
  	let name = email.substring(0, email.indexOf('@'));
    let pic = {
      uri: "https://media.licdn.com/media/AAEAAQAAAAAAAAjKAAAAJGM5Yzc1ZDE1LTU2N2EtNDM4Ny04NTU0LWJmZDc4OTIwYzY5Mw.png"
    };
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.message}> Hello, you're logged in as " {name} " </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>

        <FlatList
          style={styles.p10}
          data={[
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
         />
         <ListView
           style={styles.p10}
           dataSource={this.state.dataSource}
           renderRow={(rowData) => <Text style={styles.item}>{rowData.title}, {rowData.releaseYear}</Text>}
         />
         <SectionList
           style={styles.p10}
           sections={[
             {title: 'D', data: ['Devin', 'Darey', 'David']},
             {title: 'J', data: ['John', 'Java', 'Jamaica', 'James', 'Jasmine']}
           ]}
           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
           keyExtractor={(item, index) => index}
         />
         <TouchableOpacity
           style={{backgroundColor: '#fff'}}
           onPress={this.startXamprGame}
           >
           <View style={styles.viewXamprGame}>
              <Image source={pic} style={styles.imageXampr} />
              <Text style={{padding: 10, fontSize: 22, color: '#444'}}>Game</Text>
           </View>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
	},
  imageXampr: {
    width: 200,
    height: 50,
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 40,
  },
  message: {
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  p10: {
    padding: 10,
  },
  viewXamprGame: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
