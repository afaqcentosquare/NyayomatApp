import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { AppText } from '../../components/AppText';
import colors from '../../../config/colors';
import {GILROY} from '../../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import Strings from '../../../config/strings';
import {browseResObj} from '../../../models/api_response/CatalogResModel';
import {DiffColorTxt} from '../../components/DiffColorTxt';
import Api from '../../../config/Api';
import NumberFormat from '../../../utils/NumberFormat';
import ChangeDuration from '../../../utils/ChangeDuration';

type Props = {
    item : browseResObj,
    index? : number,
    length : number
}

type ChooseAssetNavProp = StackNavigationProp<AllScreenStackParamList>;

export const BrowseItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<ChooseAssetNavProp>();
    const browseItemData = props.item ;
    const browseItemString = Strings.catalogue ;

    return(
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('MakeApp',{item : browseItemData})}
            style={[styles.browseItemMainCont,{marginTop: props.index === 0 ? 5 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View>
                <Image
                    style={styles.browseItemImg}
                    source={{uri : Api.IMAGE_BASE_URL + props.item.image}}/>
            </View>
            <View style={styles.browseNameItemCont}>
                <View style={styles.browseNameSubItemCont}>
                    <View style={{flex:1}}>
                        <AppText
                            style={styles.browseNameTxt}
                            text={browseItemData.asset_name}/>
                    </View>
                </View>
                <View style={styles.browseTxtGap}>
                    <DiffColorTxt
                        title={browseItemString.catalogueCostTxt + " :"}
                        dayNum={NumberFormat.numberFormat(browseItemData.unit_cost)}
                        dayTxt={"KSH"}/>
                </View>
                <View style={styles.browseTxtGap}>
                    <DiffColorTxt
                        title={browseItemString.catalogueDurationTxt + " :"}
                        dayNum={browseItemData.installment}
                        dayTxt={ChangeDuration.changeDuration(browseItemData.payment_frequency)}/>
                </View>
                <View style={styles.browseTxtGap}>
                    <DiffColorTxt
                        title={browseItemString.catalogueHolidayTxt + " :"}
                        dayNum={browseItemData.holiday_provision}
                        dayTxt={"days"}/>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    browseItemMainCont : {
        backgroundColor:colors.white,
        borderRadius:12,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        overflow:'hidden'
    },
    browseTxtGap : {
        marginTop:3
    },
    browseItemImg : {
        width:75,
        height:75,
        borderRadius:8
    },
    browseNameItemCont : {
        flex:3,
        paddingStart:10,
        paddingEnd:10
    },
    browseNameSubItemCont : {
        flexDirection:"row",
    },
    browseNameTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16,
    },
    browseNameCurrencyTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:12,
        marginBottom:1
    },
    browseDurationItemLight : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.textLight,
    },
    browseDurationItemDark : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.black,
    }
})
