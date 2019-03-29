import React, {Component} from 'react';
import {View , Text , StyleSheet} from 'react-native';

class Blink extends Component {
constructor(props) {
    super(props);
    this.state = { isShowingText: true};
    
    //Interval
    setInterval (() => (
        this.setState(previousState => (
            {isShowingText:!previousState.isShowingText}
        ))
    ), 1000 );
    }    
  render (){
       if(!this.state.isShowingText) { 
           return null;
        }
        return(
            <Text style = {styles.mytext}> {this.props.Text}</Text>
        );
    }
}
const styles = StyleSheet.create ({    
    mytext : {
        marginTop: -30,
        fontSize: 15,
        fontWeight: 'bold',
        color : 'red',
        textAlign : 'center',
    },

})
export default Blink;