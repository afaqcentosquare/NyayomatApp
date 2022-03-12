import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../../config/colors';
import {AppText} from './AppText';
import {GILROY} from '../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {PriceTxt} from './PriceTxt';
import Strings from '../../config/strings';
// @ts-ignore
import ArrowRightIcon from '../../assets/images/arrow_right_icon.svg';

type Props = {
    dayTxt : string,
    paymentTxt : string,
    color? : string,
    onPress? : () => void,
    viewDetail? : () => void
}

type MakePaymentNavProp = StackNavigationProp<AllScreenStackParamList>;

export const MakePaymentCard = React.memo<Props>((props) =>
{
    const navigation = useNavigation<MakePaymentNavProp>()

    return(
        <View>
            <View>
                <View
                    style={styles.makePaymentCardNameCont}>
                    <View
                        style={styles.makePaymentCardPriceCont}>
                        <View>
                            <AppText
                                style={styles.makePaymentCardTitleTxt}
                                text={Strings.makePayment.makePaymentTitle}/>
                        </View>
                        <View style={styles.makePaymentCardTitleCont}>
                            <PriceTxt
                                priceTxt={props.paymentTxt}
                                currencyVisible={true}
                                priceStyle={styles.makePaymentCardPriceTxt}
                                currencyStyle={styles.makePaymentCardCurrentTxt}/>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={props.onPress}
                        activeOpacity={0.6}
                        style={styles.makePaymentCardBtnCont}>
                        <View>
                            <AppText style={{fontFamily:GILROY.semi_bold,color:colors.white}} text={Strings.makePayment.makePaymentPayTxt}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.makePaymentCardBottomCont}>
                <View style={styles.makePaymentCardCircleCont}>
                    <View style={[styles.makePaymentCardCircle,{backgroundColor:props.color}]}/>
                    <View
                        style={styles.makePaymentCardCircleTxtCont}>
                        <AppText
                            text={props.dayTxt}
                            style={styles.makePaymentCardCircleTxt}/>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={props.viewDetail}>
                    <AppText
                        text={Strings.makePayment.makePaymentViewDetail}
                        style={styles.makePaymentCardViewDetailTxt}/>
                </TouchableOpacity>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    makePaymentCardNameCont : {
        borderRadius:15,
        backgroundColor:colors.white,
        flexDirection:'row',
        overflow:'hidden',
        marginTop:20
    },
    makePaymentCardPriceCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15,
        paddingTop:20,
        paddingBottom:20,
        justifyContent:'center'
    },
    makePaymentCardTitleCont : {
        marginTop:5
    },
    makePaymentCardTitleTxt : {
        fontWeight:'400',
        fontFamily:GILROY.semi_bold,
        fontSize:13,
        color:colors.lightTxt
    },
    makePaymentCardPriceTxt : {
        fontWeight:'600',
        fontFamily:GILROY.semi_bold,
        fontSize:26,
        color:colors.black
    },
    makePaymentCardCurrentTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"600",
        fontSize:14,
        includeFontPadding:false,
        marginBottom:5
    },
    makePaymentCardBtnCont : {
        backgroundColor:colors.commonBtn,
        paddingStart:20,
        paddingEnd:20,
        justifyContent:'center',
        alignItems:'center'
    },
    makePaymentCardPayBtnCont : {
        backgroundColor:colors.commonBtn,
        paddingStart:30,
        paddingEnd:30,
        justifyContent:'center',
        alignItems:'center'
    },
    makePaymentCardPayBtnTxt : {
        fontFamily:GILROY.medium,
        fontSize:16,
        color:colors.white
    },
    makePaymentCardBottomCont : {
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        marginStart:15,marginEnd:15
    },
    makePaymentCardCircleCont : {
        flex:1,
        alignItems:'center',
        flexDirection:'row'
    },
    makePaymentCardCircle : {
        height:15,
        width:15,
        borderRadius:80,
    },
    makePaymentCardCircleTxtCont : {
        marginStart:10
    },
    makePaymentCardCircleTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:'600',
        fontSize:14
    },
    makePaymentCardViewDetailTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:'600',
        fontSize:14
    }
})
