import React from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import {ViewLine} from '../../components/ViewLine';
import {OnGoingAssetsItem} from '../ongoingassets/OnGoingAssetsItem';
import {ChooseAssetsObj} from '../../../models/ChooseAssetsModel';
import {DefaultAssetItem} from './DefaultAssetItem';
import {StatusBars} from '../../components/StatusBars';
import Strings from '../../../config/strings';
import {OnGoingAssetListHeader} from '../ongoingassets/OnGoingAssetListHeader';
import {DefaultAssetListHeader} from './DefaultAssetListHeader';
import {defaultInfoObj} from '../../../models/api_response/MyAssetsResModel';
import {defaultAssetResObj} from '../../../models/api_response/DefaultAssetResModel';
import {ProgressBar} from '../../components/ProgressBar';
import {NoDataTxt} from '../../components/NoDataTxt';
import {PriceTxt} from '../../components/PriceTxt';

type Props = {
    defaultAssetListData : defaultAssetResObj[],
    defaultAssetData : defaultInfoObj,
    noDataVisible : boolean,
    progressVisible : boolean
}

export const DefaultAssetsView = React.memo<Props>((props) =>
{
    const defaultAssetHeadString = Strings.defaultAsset;

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
        <SafeAreaView
            style={styles.defaultAssetMainCont}>
            <BackBtnHeader
                backBtnVisible={true}
                title={Strings.defaultAsset.defaultAssetHeaderTxt}/>
            <View style={styles.defaultAssetSubCont}>
                <View>
                    <View>
                        <View style={styles.defaultAssetHeadCont}>
                            <View>
                                <AppText
                                    style={styles.defaultAssetHeadTitleTxt}
                                    text={defaultAssetHeadString.defaultAssetCardTitle}/>
                            </View>
                            <View style={styles.defaultAssetHeadPriceTxtCont}>
                                <PriceTxt
                                    priceTxt={numberFormat(props.defaultAssetData?.amount)}
                                    currencyVisible={true}
                                    priceStyle={styles.defaultAssetHeadPriceTxt}
                                    currencyStyle={styles.defaultAssetHeadCurrencyTxt}/>
                            </View>
                        </View>
                        <View style={styles.defaultAssetHeadMainCont}>
                            <View style={styles.defaultAssetHeadPaymentCont}>
                                <AppText
                                    style={styles.defaultAssetHeadPaymentTxt}
                                    text={defaultAssetHeadString.defaultAssetMissedPayment + " : " + props.defaultAssetData?.missed_payments}/>
                            </View>
                        </View>
                        <ViewLine style={styles.defaultAssetHeadViewLine}/>
                        <View style={styles.defaultAssetHeadTitleCont}>
                            <View>
                                <AppText
                                    style={styles.defaultAssetHeadAssetTitleTxt}
                                    text={"My Assets"}/>
                            </View>
                        </View>
                    </View>
                </View>
                {props.defaultAssetListData.length > 0 ? <FlatList
                    data={props.defaultAssetListData}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    /*ListHeaderComponent={() => <DefaultAssetListHeader defaultInfoData={props.defaultAssetData}/>}*/
                    renderItem={({item, index}) => <DefaultAssetItem index={index} length={props.defaultAssetListData.length} item={item}/>}
                    keyExtractor={(item, index) => index.toString()}/> : null}
                {props.progressVisible ? <ProgressBar/> : null}
                {props.noDataVisible ? <NoDataTxt/> : null}
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    defaultAssetMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    defaultAssetSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor,
        paddingStart:15,
        paddingEnd:15
    },
    defaultAssetHeadCont : {
        backgroundColor:colors.defaulted,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:25,
        paddingBottom:25,
        marginTop:20
    },
    defaultAssetHeadTitleTxt : {
        fontFamily:GILROY.medium,
        fontSize:16,
        color:colors.white
    },
    defaultAssetHeadPriceTxtCont : {
        marginTop:3,
        flexDirection:'row'
    },
    defaultAssetHeadPriceTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:28,
        fontWeight:'600',
        color:colors.white
    },
    defaultAssetHeadMainCont : {
        flexDirection:'row',
        marginTop:15
    },
    defaultAssetHeadPaymentCont : {
        flex:1,
        flexDirection:'row-reverse'
    },
    defaultAssetHeadPaymentTxt : {
        fontFamily:GILROY.medium,
        fontSize:14,
        color:colors.lightTxt
    },
    defaultAssetHeadViewLine : {
        marginTop:15,
        height:2
    },
    defaultAssetHeadTitleCont : {
        flexDirection:'row',
        marginTop:15,
    },
    defaultAssetHeadAssetTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18
    },
    defaultAssetHeadCurrencyTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:14,
        fontWeight:'600',
        color:colors.white
    }
})
