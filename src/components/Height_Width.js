import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';

class Height_Width extends Component {
    render(){
    return (
        <View>
         <View style={styles.prop}> 
        <Text style = {styles.name}> HEIGHT & WIDTH</Text>
       </View>
        <View style = {styles.container1}/> 
       <View style = {styles.container2}/> 
       <View style = {styles.container3}/> 
       <View style = {styles.container4}/> 
       <View style = {styles.container5}/> 
       <View style = {styles.container6}/> 

          </View> 
                   
     );        
    }
}

const styles = StyleSheet.create ({
        
    container1 : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      height: 50,
      width : 50,
      backgroundColor : 'powderblue',
     
    },
     container2 : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      height: 100,
      width : 100,
      backgroundColor : 'skyblue',
     
    },
     container3 : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      height: 150,
      width : 150,
      backgroundColor : 'steelblue',
    
    },
     container4 : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      height: 100,
      width : 450,
      backgroundColor : 'powderblue',
     
    },
     container5 : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      height: 100,
      width : 450,
      backgroundColor : 'skyblue',
     
    },
     container6 : {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      height: 100,
      width : 450,
      backgroundColor : 'steelblue',
     
    },
    prop : {
       marginTop : 5,
       justifyContent: 'center',
       alignItems: 'center',
      backgroundColor: 'hsla(60, 100%, 10%, 0.5)',
    },
    name : {
        marginTop: 2,
        fontSize: 25,
        fontWeight: 'bold',
        color : '#fff',
    },
})


export default Height_Width;