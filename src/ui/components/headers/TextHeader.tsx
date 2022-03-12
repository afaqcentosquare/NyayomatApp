import React from 'react';
import {AppText} from "../AppText";
import {Image, StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import colors from "../../../config/colors";
import {GILROY} from "../../../config";
import { AppButton } from '../AppButton';

type Props = {
    title : string,
    style? : StyleProp<TextStyle>,
    signOutBtn : () => void
}

export const TextHeader = React.memo<Props>((props) =>
{
    return(
        <View style={styles.textHeaderCont}>
            <View>
                <Image style={{width:35,height:35}} source={require('../../../assets/images/home_header_icon.jpg')}/>
            </View>
            <View style={{flex:1}}>
                <AppText text={props.title} style={[styles.titleTxt,props.style]}/>
            </View>
            <View>
                <AppButton
                    onPress={() => props.signOutBtn()}
                    btnContStyle={{height:30}}
                    text={"Signout"}/>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    textHeaderCont : {
        height : 55,
        flexDirection:'row',
        alignItems : 'center',
        fontFamily:GILROY.semi_bold,
        backgroundColor : colors.white,
        paddingStart : 15,
        paddingEnd:15,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18
    },
    titleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18,
        fontWeight:"400"
    }
})
