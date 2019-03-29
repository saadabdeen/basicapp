import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';

class Flexbox extends Component {
    render(){
    return (
       <View>
        <View style={styles.prop}> 
        <Text style = {styles.name}> FLEXBOX</Text>
        </View>
        <View style={styles.prop1}> 
        <Text style = {styles.name1}> FLEXBOX ROW</Text>
        </View>
        <View style = {{flex : 1 , flexDirection : 'row', justifyContent : 'center', margin : 8,}}>
        <View style={styles.container1} />
        <View style={styles.container2} />
        <View style={styles.container3} />
        </View>
           <View style={styles.prop1}> 
        <Text style = {styles.name1}> FLEXBOX COLUMN</Text>
        </View>
        <View style = {{flex : 1 , flexDirection : 'column', margin : 8,}}>
        <View style={{width: 110, height:100, backgroundColor : 'powderblue', justifyContent : 'space-between'}} />
        <View style={{width: 110, height:100, backgroundColor : 'skyblue', justifyContent : 'space-between'}} />
        <View style={{width: 110, height:100, backgroundColor : 'steelblue', justifyContent : 'space-between'}} />
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
    container1 : {
        width: 50,
        height:50,
        backgroundColor : 'powderblue',
    },
    container2 : {
        width: 50,
        height:50,
        backgroundColor : 'skyblue', 
    },
    container3 :{
        width: 50,
        height:50,
        backgroundColor : 'steelblue',
    },
    prop : {
       marginTop : 1,
       justifyContent: 'center',
       alignItems: 'center',
      backgroundColor: 'hsla(011, 100%, 50%, 0.5)',
    },
    
     prop1 : {
     marginTop : 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#FF8811',
    },
    name : {
        flex : 1 , 
        marginTop: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color : '#fff',
    },
     name1 : {
        flex : 1 , 
        margin: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color : '#fff',
     },
})

export default Flexbox;