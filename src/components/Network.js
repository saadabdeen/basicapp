import React from 'react';
import { FlatList, ActivityIndicator, Text, View , StyleSheet} from 'react-native';

export default class Network extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
           <View>
         <View style={styles.prop}> 
        <Text style = {styles.name}> Fetch </Text>
       </View>
        <View style = {styles.container1}>
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
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
})
