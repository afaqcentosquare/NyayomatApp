import React from 'react';
import
{
    TouchableOpacity,
    StyleSheet,
    StyleProp,
    TextStyle, View
} from "react-native";
import {GILROY} from '../../config';
import {AppText} from "./AppText";
import colors from "../../config/colors";

type Props =
    {
        onPress? : () => void,
        text : String,
        btnContStyle? : StyleProp<TextStyle>,
        btnTxtStyle? : StyleProp<TextStyle>,
        visible? : boolean
    };

export const AppButton = React.memo<Props>((props) =>
{
    return(
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={props.onPress}>
            <View
                style={[styles.btnContainer,props.btnContStyle]}>
                <AppText
                    text={props.text.toString()}
                    style={[styles.btnText,props.btnTxtStyle]}/>
            </View>
        </TouchableOpacity>

    )

});

const styles = StyleSheet.create({
    btnContainer:
        {
            height:50,
            paddingStart:15,
            paddingEnd:15,
            borderRadius:40,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:colors.commonBtn
        },

    btnIcon :
        {
            marginStart: 5
        },

    btnText:
        {
            fontFamily:GILROY.semi_bold,
            fontWeight:'400',
            fontSize:15,
            color:colors.white,
        }
})
