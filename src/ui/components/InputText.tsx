import React, {useState} from 'react';
import
{
    StyleProp,
    StyleSheet,
    TextInput, TextInputProps,
    TextStyle, TouchableOpacity,
    View,
} from 'react-native';
import {Colors, GILROY} from "../../config";
// @ts-ignore
import SearchIcon from '../../assets/images/search_icon.svg';
import {FONT_SIZE} from '../../config/Dimens';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';

type Props =
{
    hint : string,
    icon? : any,
    visible? : boolean,
    errorIconVisible? : boolean,
    valueToShowAtStart? : string,
    onChangeText? : (e: string) => void,
    style? : StyleProp<TextStyle>,
    secureTxtEntry? : boolean,
    editable? : boolean,
    focusable? : boolean,
    eyeChange? : () => void
    eyeVisible? : boolean,
    keyboardType? : any,
    dropDownIconVisible? : boolean
}


export const InputText = React.memo<Props> ((props) =>
    {
        return (
            <View style={[styles.inputTxtContainer,props.style]}>
                {props.visible ? <SearchIcon/> : null}
                <TextInput
                    value={props.valueToShowAtStart}
                    editable={props.editable}
                    selectTextOnFocus={props.focusable}
                    keyboardType={props.keyboardType}
                    style={styles.inputTxt}
                    placeholder={props.hint}
                    secureTextEntry={props.secureTxtEntry}
                    onChangeText={(e: string) =>
                    {
                        props.onChangeText?.(e);
                    }}/>
                {props.eyeVisible ?
                    <TouchableOpacity
                        onPress={props.eyeChange}
                        activeOpacity={0.6}>
                        {props.secureTxtEntry ?
                            <Ionicons name={'eye-off'} size={26} color={colors.commonBtn}/> :
                            <Ionicons name={'eye-sharp'} size={26} color={colors.commonBtn}/>}
                    </TouchableOpacity>
                    : null}

                {props.errorIconVisible ? <MaterialIcons name={'error'} size={26} color={colors.red}/> : null}
                {props.dropDownIconVisible ? <AntDesign name={'down'} size={16} color={colors.black}/> : null}
            </View>
        );
    }
);

const styles = StyleSheet.create({
    inputTxtContainer:
        {
            height:50,
            flexDirection:'row',
            borderRadius:45,
            backgroundColor:Colors.editTxt,
            alignItems:'center',
            paddingStart:15,
            paddingEnd:15
        },

    inputTxt:
        {
            flex:1,
            paddingStart:10,
            alignItems:'center',
            justifyContent:'center',
            color : Colors.black,
            fontSize : FONT_SIZE.md,
            fontFamily:GILROY.semi_bold,
        }
});
