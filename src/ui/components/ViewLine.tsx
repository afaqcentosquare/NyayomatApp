import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';

type Props = {
    style? : StyleProp<TextStyle>
}

export const ViewLine = React.memo<Props>((props) =>
{
    return(
        <View style={[styles.viewLine,props.style]}/>
    )
})

const styles = StyleSheet.create({
    viewLine : {
        backgroundColor:'#cbd6ee',
        height:1.5,
        borderRadius:8
    }
})
