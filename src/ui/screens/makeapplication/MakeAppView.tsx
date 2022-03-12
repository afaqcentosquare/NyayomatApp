import React from "react";
import {Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppText} from "../../components/AppText";
import {GILROY} from "../../../config";
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import colors from '../../../config/colors';
// @ts-ignore
import LessIcon from '../../../assets/images/less_icon.svg';
// @ts-ignore
import MoreIcon from '../../../assets/images/more_icon.svg';
import App from '../../../../App';
import {ViewLine} from '../../components/ViewLine';
import { AppButton } from "../../components/AppButton";
import {MakeAppCard} from '../../components/MakeAppCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {StatusBars} from '../../components/StatusBars';
import Strings from '../../../config/strings';
import strings from '../../../config/strings';
import {browseResObj} from '../../../models/api_response/CatalogResModel';
import units from 'react-native-svg/lib/typescript/lib/units';
import {PriceTxt} from '../../components/PriceTxt';
import Api from '../../../config/Api';

type Props = {
    receiveData : browseResObj,
    installAmount : number,
    units : number,
    addUnits : () => void,
    subtractUnits : () => void,
    totalToPay : number,
    applyOrder : () => void,
    depositAmount : number
    /*calTotalPrice : () => void*/
}

type MakeAppNavProp = StackNavigationProp<AllScreenStackParamList>;

export const MakeAppView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<MakeAppNavProp>();

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
        <SafeAreaView style={styles.makeAppMainCont}>
            <BackBtnHeader backBtnVisible={true} title={"Make an Application"}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.makeAppSubCont}>
                    <View style={styles.makeAppImgCont}>
                        <Image
                            style={styles.makeAppImg}
                            source={{uri : Api.IMAGE_BASE_URL + props.receiveData.image}}/>
                    </View>
                    <View style={styles.makeAppNameCont}>
                        <View style={styles.makeAppTitleCont}>
                            <AppText
                                text={props.receiveData.asset_name}
                                style={styles.makeAppTitle}/>
                        </View>
                        <View style={styles.makeAppAddCont}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={styles.makeAppMinusIcon}
                                onPress={() => {
                                    props.subtractUnits();
                                }}>
                                <LessIcon/>
                            </TouchableOpacity>
                            <View style={styles.makeAppAddTxtCont}>
                                <AppText
                                    style={styles.makeAppAddTxt}
                                    text={props.units.toString()}/>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={styles.makeAppAddIcon}
                                onPress={() => {
                                    props.addUnits();
                                }}>
                                <MoreIcon/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ViewLine style={styles.makeAppViewLine}/>
                    <View style={styles.makeAppDetailTxtCont}>
                        <AppText
                            style={styles.makeAppDetailTxt}
                            text={Strings.makeApp.makeAppDetailTxt}/>
                    </View>
                    <View style={styles.makeAppCont1}>
                        <View>
                            <MakeAppCard
                                title={Strings.makeApp.makeAppSalePriceTxt}
                                price={numberFormat(props.receiveData.unit_cost)}
                                currencyVisible={true}
                                priceStyle={styles.makeAppPriceStyle1}
                                priceCurrencyStyle={styles.makeAppPriceCurrencyTxt}/>
                        </View>
                        <View style={{marginTop:10}}>
                            <MakeAppCard
                                title={Strings.makeApp.makeAppDepositAmountTxt}
                                price={numberFormat(props.depositAmount)}
                                currencyVisible={true}
                                priceStyle={styles.makeAppPriceStyle1}
                                priceCurrencyStyle={styles.makeAppPriceCurrencyTxt}/>
                        </View>
                        <View style={{marginTop:10}}>
                            <MakeAppCard
                                title={Strings.makeApp.makeAppInstallPriceTxt}
                                price={numberFormat(props.installAmount)}
                                currencyVisible={true}
                                priceStyle={styles.makeAppPriceStyle1}
                                priceCurrencyStyle={styles.makeAppPriceCurrencyTxt}/>
                        </View>
                    </View>
                    <ViewLine style={styles.makeAppViewLine}/>
                    <View style={{paddingTop:15}}>
                        <View>
                            <MakeAppCard
                                title={Strings.makeApp.makeAppPaymentHolidayTxt}
                                price={props.receiveData.holiday_provision + " " + "Days"}
                                currencyVisible={false}
                                priceStyle={styles.makeAppPriceStyle2}
                                priceCurrencyStyle={styles.makeAppPriceCurrencyTxt}/>
                        </View>
                        <View style={{marginTop:15}}>
                            <MakeAppCard
                                title={Strings.makeApp.makeAppNoOfInstallmentTxt}
                                price={props.receiveData.installment.toString()}
                                currencyVisible={false}
                                priceStyle={styles.makeAppPriceStyle2}
                                priceCurrencyStyle={styles.makeAppPriceCurrencyTxt}/>
                        </View>
                        <View style={styles.makeAppIntervalCont}>
                            <View style={{flex:1}}>
                                <AppText
                                    style={styles.makeAppIntervalTitleTxt}
                                    text={Strings.makeApp.makeAppPaymentIntervalTxt}/>
                            </View>
                            <View style={styles.makeAppIntervalPriceTxtCont}>
                                <AppText
                                    style={styles.makeAppIntervalPriceTxt}
                                    text={props.receiveData.payment_frequency}/>
                            </View>
                        </View>
                    </View>
                    <ViewLine style={{marginTop:20,height:2}}/>
                    <View style={{paddingTop:15}}>
                        <MakeAppCard
                            title={Strings.makeApp.makeAppTotalPayTxt}
                            price={numberFormat(props.totalToPay)}
                            currencyVisible={true}
                            priceStyle={styles.makeAppTotalPayTxt}
                            priceCurrencyStyle={styles.makeAppTotalCurTxt}/>
                    </View>
                    <View style={styles.makeAppBtnCont}>
                        <AppButton
                            text={Strings.makeApp.makeAppBtnTxt}
                            onPress={() => props.applyOrder()}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    makeAppMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    makeAppSubCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15
    },
    makeAppImgCont : {
        borderRadius:80,
        paddingTop:20
    },
    makeAppImg : {
        width:'100%',
        borderRadius:15,
        height:160,
        resizeMode:'cover'
    },
    makeAppNameCont : {
        marginTop:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    makeAppTitleCont : {
        flex:1
    },
    makeAppTitle : {
        fontFamily:GILROY.semi_bold,
        fontSize:18,
        fontWeight:'600'
    },
    makeAppAddCont : {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    makeAppAddIcon : {
        height:30,
        borderWidth:2,
        borderBottomEndRadius:30,
        borderTopEndRadius:30,
        borderColor:'#cbd6ee',
        paddingStart:13,
        paddingEnd:13,
        justifyContent:'center',
        alignItems:'center'
    },
    makeAppMinusIcon : {
        height:30,
        borderWidth:2,
        borderBottomStartRadius:30,
        borderTopStartRadius:30,
        borderColor:'#cbd6ee',
        paddingStart:13,
        paddingEnd:13,
        justifyContent:'center',
        alignItems:'center'
    },
    makeAppAddTxtCont : {
        height:30,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:'#cbd6ee',
        paddingStart:20,
        paddingEnd:20,
        justifyContent:'center',
        alignItems:'center'
    },
    makeAppAddTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:'400'
    },
    makeAppViewLine : {
        marginTop:20
    },
    makeAppDetailTxtCont : {
        paddingTop:20
    },
    makeAppDetailTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18,
        fontWeight:'400'
    },
    makeAppPriceStyle1 : {
        fontFamily:GILROY.semi_bold,
        fontSize:20,
        fontWeight:'600'
    },
    makeAppPriceStyle2 : {
        fontFamily:GILROY.semi_bold,
        fontSize:16,
        fontWeight:'400'
    },
    makeAppCont1 : {
        paddingTop:15
    },
    makeAppPriceCurrencyTxt : {
        fontSize:12,
        marginBottom:2
    },
    makeAppTotalCurTxt : {
        fontSize:14,
        marginBottom:3
    },
    makeAppTotalPayTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:24,
        fontWeight:'600',
    },
    makeAppBtnCont : {
        paddingTop:20,
        paddingBottom:20
    },
    makeAppIntervalCont : {
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    makeAppIntervalTitleTxt : {
        color: colors.textLight,
        fontFamily: GILROY.medium,
        fontWeight: '400',
        fontSize: 16,
    },
    makeAppIntervalPriceTxtCont : {
        borderRadius:20,
        borderWidth:1,
        paddingStart:15,
        paddingEnd:15,
        paddingTop:8,
        paddingBottom:8,
        borderColor:colors.cardBorder,
        backgroundColor:colors.white
    },
    makeAppIntervalPriceTxt : {
        color: colors.black,
        fontFamily: GILROY.semi_bold,
        fontWeight: '400',
        fontSize: 13,
    }

})
