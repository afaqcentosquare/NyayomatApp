import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
// @ts-ignore
import TransIcon1 from '../../../assets/images/trans_icon_1.svg';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
// @ts-ignore
import TransIcon2 from '../../../assets/images/trans_icon_2.svg';
import {totalReceiptObj} from '../../../models/api_response/TransactionResModel';
import {PriceTxt} from '../../components/PriceTxt';
import NumberFormat from '../../../utils/NumberFormat';

type Props = {
    transCardData : totalReceiptObj,
    transPaidData : number
}

export const TransactionListHeader = React.memo<Props>((props) =>
{

    return(
        <View>
            <View style={styles.transListHeaderMainCont}>
                <View style={styles.transListHeaderCardMainCont1}>
                    <View style={styles.transListHeaderListIconCont}>
                        <View>
                            <TransIcon1/>
                        </View>
                        <View style={{marginStart:10}}>
                            <AppText
                                style={styles.transListHeaderReceiptTitleTxt}
                                text={"Receipt"}/>
                        </View>
                    </View>
                    <View style={{paddingTop:10}}>
                        <AppText
                            style={styles.transListHeaderTotalTxt}
                            text={"TOTAL"}/>
                    </View>
                    <View style={{paddingTop:5}}>
                        <PriceTxt
                            priceTxt={NumberFormat.numberFormat(props.transCardData?.total === undefined ? 0 : props.transCardData?.total)}
                            currencyVisible={true}
                            priceStyle={styles.transListHeaderPriceTxt}
                            currencyStyle={styles.transListHeaderCurrencyTxt}/>
                    </View>
                </View>
                <View style={styles.transListHeaderCardMainCont2}>
                    <View style={styles.transListHeaderPaymentIconCont}>
                        <View>
                            <TransIcon2/>
                        </View>
                        <View style={{paddingStart:10}}>
                            <AppText
                                style={styles.transListHeaderPaymentIconTxt}
                                text={"Payment"}/>
                        </View>
                    </View>
                    <View style={{paddingTop:10}}>
                        <AppText
                            style={styles.transListHeaderTotalTxt}
                            text={"TOTAL"}/>
                    </View>
                    <View style={{paddingTop:5}}>
                        <PriceTxt
                            priceTxt={NumberFormat.numberFormat(props.transPaidData === undefined ? 0 : props.transPaidData)}
                            currencyVisible={true}
                            priceStyle={styles.transListHeaderPriceTxt}
                            currencyStyle={styles.transListHeaderCurrencyTxt}/>
                    </View>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <AppText
                    style={styles.transListHeaderTitleTxt}
                    text={"Assets"}/>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    transListHeaderMainCont : {
        width:'100%',
        flexDirection:'row',
        paddingTop:15
    },
    transListHeaderCardMainCont1 : {
        flex:1,
        backgroundColor:colors.white,
        borderRadius:16,
        marginEnd:5,
        padding:15
    },
    transListHeaderListIconCont : {
        flexDirection:'row',
        alignItems:'center'
    },
    transListHeaderReceiptTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:'600'
    },
    transListHeaderTotalTxt : {
        fontFamily:GILROY.medium,
        color:colors.lightTxt,
        fontSize:14
    },
    transListHeaderPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:20,
        fontWeight:'600',
        color:colors.black
    },
    transListHeaderCurrencyTxt : {
        fontWeight:'600',
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        color:colors.black,
        marginBottom:2
    },
    transListHeaderCardMainCont2 : {
        flex:1,
        backgroundColor:colors.white,
        borderRadius:16,
        marginStart:5,
        padding:15
    },
    transListHeaderPaymentIconCont : {
        flexDirection:'row',
        alignItems:'center'
    },
    transListHeaderPaymentIconTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:'600'
    },
    transListHeaderTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18,
        color:colors.black
    }
})
