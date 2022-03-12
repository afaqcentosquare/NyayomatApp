import React from 'react' ;
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from './AppText';
import {GILROY} from '../../config';
import colors from '../../config/colors';
// @ts-ignore
import ArrowRightIcon from '../../assets/images/arrow_right_icon.svg';
import {PriceTxt} from './PriceTxt';

type Props = {
    dayTxt : string,
    paymentTxt : string,
    color? : string,
    titleTxt : string,
    titleTxt2 : string,
    onPress? : () => void
}

export const MyAssetsCard = React.memo<Props>((props) =>
{
    return(
        <View>
            <View>
                <View style={styles.myAssetCardMainCont}>
                    <View style={styles.myAssetCardNameCont}>
                        <View>
                            <AppText
                                style={styles.myAssetCardTitleTxt}
                                text={props.titleTxt}/>
                        </View>
                        <View style={{marginTop:5}}>
                            <PriceTxt
                                priceTxt={props.paymentTxt}
                                currencyVisible={true}
                                priceStyle={styles.myAssetCardPriceTxt}
                                currencyStyle={styles.myAssetCardCurrencyTxt}/>
                        </View>
                        <View style={{marginTop:5}}>
                            <AppText
                                text={props.titleTxt2}
                                style={styles.myAssetBottomTxt2}/>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={props.onPress}
                        activeOpacity={0.6}
                        style={styles.myAssetCartBtnCont}>
                        <ArrowRightIcon/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.myAssetCardBottomCont}>
                <View style={styles.myAssetCircleCont}>
                    <View style={[styles.myAssetCircle,{backgroundColor:props.color}]}/>
                    <View style={styles.myAssetCircleTxtCont}>
                        <AppText
                            text={props.dayTxt}
                            style={styles.myAssetCircleTxt}/>
                    </View>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    myAssetCardMainCont : {
        borderRadius:15,
        backgroundColor:colors.white,
        flexDirection:'row',
        overflow:'hidden',
        marginTop:20
    },
    myAssetCardNameCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15,
        paddingTop:20,
        paddingBottom:20,
        justifyContent:'center'
    },
    myAssetCardTitleTxt : {
        fontWeight:'400',
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        color:colors.lightTxt
    },
    myAssetCardPriceTxt : {
        fontWeight:'600',
        fontFamily:GILROY.semi_bold,
        fontSize:26,
        color:colors.black
    },
    myAssetCardCurrencyTxt : {
        fontWeight:'600',
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        color:colors.black,
        marginBottom:5
    },
    myAssetCartBtnCont : {
        backgroundColor:colors.commonBtn,
        paddingStart:20,
        paddingEnd:20,
        justifyContent:'center'
    },
    myAssetCardBottomCont : {
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        marginStart:15,
        marginEnd:15
    },
    myAssetCircleCont : {
        flex:1,
        alignItems:'center',
        flexDirection:'row'
    },
    myAssetCircle : {
        height:15,
        width:15,
        borderRadius:80,
    },
    myAssetCircleTxtCont : {
        marginStart:10
    },
    myAssetCircleTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:'600',
        fontSize:14
    },
    myAssetBottomTxt2 : {
        fontFamily:GILROY.medium,
        fontSize:14,
        color:colors.lightTxt
    }
})


