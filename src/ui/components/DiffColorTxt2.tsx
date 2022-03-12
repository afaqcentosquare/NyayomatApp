import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from './AppText';
import {GILROY} from '../../config';
import colors from '../../config/colors';

type Props = {
    lightTxt? : string,
    darkTxt? : string
}

export const DiffColorTxt2 = React.memo<Props>((props) =>
{
    return(
        <View style={styles.diffColorTxt2MainCont}>
            <View>
                <AppText
                    style={styles.diffColorTxt2LightTxt}
                    text={props.lightTxt}/>
            </View>
            <View>
                <AppText
                    style={styles.diffColorTxt2DarkTxt}
                    text={props.darkTxt}/>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    diffColorTxt2MainCont : {
        flex:1,flexDirection:'row'
    },
    diffColorTxt2LightTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.textLight,
    },
    diffColorTxt2DarkTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.black,
    }
})