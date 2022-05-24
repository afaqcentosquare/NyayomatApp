import React from 'react';
import colors from '../../../config/colors';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {onGoingAssetObj} from '../../../models/api_response/OngoingAssetResModel';
import {PriceTxt} from '../../components/PriceTxt';
import Strings from '../../../config/strings';
import {DiffColorTxt} from '../../components/DiffColorTxt';
import {DiffColorTxt2} from '../../components/DiffColorTxt2';
import Api from '../../../config/Api';
import NumberFormat from '../../../utils/NumberFormat';

type Props = {
    index : number,
    length : number,
    item : onGoingAssetObj,
}

type OngoingAssetNavProp = StackNavigationProp<AllScreenStackParamList> ;

export const OnGoingAssetsItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<OngoingAssetNavProp>();
    const onGoingItemData = props.item;
    const onGoingItemString = Strings.onGoingAsset;

    return(
        <TouchableOpacity
            activeOpacity={0.6}
            /*onPress={() => navigation.navigate('MakeApp',{item : props.item})}*/
            /*onPress={() => navigation.navigate('onGoingAssetDetail')}*/
            style={[styles.onGoingAssetItemMainCont,{marginTop: props.index === 0 ? 5 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View>
                <Image
                    style={styles.onGoingAssetItemImg}
                    source={{uri : Api.IMAGE_BASE_URL + props.item.image}}/>
            </View>
            <View style={styles.onGoingAssetNameMainCont}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <AppText
                            style={styles.onGoingAssetNameTxt}
                            text={onGoingItemData.asset_name}/>
                    </View>
                </View>
                <View style={styles.onGoingAssetItemMarginTop}>
                    <DiffColorTxt2
                        lightTxt={"Balance : "}
                        darkTxt={NumberFormat.numberFormat(onGoingItemData?.total_out_standing_amount === undefined ? 0 : onGoingItemData?.total_out_standing_amount) + " KSH"}/>
                </View>
                <View style={styles.onGoingAssetItemMarginTop}>
                    <DiffColorTxt2
                        lightTxt={onGoingItemString.onGoingAssetPaymentInterval + " : "}
                        darkTxt={onGoingItemData.payment_frequency}/>
                </View>
                <View style={styles.onGoingAssetItemMarginTop}>
                    <DiffColorTxt2
                        lightTxt={onGoingItemString.onGoingAssetPaymentLeft2 + " : "}
                        darkTxt={onGoingItemData.payments_left.toString()}/>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    onGoingAssetItemMainCont : {
        backgroundColor:colors.white,
        borderRadius:12,
        padding:10,
        marginTop:6,
        marginBottom:6,
        flexDirection:'row',
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
    },
    onGoingAssetItemImg : {
        width:70,
        height:70,
        borderRadius:8
    },
    onGoingAssetItemMarginTop : {
        marginTop : 3
    },
    onGoingAssetNameMainCont : {
        justifyContent:'center',
        flex:1,
        paddingStart:10,
        paddingEnd:5
    },
    onGoingAssetNameTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    onGoingAssetPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    onGoingAssetPaymentIntervalTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.lightTxt,
    },
    onGoingAssetPaymentLeft : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.lightTxt,
    }
})
