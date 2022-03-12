import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {OnGoingAssetsItem} from './OnGoingAssetsItem';
import Strings from '../../../config/strings';
import {OnGoingAssetListHeader} from './OnGoingAssetListHeader';
import {myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import {onGoingAssetObj} from '../../../models/api_response/OngoingAssetResModel';
import {ProgressBar} from '../../components/ProgressBar';
import {NoDataTxt} from '../../components/NoDataTxt';
import {AppText} from '../../components/AppText';
import {PriceTxt} from '../../components/PriceTxt';
import {ViewLine} from '../../components/ViewLine';
import {GILROY} from '../../../config';

type Props = {
    onGoingAssetListData : onGoingAssetObj[],
    onGoingAssetData : myAssetObj,
    noDataVisible : boolean,
    progressVisible : boolean
}

export const OngoingAssetsView = React.memo<Props>((props) =>
{
    const onGoingListHeadData = props.onGoingAssetData ;
    const onGoingListHeadString = Strings.onGoingAsset ;

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
        <SafeAreaView style={styles.onGoingAssetMainCont}>
            <BackBtnHeader
                backBtnVisible={true}
                title={Strings.onGoingAsset.onGoingAssetHeaderTxt}/>
            <View style={styles.onGoingAssetSubCont}>
                <View>
                    <View style={styles.onGoingListHeadCont}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <AppText
                                style={styles.onGoingListHeadTxt}
                                text={onGoingListHeadString.onGoingAssetCardTxt}/>
                        </View>
                        <View style={styles.onGoingListHeadPriceTxtCont}>
                            <PriceTxt
                                priceTxt={numberFormat(onGoingListHeadData?.amount === null ? 0 : onGoingListHeadData?.amount)}
                                currencyVisible={true}
                                priceStyle={styles.onGoingListHeadPriceTxt}
                                currencyStyle={styles.onGoingListHeadCurrencyTxt}/>
                        </View>
                        <View style={{marginTop:5,flexDirection:'row',marginEnd:15,marginStart:15,justifyContent:'flex-end'}}>
                            <AppText
                                style={styles.onGoingListHeadPaymentTxt}
                                text={onGoingListHeadData?.payments_left === null ? onGoingListHeadString.onGoingAssetPaymentLeft + " : " + "0" : onGoingListHeadString.onGoingAssetPaymentLeft + " : " + onGoingListHeadData?.payments_left}/>
                        </View>
                    </View>
                    <View style={styles.onGoingListHeadPaymentCont}>
                        <View style={{flex:1}}>
                            <AppText
                                style={styles.onGoingListHeadNextPaymentTxt}
                                text={onGoingListHeadData?.next_payment === null ? onGoingListHeadString.onGoingAssetNextPaymentTxt + ' : ' + "----" : onGoingListHeadString.onGoingAssetNextPaymentTxt + ' : ' + onGoingListHeadData?.next_payment}/>
                        </View>
                    </View>
                    <ViewLine style={styles.onGoingListHeadViewLine}/>
                    <View style={styles.onGoingListHeadTitleTxt}>
                        <View>
                            <AppText
                                style={styles.onGoingListHeadMyAssetTxt}
                                text={onGoingListHeadString.onGoingMyAsset}/>
                        </View>
                    </View>
                </View>
                {props.onGoingAssetListData.length > 0 ?
                    <FlatList
                        data={props.onGoingAssetListData}
                        /*ListHeaderComponent={() => <OnGoingAssetListHeader onGoingAssetData={props.onGoingAssetData}/>}*/
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) => <OnGoingAssetsItem index={index} length={props.onGoingAssetListData.length} item={item}/>}
                        keyExtractor={(item, index) => index.toString()}/> : null}
                {props.progressVisible ? <ProgressBar/> : null}
                {props.noDataVisible ? <NoDataTxt/> : null}
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    onGoingAssetMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    onGoingAssetSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor,
        paddingStart:15,
        paddingEnd:15
    },
    onGoingListHeadCont : {
        backgroundColor:colors.dueToday,
        borderRadius:16,
        paddingTop:30,
        paddingBottom:10,
        marginTop:20,
    },
    onGoingListHeadTxt : {
        fontFamily:GILROY.medium,
        fontSize:16,
        color:colors.white,
    },
    onGoingListHeadPriceTxtCont : {
        marginTop:3,
        marginStart:15,
        marginEnd:15,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    onGoingListHeadCurrencyTxt : {
        fontWeight:'600',
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        color:colors.white,
        marginBottom:5
    },
    onGoingListHeadPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:28,
        fontWeight:'600',
        color:colors.white
    },
    onGoingListHeadPaymentCont : {
        flexDirection:'row',
        marginTop:15
    },
    onGoingListHeadNextPaymentTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:14
    },
    onGoingListHeadPaymentTxt : {
        fontFamily:GILROY.medium,
        fontSize:14,
        color:colors.white
    },
    onGoingListHeadViewLine : {
        marginTop:15,
        height:2
    },
    onGoingListHeadTitleTxt : {
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    onGoingListHeadMyAssetTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18
    }
})
