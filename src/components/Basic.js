import React, {Component} from 'react';
import {ScrollView , Image , View ,ImageBackground} from 'react-native';
import Header from './Header';
import Props from './Props';
import State from './State';
import Style from './Style';
import Height_Width from './Height_Width';
import Flexbox from './Flexbox';
import Input from './Input';
import Touches from './Touches';
import Listview from './Listview';
import Sectionlistview from './Sectionlistview';
import Network from './Network';
import Footer from './Footer';
import Blink from './Blink';


class Basic extends Component {
    
    render(){
        return (
            <ImageBackground
        source={require('../components/images/6.png')} style={{flex : 1 , width : '100%' , height : '100%'}}>
            <View style ={{flex : 1}}>
            <Header/>
            <ScrollView>
            <Props/>
            <Style/>
            <Height_Width/>
            <Flexbox/>
            <Input/>
            <Touches/>
            <Listview/>
            <Sectionlistview/>
            <Network/>
            <View>
            <State/>
            </View>
            </ScrollView>
            </View>
            </ImageBackground>
            
        
        
        
        );
    }
}

export default Basic;