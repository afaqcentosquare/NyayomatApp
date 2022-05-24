import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { AppText } from '../../components/AppText';
import colors from '../../../config/colors';
// @ts-ignore
import TransItemIcon from '../../../assets/images/trans_icon_1.svg';
import {GILROY} from '../../../config';
// @ts-ignore
import CalenderIcon from '../../../assets/images/calendar_icon.svg';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {assetInfoObj} from '../../../models/api_response/TransactionResModel';
import {DiffColorTxt2} from '../../components/DiffColorTxt2';
import Api from '../../../config/Api';
import NumberFormat from '../../../utils/NumberFormat';

type Props = {
    index : number,
    length : number,
    item : assetInfoObj
}

type transactionNavProp = StackNavigationProp<AllScreenStackParamList>;

export const TransactionItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<transactionNavProp>()

    return(
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('transactionDetail',{item : props.item})}
            style={[styles.transItemMainCont,{marginTop: props.index === 0 ? 15 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View>
                <Image
                    style={styles.transItemImg}
                    source={{uri: Api.IMAGE_BASE_URL +  props.item.image}}
                    /*source={require('../../../assets/images/peas_img.jpg')}*//>
            </View>
            <View style={styles.trnasItemNameCont}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <AppText
                            style={styles.transItemNameTxt}
                            text={props.item.asset_name}/>
                    </View>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt2
                        lightTxt={"AMT : "}
                        darkTxt={NumberFormat.numberFormat(props.item.amount) + " KSH"}/>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt2
                        lightTxt={"ASSET ID : "}
                        darkTxt={props.item.asset_id.toString()}/>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    transItemMainCont : {
        backgroundColor:colors.white,
        borderRadius:12,
        padding:10,
        marginTop:6,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:6,
        flexDirection:'row',
        overflow:'hidden'
    },
    transItemImg : {
        width:70,
        height:70,
        borderRadius:8
    },
    trnasItemNameCont : {
        justifyContent:'center',
        flex:1,
        paddingStart:10,
        paddingEnd:10
    },
    transItemNameTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    transItemPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:15
    },
    trnasItemIdTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:14,
        color:"#AFB2B6",
        marginTop:3
    }
})
