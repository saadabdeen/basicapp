import { Text, View } from 'react-native';
import React from 'react';

const Greeting = (props) => {
    const { headingStyle, textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={headingStyle}>{props.greetHeading}</Text>
            <View style={viewStyle}>
                <Text style={textStyle}>{props.greet}</Text>
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyConents: 'center',
        alignItems: 'center',
        height: 150,
        paddingTop: 10,
        position: 'relative'
    },
    headingStyle: {
        fontSize: 16,

    },
    textStyle: {
        fontSize: 14
    }
};

export default Greeting;