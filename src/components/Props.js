import React, {Component} from 'react';
import {Text , View , StyleSheet , Image} from 'react-native';
import Greeting from './Greeting';


class Props extends Component {
    render(){
        let pic = {uri : 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'}
    return (
        <View >
            <View style={styles.prop}> 
        <Text style = {styles.name}> PROPS</Text>
        </View>
        <View style = {styles.container}>
    <Image source = {pic} style = {styles.picture}/>
         </View>
           <Greeting greetHeading={'THIS IS TEXT IS DISPLAYED BY USING PROPS'} greet={'Greetings Hurrah!'} />
         </View>         
     );        
    }
}



const styles = StyleSheet.create ({
   
    picture : {
        marginTop: 20,
        width:  192,
        height: 160,    
    },
    container : {
      flex : 1,
      marginTop : 50,
      alignItems : 'center',
      justifyContent : 'center',
    },
    prop : {
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'hsla(311, 100%, 50%, 0.5)',
    },
    name : {
        marginTop: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color : '#fff',
    },
    greet : {
         marginTop : 25 ,
         justifyContent: 'center',
         alignItems: 'center',
    },
})

export default Props ;