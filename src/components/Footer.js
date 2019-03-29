import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';

class Footer extends Component {
    render(){
    return (
        <View>
         <View style={styles.prop}> 
        <Text style = {styles.name}> STYLE</Text>
       </View>
        <View style = {styles.container}>
        <Text style = {styles.name1}> SAAD  <Text style = {styles.name2}> ABDEEN </Text></Text>
       
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
     name1 : {
        marginTop: 5,
        fontSize: 45,
        fontWeight: 'bold',
        color : '#0D6513',
    },
   name2 : {
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color : '#FF9100',
    },


})

export default Footer;