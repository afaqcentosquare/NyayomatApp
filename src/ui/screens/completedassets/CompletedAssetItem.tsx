import React from 'react';
import colors from '../../../config/colors';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import {ChooseAssetsObj} from '../../../models/ChooseAssetsModel';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {completeAssetObj} from '../../../models/api_response/CompleteAssetResModel';
import Strings from '../../../config/strings';
import {DiffColorTxt} from '../../components/DiffColorTxt';
import {DiffColorTxt2} from '../../components/DiffColorTxt2';
import {PriceTxt} from '../../components/PriceTxt';
import Api from '../../../config/Api';

type Props = {
    index : number,
    length : number,
    item : completeAssetObj
}

type completeAssetNavProp = StackNavigationProp<AllScreenStackParamList> ;

export const CompletedAssetItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<completeAssetNavProp>();
    const completeAssetItemString = Strings.completeAsset;
    const completeAssetItem = props.item ;


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
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('completeAssetDetail',{item : props.item})}
            style={[styles.completeAssetItemMainCont,{marginTop: props.index === 0 ? 15 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View>
                <Image
                    style={styles.completeAssetItemImg}
                    source={{uri : Api.IMAGE_BASE_URL +  props.item.image}}/>
            </View>
            <View style={styles.completeAssetNameMainCont}>
                <View style={styles.completeAssetNameSubCont}>
                    <View style={{flex:1}}>
                        <AppText
                            style={styles.completeAssetNameTxt}
                            text={completeAssetItem.asset_name}/>
                    </View>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt2
                        lightTxt={"COST : "}
                        darkTxt={numberFormat(completeAssetItem?.amount === null ? 0 : completeAssetItem?.amount) + " KSH"}/>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt2
                        lightTxt={completeAssetItemString.completeAssetPaymentInterval + " : "}
                        darkTxt={completeAssetItem.payment_frequency}/>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt2
                        lightTxt={completeAssetItemString.completeAssetTotalPayment2 + " : "}
                        darkTxt={completeAssetItem.total_payments.toString()}/>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    completeAssetItemMainCont : {
        backgroundColor:colors.white,
        borderRadius:12,
        padding:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    completeAssetItemImg : {
        width:75,
        height:75,
        borderRadius:8
    },
    completeAssetNameMainCont : {
        justifyContent:'center',
        flex:1,
        paddingStart:10,
        paddingEnd:5
    },
    completeAssetNameSubCont : {
        flexDirection:"row",
        alignItems:'center'
    },
    completeAssetNameTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    completeAssetPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    completeAssetPaymentIntervalTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:"#AFB2B6",
        marginTop:3
    },
    completeAssetPaymentLeftTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:"#AFB2B6",
        marginTop:3
    }
})
