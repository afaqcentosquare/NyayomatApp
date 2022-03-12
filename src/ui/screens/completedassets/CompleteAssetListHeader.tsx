import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import colors from '../../../config/colors';
import {ViewLine} from '../../components/ViewLine';
import Strings from '../../../config/strings';
import {completeInfoObj} from '../../../models/api_response/MyAssetsResModel';
import {PriceTxt} from '../../components/PriceTxt';

type Props = {
    completeAssetData : completeInfoObj
}

export const CompleteAssetListHeader = React.memo<Props>((props) =>
{
    const completeListHeadData = props.completeAssetData ;
    const completeListHeadString = Strings.completeAsset ;

    const numberFormat = (value : number) =>
    {
        const re = '\\d(?=(\\d{' + 3 + '})+' + '\\D' + ')';
        // @ts-ignore
        const num = value.toFixed(Math.max(0, ~~2));
        const str = num.replace(new RegExp(re, 'g'), '$&' + ',');
        return str;
    }

    return(
        <View>
            <View style={styles.completeAssetCardMainCont}>
                <View>
                    <AppText
                        style={styles.completeAssetCardTitleTxt}
                        text={completeListHeadString.completeAssetCardTitleTxt}/>
                </View>
                <View style={styles.completeAssetPriceCont}>
                    <View>
                        <PriceTxt
                            priceTxt={numberFormat(completeListHeadData?.amount === null ? 0 : completeListHeadData?.amount)}
                            currencyVisible={true}
                            priceStyle={styles.completeAssetPriceTxt}
                            currencyStyle={styles.completeAssetCurrencyPriceTxt}/>
                    </View>
                </View>
            </View>
            <View style={styles.completeAssetPaymentMainCont}>
                <View style={styles.completeAssetPaymentSubCont}>
                    <AppText
                        style={styles.completeAssetPaymentTxt}
                        text={"Total Payments : " + completeListHeadData.total_payments}/>
                </View>
            </View>
            <ViewLine style={styles.completeAssetViewLine}/>
            <View style={styles.completeAssetTitleCont}>
                <View>
                    <AppText
                        style={styles.completeAssetTitleTxt}
                        text={"My Assets"}/>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    completeAssetCardMainCont : {
        backgroundColor:colors.completeAsset,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:25,
        paddingBottom:25,
        marginTop:20
    },
    completeAssetCardTitleTxt : {
        fontFamily:GILROY.medium,
        fontSize:16,
        color:colors.white
    },
    completeAssetPriceCont : {
        marginTop:3,
        flexDirection:'row'
    },
    completeAssetPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:28,
        fontWeight:'600',
        color:colors.white
    },
    completeAssetCurrencyPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        fontWeight:'600',
        color:colors.white,
        marginBottom:5
    },
    completeAssetPaymentMainCont : {
        flexDirection:'row',
        marginTop:15
    },
    completeAssetPaymentSubCont : {
        flex:1,
        flexDirection:'row-reverse'
    },
    completeAssetPaymentTxt : {
        fontFamily:GILROY.medium,
        fontSize:14,
        color:colors.lightTxt
    },
    completeAssetViewLine : {
        marginTop:15,
        height:2
    },
    completeAssetTitleCont : {
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    completeAssetTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18
    }
})