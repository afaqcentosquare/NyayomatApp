import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {AppText} from './AppText';
import {GILROY} from '../../config';
import colors from '../../config/colors';
import {PriceTxt} from './PriceTxt';

type Props = {
    title? : string,
    price? : string,
    currencyVisible? : boolean,
    titleStyle? : StyleProp<TextStyle>
    priceStyle? : StyleProp<TextStyle>,
    priceCurrencyStyle? : StyleProp<TextStyle>
}

export const MakeAppCard = React.memo<Props>((props) =>
{
    return(
        <View style={styles.makeAppCardCont}>
            <View style={{flex:1}}>
                <AppText
                    style={[styles.makeAppCardTitleTxt,props.titleStyle]}
                    text={props.title}/>
            </View>
            <View>
                <PriceTxt
                    priceTxt={props.price}
                    currencyVisible={props.currencyVisible}
                    priceStyle={props.priceStyle}
                    currencyStyle={props.priceCurrencyStyle}/>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    makeAppCardCont : {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    makeAppCardTitleTxt : {
        color:colors.textLight,
        fontFamily:GILROY.medium,
        fontWeight:'400',
        fontSize:16
    },
    makeAppCardPriceTxt : {
        color:colors.black,
        fontFamily:GILROY.medium,
        fontSize:16,
        fontWeight:'400'
    }
})
