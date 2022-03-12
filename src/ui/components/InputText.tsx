import React, {useState} from 'react';
import
{
    StyleProp,
    StyleSheet,
    TextInput, TextInputProps,
    TextStyle,
    View,
} from 'react-native';
import {Colors, GILROY} from "../../config";
// @ts-ignore
import SearchIcon from '../../assets/images/search_icon.svg';

type Props =
{
    hint : string,
    icon? : any,
    visible? : boolean,
    valueToShowAtStart? : string,
    onChangeText? : (e: string) => void,
    style? : StyleProp<TextStyle>,
    secureTxtEntry? : boolean
}


export const InputText = React.memo<Props> ((props) =>
    {
        const [val,setVal] = useState(props.valueToShowAtStart)

        return (
            <View style={[styles.inputTxtContainer,props.style]}>
                {props.visible ? <SearchIcon/> : null}
                <TextInput
                    value={val}
                    style={styles.inputTxt}
                    placeholder={props.hint}
                    secureTextEntry={props.secureTxtEntry}
                    onChangeText={(e: string) =>
                    {
                        props.onChangeText?.(e);
                        setVal(e)
                    }}/>
            </View>
        );
    }
);

const styles = StyleSheet.create({
    inputTxtContainer:
        {
            height:45,
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
            color : Colors.black,
            fontSize : 14,
            fontFamily:GILROY.semi_bold,
        }
});
