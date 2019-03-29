import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListview extends Component {
  render() {
    return (
                   <View>
         <View style={styles.prop}> 
        <Text style = {styles.name}> Section List</Text>
       </View>
        <View style = {styles.container1}>
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  container1 : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
    },
    prop : {
       marginTop : 5,
       justifyContent: 'center',
       alignItems: 'center',
      backgroundColor: 'hsla(240, 100%, 50%, 0.5)',
    },
    name : {
        marginTop: 2,
        fontSize: 25,
        fontWeight: 'bold',
        color : '#fff',
    },
})