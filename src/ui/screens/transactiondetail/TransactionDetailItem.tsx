import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ChooseAssetsObj} from '../../../models/ChooseAssetsModel';
import colors from '../../../config/colors';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import TransItemIcon from '../../../assets/images/trans_icon_2.svg';
// @ts-ignore
import CalenderIcon from '../../../assets/images/calendar_icon.svg';
import {PriceTxt} from '../../components/PriceTxt';
import {transDetailInfoObj} from '../../../models/api_response/TransactionDetailResModel';
import {DiffColorTxt2} from '../../components/DiffColorTxt2';

type Props = {
    item : transDetailInfoObj,
    index : number,
    length : number
}

type transactionNavProp = StackNavigationProp<AllScreenStackParamList>;

export const TransactionDetailItem = React.memo<Props>((props) =>
{
    const navigation = useNavigation<transactionNavProp>();

    return(
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.transDetailItemMainCont,{marginTop: props.index === 0 ? 15 : 6,marginBottom: props.index === props.length - 1 ?  15 : 6}]}>
            <View style={styles.transDetailItemSubCont1}>
                <View style={styles.transDetailItemIconCont}>
                    <View>
                        <TransItemIcon/>
                    </View>
                    <View style={{marginStart:5}}>
                        <View style={styles.transDetailItemTxtCont}>
                            <View>
                                <AppText
                                    style={styles.transDetailItemIdTitleTxt}
                                    text={"ID : "}/>
                            </View>
                            <View>
                                <AppText
                                    style={styles.transDetailItemIdTxt}
                                    text={props.item.id.toString()}/>
                            </View>
                        </View>
                        <View style={styles.transDetailItemTxtCont}>
                            <View>
                                <AppText
                                    style={styles.transDetailItemIdTitleTxt}
                                    text={"TYPE : "}/>
                            </View>
                            <View>
                                <AppText
                                    style={styles.transDetailItemIdTxt}
                                    text={props.item.type}/>
                            </View>
                        </View>
                        <View style={{marginStart:10,marginTop:2}}>
                            <DiffColorTxt2
                                lightTxt={"AMT : "}
                                darkTxt={props.item.amount?.toString() + " KSH"}/>
                        </View>
                        <View style={{flexDirection:'row',marginStart:10,marginTop:2}}>
                            <View>
                                <CalenderIcon/>
                            </View>
                            <View style={{marginStart:10,marginTop:2}}>
                                <AppText
                                    style={styles.transDetailItemDateTxt}
                                    text={props.item.paid_on}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    transDetailItemMainCont : {
        backgroundColor:colors.white,
        marginTop:6,
        marginBottom:6,
        borderRadius:16,
        padding:15
    },
    transDetailItemSubCont1 : {
        flexDirection:'row',
        justifyContent:'center'
    },
    transDetailSubItemCont2 : {
        marginTop:5,
        flexDirection:'row',
        alignItems:'center'
    },
    transDetailItemIconCont : {
        flex:1,
        flexDirection:'row'
    },
    transDetailItemTxtCont : {
        marginStart:10,
        flexDirection:'row',
    },
    transDetailItemIdTitleTxt : {
        fontFamily:GILROY.medium,
        color:colors.lightTxt,
        fontSize:14
    },
    transDetailItemIdTxt : {
        fontFamily:GILROY.semi_bold,
        fontWeight:'600',
        fontSize:16
    },
    transDetailItemDateTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:14
    },
    transDetailItemTimeTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        color:colors.lightTxt
    },
    transDetailItemPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18
    },
    transDetailItemCurrencyTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:12,
        marginBottom:3
    }
})
