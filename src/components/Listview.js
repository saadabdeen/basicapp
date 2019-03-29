import React, {Component} from 'react';
import {Text , View , StyleSheet,FlatList} from 'react-native';

class Listview extends Component {
    render(){
    return (
           <View>
         <View style={styles.prop}> 
        <Text style = {styles.name}> Flat List</Text>
       </View>
        <View style = {styles.container1}>
              <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}                    
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
        </View>
        </View>       
     );        
    }
}
const styles = StyleSheet.create ({
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
    container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

    })
export default Listview;