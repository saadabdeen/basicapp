import React, {Component} from 'react';
import {Text , View , StyleSheet , Button ,Alert} from 'react-native';
import Blink from './Blink';

class State extends Component { 
    _onPressButton() {
    Alert.alert( '')
    }
    render(){
    return (
         
        <View>
         <View style={styles.prop}> 
        <Text style = {styles.name}> STATE</Text>
       </View>
        <View style = {styles.container}>
                <Blink Text = 'Welcome to React Native'/>
         </View>

         
         </View>            
     );    
    }
} 


const styles = StyleSheet.create ({
        
    container : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginTop : 25,
    },
    prop : {
       marginTop : 20,
       justifyContent: 'center',
       alignItems: 'center',
      backgroundColor: 'hsla(11, 100%, 50%, 0.5)',
    },
    name : {
        marginTop: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color : '#fff',
    },

})

export default State;