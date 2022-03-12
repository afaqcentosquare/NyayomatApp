import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import colors from '../../../config/colors';
import {ViewLine} from '../../components/ViewLine';
import Strings from '../../../config/strings';
import {myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import {PriceTxt} from '../../components/PriceTxt';

type Props = {
    onGoingAssetData : myAssetObj
}

export const OnGoingAssetListHeader = React.memo<Props>((props) =>
{
    const onGoingListHeadData = props.onGoingAssetData ;
    const onGoingListHeadString = Strings.onGoingAsset ;

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
            <View style={styles.onGoingListHeadCont}>
                <View>
                    <AppText
                        style={styles.onGoingListHeadTxt}
                        text={onGoingListHeadString.onGoingAssetCardTxt}/>
                </View>
                <View style={styles.onGoingListHeadPriceTxtCont}>
                    <View>
                        <PriceTxt
                            priceTxt={numberFormat(onGoingListHeadData?.amount === undefined ? 0 : onGoingListHeadData?.amount)}
                            currencyVisible={true}
                            priceStyle={styles.onGoingListHeadPriceTxt}
                            currencyStyle={styles.onGoingListHeadCurrencyTxt}/>
                    </View>
                </View>
            </View>
            <View style={styles.onGoingListHeadPaymentCont}>
                <View style={{flex:1}}>
                    <AppText
                        style={styles.onGoingListHeadNextPaymentTxt}
                        text={onGoingListHeadData?.next_payment === undefined ? onGoingListHeadString.onGoingAssetNextPaymentTxt + ' : ' + "0" : onGoingListHeadString.onGoingAssetNextPaymentTxt + ' : ' + onGoingListHeadData?.next_payment}/>
                </View>
                <View>
                    <AppText
                        style={styles.onGoingListHeadPaymentTxt}
                        text={onGoingListHeadData?.payments_left === undefined ? onGoingListHeadString.onGoingAssetPaymentLeft + " : " + "0" : onGoingListHeadString.onGoingAssetPaymentLeft + " : " + onGoingListHeadData?.payments_left}/>
                </View>
            </View>
            <ViewLine style={styles.onGoingListHeadViewLine}/>
            <View style={styles.onGoingListHeadTitleTxt}>
                <View>
                    <AppText
                        style={styles.onGoingListHeadMyAssetTxt}
                        text={onGoingListHeadString.onGoingMyAsset}/>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    onGoingListHeadCont : {
        backgroundColor:colors.dueToday,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30,
        paddingBottom:25,
        marginTop:20
    },
    onGoingListHeadTxt : {
        fontFamily:GILROY.medium,
        fontSize:16,
        color:colors.white
    },
    onGoingListHeadPriceTxtCont : {
        marginTop:3,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    onGoingListHeadCurrencyTxt : {
        fontWeight:'600',
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        color:colors.white,
        marginBottom:5
    },
    onGoingListHeadPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:28,
        fontWeight:'600',
        color:colors.white
    },
    onGoingListHeadPaymentCont : {
        flexDirection:'row',
        marginTop:15
    },
    onGoingListHeadNextPaymentTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:14
    },
    onGoingListHeadPaymentTxt : {
        fontFamily:GILROY.medium,
        fontSize:14,
        color:'#AFB2B6'
    },
    onGoingListHeadViewLine : {
        marginTop:15,
        height:2
    },
    onGoingListHeadTitleTxt : {
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    onGoingListHeadMyAssetTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18
    }
})