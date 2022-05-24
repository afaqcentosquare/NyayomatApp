import React, {useState} from 'react';
import {Image, StyleSheet, ToastAndroid, TouchableOpacity, View} from 'react-native';
import colors from '../../../config/colors';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {paymentConfirmResObj} from '../../../models/api_response/PaymentConfirmResModel';
import {DiffColorTxt} from '../../components/DiffColorTxt';
import Strings from '../../../config/strings';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';
import MainApis from '../../../repo/main/MainApis';
import {PriceTxt} from '../../components/PriceTxt';
import Api from '../../../config/Api';
import NumberFormat from '../../../utils/NumberFormat';

type Props = {
    item : paymentConfirmResObj,
    index? : number,
    length : number,
    updatePayConfirmList : () => void
}

type paymentConfirmNavProp = StackNavigationProp<AllScreenStackParamList>;

export const PaymentConfirmItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<paymentConfirmNavProp>();
    const paymentConfirmItemData = props.item ;
    const paymentConfirmString = Strings.paymentConfirm ;

    const getPayNowData = async (paymentId : number) =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getPayNow(paymentId,user_id.toString(),user_token.toString())
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        props.updatePayConfirmList();
                        ToastAndroid.show(response.data.message,ToastAndroid.LONG);
                    }
                    else
                    {
                        ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                    }
                })
        }
        catch (e)
        {
            console.log("BrowseException : " + e);
        }
    }

    return(
        <View
            style={[styles.paymentConfirmItemMainCont,{marginTop: props.index === 0 ? 15 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View style={styles.paymentConfirmItemSubCont}>
                <View style={styles.paymentConfirmItemImgCont}>
                    <Image
                        style={styles.paymentConfirmItemImg}
                        source={{uri : Api.IMAGE_BASE_URL + props.item.image}}/>
                </View>
                <View style={styles.paymentConfirmItemNameCont}>
                    <View>
                        <AppText
                            style={styles.paymentConfirmItemNameTxt}
                            text={paymentConfirmItemData.asset_name}/>
                    </View>
                    <View style={{marginTop:2}}>
                        <DiffColorTxt
                            title={paymentConfirmString?.paymentConfirmUnitCostTXT + " "}
                            dayNum={parseInt(NumberFormat.numberFormat(paymentConfirmItemData?.unit_cost === undefined ? 0 : paymentConfirmItemData?.unit_cost))}
                            dayTxt={"KSH"}/>
                    </View>
                    <View style={{marginTop:2}}>
                        <DiffColorTxt
                            title={paymentConfirmString?.paymentConfirmUnitTxt + " "}
                            dayNum={parseInt(NumberFormat.numberFormat(paymentConfirmItemData?.units === undefined ? 0 : paymentConfirmItemData?.units))}
                            dayTxt={""}/>
                    </View>
                    <View style={styles.paymentConfirmItemPriceCont}>
                        <PriceTxt
                            priceTxt={NumberFormat.numberFormat(paymentConfirmItemData?.amount === undefined ? 0 : paymentConfirmItemData?.amount)}
                            currencyVisible={true}
                            priceStyle={styles.paymentConfirmItemPriceTxt}
                            currencyStyle={styles.paymentConfirmItemPriceTxt}/>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => getPayNowData(paymentConfirmItemData.id)}
                    activeOpacity={0.6}
                    style={styles.paymentConfirmPayBtnCont}>
                    <AppText
                        style={styles.paymentConfirmPayBtnTxt}
                        text={paymentConfirmString.paymentConfirmPayBtnTxt}/>
                </TouchableOpacity>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    paymentConfirmItemMainCont : {
        backgroundColor:colors.white,
        borderRadius:12,
        flexDirection:'row',
        overflow:'hidden'
    },
    paymentConfirmItemSubCont : {
        flex:1,
        flexDirection:'row'
    },
    paymentConfirmItemImgCont : {
        justifyContent:'center',
        paddingStart:10,
        paddingBottom:10,
        paddingTop:10
    },
    paymentConfirmItemImg : {
        width:70,
        height:80,
        resizeMode:'cover',
        borderRadius:8
    },
    paymentConfirmItemNameCont : {
        justifyContent:'center',
        flex:3,
        paddingStart:10,
        paddingEnd:10,
        paddingTop:10,
        paddingBottom:10
    },
    paymentConfirmItemNameTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    paymentConfirmItemPriceCont : {
        marginTop:3
    },
    paymentConfirmItemPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:15
    },
    paymentConfirmPayBtnCont : {
        flex:1,
        backgroundColor:colors.commonBtn,
        justifyContent:'center',
        alignItems:'center'
    },
    paymentConfirmPayBtnTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:16,
        color:colors.white
    }
})
