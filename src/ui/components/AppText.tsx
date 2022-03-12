import React from 'react';
import
{
    Text,
    StyleProp,
    TextStyle, StyleSheet
} from "react-native";
import colors from "../../config/colors";
import {MONTSERRAT} from "../../config";

type Props =
{
    text? : string,
    numberOfLine? : number,
    style? : StyleProp<TextStyle>,
}

export const AppText = React.memo<Props>((props) =>
    {

        return (
            <Text
                style={[styles.appTxt,props.style]}
                numberOfLines={props.numberOfLine}>
                {props.text}
            </Text>
        );
    }
);

const styles = StyleSheet.create({
    appTxt:
        {
            fontSize:16,
            color: colors.black,
            fontFamily: MONTSERRAT.regular,
        }
})
