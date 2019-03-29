import React, {Component} from 'react';
import {Text , View , StyleSheet , TextInput} from 'react-native';

class Input extends Component {
      constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    render(){
    return (
        <View>
                 <View style={styles.prop1}> 
        <Text style = {styles.name1}> HANDLING TEXT INPUT</Text>
        </View>
        
                 <View style={{padding: 10 , alignItems : 'center'}}>
        <TextInput 
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      
      </View> 
      </View>    
     );        
    }
}

const styles = StyleSheet.create ({
     prop1 : {
       marginTop : 1,
       justifyContent: 'center',
       alignItems: 'center',
      backgroundColor: 'hsla(011, 100%, 50%, 0.5)',
    },
      name1 : {
        flex : 1 , 
        margin: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color : '#fff',
      },
})
export default Input;