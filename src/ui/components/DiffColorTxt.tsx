import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from './AppText';
import Strings from '../../config/strings';
import {GILROY} from '../../config';
import colors from '../../config/colors';

type Props = {
    title : string,
    dayNum : number,
    dayTxt : string
}

export const DiffColorTxt = React.memo<Props>((props) =>
{
    return(
        <View style={styles.diffColorCont}>
            <View>
                <AppText
                    style={styles.diffColorLight}
                    text={props.title + " "}/>
            </View>
            <View  style={{flex:1}}>
                <AppText
                    style={styles.diffColorDark}
                    text={props.dayNum?.toString() + " " + props.dayTxt}/>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    diffColorCont : {
        flexDirection:"row",
        flex:1
    },
    diffColorLight : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.textLight,
    },
    diffColorDark : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.black,
    }
})