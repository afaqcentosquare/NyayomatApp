import React from 'react';
import {requestResObj} from '../../../models/api_response/CatalogResModel';
import {Image, StyleSheet, ToastAndroid, TouchableOpacity, View} from 'react-native';
import Api from '../../../config/Api';
import {AppText} from '../../components/AppText';
import {PriceTxt} from '../../components/PriceTxt';
import Strings from '../../../config/strings';
import colors from '../../../config/colors';
import {GILROY} from '../../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import { AppButton } from '../../components/AppButton';
import {DiffColorTxt} from '../../components/DiffColorTxt';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';
import MainApis from '../../../repo/main/MainApis';
import ChangeDuration from '../../../utils/ChangeDuration';

type Props = {
    item : requestResObj,
    index? : number,
    length : number,
    update : () => void
}

type reqAssetNavProp = StackNavigationProp<AllScreenStackParamList>;

export const RequestItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<reqAssetNavProp>();
    const reqItemData = props.item ;
    const reqItemString = Strings.catalogue;

    const getReqItemData = async (reqId : number,statusTxt : string) =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getOrderAssetStatus(reqId,user_id.toString(),statusTxt,user_token.toString())
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        props.update()
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
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.reqItemMainCont,{marginTop: props.index === 0 ? 15 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View style={styles.reqItemSubCont}>
                <View style={styles.reqItemNameMainCont}>
                    <View style={styles.reqItemImgCont}>
                        <Image
                            style={styles.reqItemImg}
                            source={{uri : Api.IMAGE_BASE_URL + props.item.image}}/>
                    </View>
                    <View style={styles.reqNameItemCont}>
                        <View style={styles.reqNameSubItemCont}>
                            <View style={{flex:1}}>
                                <AppText
                                    style={styles.reqName}
                                    text={reqItemData.asset_name}/>
                            </View>
                        </View>
                        <View style={styles.reqItemMarginTop}>
                            <DiffColorTxt
                                title={reqItemString.catalogueUnisTxt + " : "}
                                dayNum={parseInt(reqItemData.units.toString())}
                                dayTxt={""}/>
                        </View>
                        <View style={styles.reqItemMarginTop}>
                            <DiffColorTxt
                                title={reqItemString.catalogueDurationTxt + " :"}
                                dayNum={reqItemData.installment}
                                dayTxt={ChangeDuration.changeDuration(reqItemData.payment_frequency)}/>
                        </View>
                        <View style={styles.reqItemMarginTop}>
                            <DiffColorTxt
                                title={reqItemString.catalogueHolidayTxt + " :"}
                                dayNum={reqItemData.holiday_provision}
                                dayTxt={"days"}/>
                        </View>
                    </View>
                </View>
                <View style={styles.reqItemBtnCont}>
                    <View style={{flex:1}}>
                        <AppButton
                            onPress={() => getReqItemData(reqItemData.id,"cancel")}
                            btnContStyle={{height:30}}
                            btnTxtStyle={{fontSize:13}}
                            text={"Cancel"}/>
                    </View>
                    <View style={{flex:1,marginStart:10}}>
                        <AppButton
                            onPress={() => getReqItemData(reqItemData.id, 'delivered')}
                            btnContStyle={{height:30}}
                            btnTxtStyle={{fontSize:13}} text={"Received"}/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    reqItemMainCont : {
        backgroundColor:colors.white,
        borderRadius:12,
        padding:10,
        marginTop:15,
        marginBottom:10,
        flexDirection:'row',
        overflow:'hidden'
    },
    reqItemSubCont : {
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    reqItemNameMainCont : {
        flex:1,
        flexDirection:'row'
    },
    reqItemMarginTop : {
        marginTop:3
    },
    reqItemImgCont : {
        justifyContent:'center'
    },
    reqItemBtnCont : {
        flexDirection:'row',
        marginTop:10
    },
    reqItemImg : {
        width:75,
        height:75,
        borderRadius:8
    },
    reqNameItemCont : {
        justifyContent:'center',
        flex:1,
        paddingStart:10,
    },
    reqNameSubItemCont : {
        flexDirection:"row",
    },
    reqName : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:16
    },
    reqDurationItemLight : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.textLight,
    },
    reqDurationItemDark : {
        fontFamily:GILROY.semi_bold,
        fontWeight:"400",
        fontSize:13,
        color:colors.black,
    }
})
