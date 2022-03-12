import React from 'react';
import {SafeAreaView, StyleSheet, ToastAndroid, View} from 'react-native';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
// @ts-ignore
import TransIcon1 from '../../../assets/images/trans_icon_1.svg';
import {AppText} from '../../components/AppText';
import {PriceTxt} from '../../components/PriceTxt';
import {GILROY} from '../../../config';
import Strings from '../../../config/strings';
import {userResObj} from '../../../models/api_response/MyAccountResModel';
import {InputText} from '../../components/InputText';
import { AppButton } from '../../components/AppButton';
import {ProgressBar} from '../../components/ProgressBar';

type Props = {
    myAccountData : userResObj | undefined,
    depositEdtTxt : (e : string) => void
    depositEdtVal : string,
    topUpAccountBalance : () => void
}

export const MyAccountView = React.memo<Props>((props) =>
{
    const numberFormat = (value: number) =>
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
        <SafeAreaView style={styles.myAccountMainCont}>
            <BackBtnHeader
                backBtnVisible={true}
                title={Strings.myAccount.myAccountHeadTxt}/>
            <View style={styles.myAccountSubCont}>
                {props.myAccountData !== undefined ? <View>
                    <View style={styles.myAccountCardMainCont1}>
                        <View style={styles.myAccountIconCont}>
                            <View>
                                <TransIcon1/>
                            </View>
                            <View style={{marginStart: 10}}>
                                <AppText
                                    style={styles.myAccountReceiptTitleTxt}
                                    text={'Account Balance'}/>
                            </View>
                        </View>
                        <View style={{paddingTop: 10}}>
                            <AppText
                                style={styles.myAccountTotalTxt}
                                text={'TOTAL'}/>
                        </View>
                        <View style={{paddingTop: 5, flexDirection: 'row'}}>
                            <PriceTxt
                                priceTxt={numberFormat(props.myAccountData?.account_balance)}
                                currencyVisible={true}
                                priceStyle={styles.myAccountPriceTxt}
                                currencyStyle={styles.myAccountCurrencyTxt}/>
                        </View>
                    </View>
                    <View>
                        <InputText
                            visible={false}
                             valueToShowAtStart={props.depositEdtVal}
                             onChangeText={(e) => props.depositEdtTxt(e)}
                            style={styles.myAccountEdtCont}
                            hint={Strings.myAccount.myAccountEdtHint}/>
                    </View>
                    <View>
                        <AppButton
                            text={'Top Up'}
                            onPress={() => props.topUpAccountBalance()}/>
                    </View>
                </View> : null}
                {props.myAccountData === undefined ? <ProgressBar/> : null}
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    myAccountMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    myAccountSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor,
        marginStart:15,
        marginEnd:15
    },
    myAccountCardMainCont1 : {
        backgroundColor:colors.white,
        borderRadius:16,
        padding:15,
        marginTop:20
    },
    myAccountIconCont : {
        flexDirection:'row',
        alignItems:'center'
    },
    myAccountReceiptTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:'600'
    },
    myAccountTotalTxt : {
        fontFamily:GILROY.medium,
        color:colors.lightTxt,
        fontSize:14
    },
    myAccountPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:20,
        fontWeight:'600',
        color:colors.black
    },
    myAccountCurrencyTxt : {
        fontWeight:'600',
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        color:colors.black,
        marginBottom:2
    },
    myAccountEdtCont : {
        backgroundColor:colors.white,
        marginTop:15,
        marginBottom:15
    }
})

