import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {AppText} from './AppText';
import {GILROY} from '../../config';

type Props = {
    priceTxt? : string,
    currencyVisible? : boolean
    priceStyle? : StyleProp<TextStyle>,
    currencyStyle? : StyleProp<TextStyle>
}

export const PriceTxt = React.memo<Props>((props) =>
{
    return(
        <View style={styles.priceTxtCont}>
            <View>
                <AppText
                    style={[styles.priceText,props.priceStyle]}
                    text={props.priceTxt}/>
            </View>
            {props.currencyVisible ? <View style={styles.priceCurrencyCont}>
                <AppText style={[styles.priceCurrency,props.currencyStyle]} text={" KSH"}/>
            </View> : null}
        </View>
    )
})

const styles = StyleSheet.create({
    priceTxtCont : {
        flexDirection:'row'
    },
    priceText : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:15,
    },
    priceCurrencyCont : {
        justifyContent:'flex-end',
    },
    priceCurrency : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:12,
    },

})
