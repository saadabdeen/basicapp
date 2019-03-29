import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';


class Header extends Component{
    render() {
     return (
         <View style={styles.container}> 
        <Text style = {styles.name}> REACT NATIVE BASIC APP</Text>
        </View> 
      );           
    } 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(211, 100%, 50%, 0.5)',
    shadowOpacity: 1, 
    
  },
  name: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color : '#fff',
    },
 
});
export default Header;