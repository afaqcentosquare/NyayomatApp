import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import {ViewLine} from '../../components/ViewLine';
import {myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import {assetInfoObj} from '../../../models/api_response/TransactionResModel';
import {PriceTxt} from '../../components/PriceTxt';

type Props = {
    transDetailData : assetInfoObj,
    totalAmount : number
}

export const TransactionDetailListHeader = React.memo<Props>((props) =>
{
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
            <View style={styles.transDetailMainCont}>
                <View>
                    <AppText
                        style={styles.transDetailTotalPaidTxt}
                        text={"TOTAL PAID"}/>
                </View>
                <View style={{marginTop:3,flexDirection:'row',}}>
                    <View>
                        <PriceTxt
                            priceTxt={numberFormat(props.totalAmount)}
                            currencyVisible={true}
                            priceStyle={styles.transDetailHeadPriceTxt}
                            currencyStyle={styles.transDetailHeadCurrencyTxt}/>
                    </View>
                </View>
            </View>
            <View style={styles.transDetailIdTxtCont}>
                <View style={{flex:1}}>
                    <AppText
                        style={styles.transDetailIdTxt}
                        text={props.transDetailData.asset_name}/>
                </View>
            </View>
            <ViewLine style={{marginTop:15}}/>
            <View style={{marginTop:10}}>
                <AppText
                    style={styles.transDetailAssetTxt}
                    text={"Transactions"}/>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    transDetailMainCont : {
        backgroundColor:colors.white,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:25,
        paddingBottom:25,
        marginTop:20
    },
    transDetailTotalPaidTxt : {
        fontFamily:GILROY.medium,
        fontSize:16,
        color:colors.lightTxt
    },
    transDetailPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:28,
        fontWeight:'600',
        color:colors.black
    },
    transDetailIdTxtCont : {
        marginTop:15,
        flexDirection:'row',
        alignItems:'center'
    },
    transDetailIdTxt : {
        fontFamily:GILROY.semi_bold
    },
    transDetailAssetTxt : {
        fontFamily:GILROY.semi_bold,
        color:colors.black,
        fontSize:18
    },
    transDetailHeadCurrencyTxt : {
        fontWeight:'600',
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        color:colors.black,
        marginBottom:5
    },
    transDetailHeadPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:28,
        fontWeight:'600',
        color:colors.black
    },
})