import React from 'react';
import colors from '../../../config/colors';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {defaultAssetResObj} from '../../../models/api_response/DefaultAssetResModel';
import {DiffColorTxt2} from '../../components/DiffColorTxt2';
import Strings from '../../../config/strings';
import {PriceTxt} from '../../components/PriceTxt';
import Api from '../../../config/Api';

type Props = {
    index : number,
    length : number,
    item : defaultAssetResObj
}

type defaultAssetNavProp = StackNavigationProp<AllScreenStackParamList> ;

export const DefaultAssetItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<defaultAssetNavProp>();
    const defaultAssetItem = props.item ;
    const defaultAssetString = Strings.defaultAsset;

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
            /*onPress={() => navigation.navigate('defaultAssetDetail')}*/
            style={[styles.defaultAssetItemMainCont,{marginTop: props.index === 0 ? 15 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View>
                <Image
                    style={styles.defaultAssetItemImg}
                    source={{uri : Api.IMAGE_BASE_URL + props.item.image}}/>
            </View>
            <View style={styles.defaultAssetNameMainCont}>
                <View style={styles.defaultAssetNameSubCont}>
                    <View style={{flex:1}}>
                        <AppText
                            style={styles.defaultAssetNameTxt}
                            text={defaultAssetItem.asset_name}/>
                    </View>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt2
                        lightTxt={"Defaulted : "}
                        darkTxt={numberFormat(defaultAssetItem?.amount === undefined ? 0 : defaultAssetItem?.amount) + " KSH"}/>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt2
                        lightTxt={defaultAssetString.defaultAssetPaymentInterval + " : "}
                        darkTxt={defaultAssetItem.payment_frequency}/>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt2
                        lightTxt={defaultAssetString.defaultAssetPaymentLeft + " : "}
                        darkTxt={defaultAssetItem.payments_left.toString()}/>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    defaultAssetItemMainCont  : {
        backgroundColor:colors.white,
        borderRadius:12,
        padding:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    defaultAssetItemImg : {
        width:70,
        height:70,
        borderRadius:8
    },
    defaultAssetNameMainCont : {
        justifyContent:'center',
        flex:1,
        paddingStart:10,
        paddingEnd:5
    },
    defaultAssetNameSubCont : {
        flexDirection:"row",
        alignItems:'center'
    },
    defaultAssetNameTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    defaultAssetPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    defaultAssetPaymentIntervalTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.lightTxt,
    },
    defaultAssetPaymentLeft : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.lightTxt,
    }
})
