import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {CompletedAssetItem} from './CompletedAssetItem';
import Strings from '../../../config/strings';
import {CompleteAssetListHeader} from './CompleteAssetListHeader';
import {completeAssetObj} from '../../../models/api_response/CompleteAssetResModel';
import {completeInfoObj} from '../../../models/api_response/MyAssetsResModel';
import {ProgressBar} from '../../components/ProgressBar';
import {NoDataTxt} from '../../components/NoDataTxt';
import {AppText} from '../../components/AppText';
import {PriceTxt} from '../../components/PriceTxt';
import {ViewLine} from '../../components/ViewLine';
import {GILROY} from '../../../config';

type Props = {
    completeAssetListData : completeAssetObj[],
    completeAssetData : completeInfoObj,
    noDataVisible : boolean,
    progressVisible : boolean
}

export const CompletedAssetView = React.memo<Props>((props) =>
{
    const completeListHeadData = props.completeAssetData ;
    const completeListHeadString = Strings.completeAsset ;

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
            return "0.00"
        }

    }


    return(
        <SafeAreaView
            style={styles.completeAssetMainCont}>
            <BackBtnHeader
                backBtnVisible={true}
                title={Strings.completeAsset.completeAssetHeaderTxt}/>
            <View style={styles.completeAssetSubCont}>
                <View>
                    <View style={styles.completeAssetCardMainCont}>
                        <View>
                            <AppText
                                style={styles.completeAssetCardTitleTxt}
                                text={completeListHeadString.completeAssetCardTitleTxt}/>
                        </View>
                        <View style={styles.completeAssetPriceCont}>
                            <PriceTxt
                                priceTxt={numberFormat(completeListHeadData?.amount === null ? 0 : completeListHeadData?.amount)}
                                currencyVisible={true}
                                priceStyle={styles.completeAssetPriceTxt}
                                currencyStyle={styles.completeAssetCurrencyPriceTxt}/>
                        </View>
                    </View>
                    <View style={styles.completeAssetPaymentMainCont}>
                        <View style={styles.completeAssetPaymentSubCont}>
                            <AppText
                                style={styles.completeAssetPaymentTxt}
                                text={"Total Payments : " + completeListHeadData.total_payments}/>
                        </View>
                    </View>
                    <ViewLine style={styles.completeAssetViewLine}/>
                    <View style={styles.completeAssetTitleCont}>
                        <View>
                            <AppText
                                style={styles.completeAssetTitleTxt}
                                text={"My Assets"}/>
                        </View>
                    </View>
                </View>
                {props.completeAssetListData.length > 0 ?<FlatList
                    data={props.completeAssetListData}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    /*ListHeaderComponent={() => <CompleteAssetListHeader completeAssetData={props.completeAssetData}/>}*/
                    renderItem={({item, index}) => <CompletedAssetItem length={props.completeAssetListData.length} index={index} item={item}/>}
                    keyExtractor={(item, index) => index.toString()}/> : null}
                {props.progressVisible ? <ProgressBar/> : null}
                {props.noDataVisible ? <NoDataTxt/> : null}
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    completeAssetMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    completeAssetSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor,
        paddingStart:15,
        paddingEnd:15
    },
    completeAssetCardMainCont : {
        backgroundColor:colors.completeAsset,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:25,
        paddingBottom:25,
        marginTop:20
    },
    completeAssetCardTitleTxt : {
        fontFamily:GILROY.medium,
        fontSize:16,
        color:colors.white
    },
    completeAssetPriceCont : {
        marginTop:3,
        flexDirection:'row',
    },
    completeAssetPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:28,
        fontWeight:'600',
        color:colors.white
    },
    completeAssetCurrencyPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        fontWeight:'600',
        color:colors.white,
        marginBottom:5
    },
    completeAssetPaymentMainCont : {
        flexDirection:'row',
        marginTop:15
    },
    completeAssetPaymentSubCont : {
        flex:1,
        flexDirection:'row-reverse'
    },
    completeAssetPaymentTxt : {
        fontFamily:GILROY.medium,
        fontSize:14,
        color:colors.lightTxt
    },
    completeAssetViewLine : {
        marginTop:15,
        height:2
    },
    completeAssetTitleCont : {
        flexDirection:'row',
        marginTop:15,
    },
    completeAssetTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18
    }
})
