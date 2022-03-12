import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import colors from '../../../config/colors';
import {ViewLine} from '../../components/ViewLine';
import Strings from '../../../config/strings';
import {defaultInfoObj} from '../../../models/api_response/MyAssetsResModel';
import {PriceTxt} from '../../components/PriceTxt';

type Props = {
    defaultInfoData : defaultInfoObj
}

export const DefaultAssetListHeader = React.memo<Props>((props) =>
{
    const defaultAssetHeadString = Strings.defaultAsset;

    const numberFormat = (value : number) =>
    {
        if(value !== null)
        {
            const re = '\\d(?=(\\d{' + 3 + '})+' + '\\D' + ')';
            // @ts-ignore
            const num = value.toFixed(Math.max(0, ~~2));
            const str = num.replace(new RegExp(re, 'g'), '$&' + ',');
            return str;
        }
        else
        {
            return "0.00";
        }

    }


    return(
        <View>
            <View style={styles.defaultAssetHeadCont}>
                <View>
                    <AppText
                        style={styles.defaultAssetHeadTitleTxt}
                        text={defaultAssetHeadString.defaultAssetCardTitle}/>
                </View>
                <View style={styles.defaultAssetHeadPriceTxtCont}>
                    <View>
                        <PriceTxt
                            priceTxt={numberFormat(props.defaultInfoData?.amount)}
                            currencyVisible={true}
                            priceStyle={styles.defaultAssetHeadPriceTxt}
                            currencyStyle={styles.defaultAssetHeadCurrencyTxt}/>
                    </View>
                </View>
            </View>
            <View style={styles.defaultAssetHeadMainCont}>
                <View style={styles.defaultAssetHeadPaymentCont}>
                    <AppText
                        style={styles.defaultAssetHeadPaymentTxt}
                        text={defaultAssetHeadString.defaultAssetMissedPayment + " : " + props.defaultInfoData?.missed_payments}/>
                </View>
            </View>
            <ViewLine style={styles.defaultAssetHeadViewLine}/>
            <View style={styles.defaultAssetHeadTitleCont}>
                <View>
                    <AppText
                        style={styles.defaultAssetHeadAssetTitleTxt}
                        text={"My Assets"}/>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    defaultAssetHeadCont : {
        backgroundColor:colors.defaulted,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:25,
        paddingBottom:25,
        marginTop:20
    },
    defaultAssetHeadTitleTxt : {
        fontFamily:GILROY.medium,
        fontSize:16,
        color:colors.white
    },
    defaultAssetHeadPriceTxtCont : {
        marginTop:3,
        flexDirection:'row'
    },
    defaultAssetHeadPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:28,
        fontWeight:'600',
        color:colors.white
    },
    defaultAssetHeadMainCont : {
        flexDirection:'row',
        marginTop:15
    },
    defaultAssetHeadPaymentCont : {
        flex:1,
        flexDirection:'row-reverse'
    },
    defaultAssetHeadPaymentTxt : {
        fontFamily:GILROY.medium,
        fontSize:14,
        color:colors.lightTxt
    },
    defaultAssetHeadViewLine : {
        marginTop:15,
        height:2
    },
    defaultAssetHeadTitleCont : {
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    defaultAssetHeadAssetTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:16
    },
    defaultAssetHeadCurrencyTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        fontWeight:'600',
        color:colors.white
    }
})