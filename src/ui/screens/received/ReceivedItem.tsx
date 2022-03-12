import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Api from '../../../config/Api';
import {AppText} from '../../components/AppText';
import {PriceTxt} from '../../components/PriceTxt';
import Strings from '../../../config/strings';
import colors from '../../../config/colors';
import {GILROY} from '../../../config';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {receivedResObj} from '../../../models/api_response/CatalogResModel';
import {DiffColorTxt} from '../../components/DiffColorTxt';

type Props = {
    item : receivedResObj,
    index? : number,
    length : number
}

type receiveAssetNavProp = StackNavigationProp<AllScreenStackParamList>;

export const ReceivedItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<receiveAssetNavProp>();
    const receiveItemData = props.item ;
    const receiveItemString = Strings.catalogue ;

    const changeDurationTxt = () =>
    {
        if(receiveItemData.payment_frequency === 'Daily')
        {
            return "Days";
        }
        else if(receiveItemData.payment_frequency === 'Weekly')
        {
            return "Weeks"
        }
        else
        {
            return "Months";
        }
    }

    return(
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.receiveItemMainCont,{marginTop: props.index === 0 ? 15 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View>
                <Image
                    style={styles.receiveItemImg}
                    source={{uri : Api.IMAGE_BASE_URL + props.item.image}}/>
            </View>
            <View style={styles.receiveNameItemCont}>
                <View style={styles.receiveNameSubItemCont}>
                    <View style={{flex:1}}>
                        <AppText
                            style={styles.receiveName}
                            text={receiveItemData.asset_name}/>
                    </View>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt
                        title={receiveItemString.catalogueUnisTxt + " : "}
                        dayNum={parseInt(receiveItemData.units.toString())}
                        dayTxt={""}/>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt
                        title={receiveItemString.catalogueDurationTxt + " :"}
                        dayNum={receiveItemData.installment}
                        dayTxt={changeDurationTxt()}/>
                </View>
                <View style={{marginTop:3}}>
                    <DiffColorTxt
                        title={receiveItemString.catalogueHolidayTxt + " :"}
                        dayNum={receiveItemData.holiday_provision}
                        dayTxt={"days"}/>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    receiveItemMainCont : {
        backgroundColor:colors.white,
        borderRadius:12,
        padding:10,
        flexDirection:'row',
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
    },
    receiveItemImg : {
        width:75,
        height:75,
        borderRadius:8
    },
    receiveNameItemCont : {
        justifyContent:'center',
        flex:1,
        paddingStart:10,
        paddingEnd:10
    },
    receiveNameSubItemCont : {
        flexDirection:"row",
        alignItems:'center',
    },
    receiveName : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    receiveDurationItemLight : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.textLight,
    },
    receiveDurationItemDark : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.black,
    }
})