import React, {Component} from 'react';
import {Alert , Button ,Text , View , StyleSheet ,TouchableHighlight , TouchableNativeFeedback ,TouchableOpacity , TouchableWithoutFeedback ,Platform } from 'react-native';

class Touches extends Component {
      _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

    render(){
    return (
         <View>
         <View style={styles.prop}> 
        <Text style = {styles.name}> TOUCHABLE BUTTONS</Text>
       </View>
        <View style = {styles.container1}>
              <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
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
      marginTop : -25,
    },
    prop : {
       marginTop : 2,
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
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }

})

export default Touches;