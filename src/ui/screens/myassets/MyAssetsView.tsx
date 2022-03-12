import React from 'react';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {SafeAreaView, ScrollView,StyleSheet, View} from 'react-native';
import {MyAssetsCard} from '../../components/MyAssetsCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import Strings from '../../../config/strings';
import {completeInfoObj, defaultInfoObj, myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import {ProgressBar} from '../../components/ProgressBar';

type Props = {
    myAssetOutstandingData : myAssetObj | any,
    myAssetTotalDefaultData : defaultInfoObj | any,
    myAssetTotalPaidData : completeInfoObj | any
}

type MyAssetNavProp = StackNavigationProp<AllScreenStackParamList>

export const MyAssetsView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<MyAssetNavProp>();
    const outStandData = props.myAssetOutstandingData ;
    const defaultData = props.myAssetTotalDefaultData;
    const completeData = props.myAssetTotalPaidData;
    const myAssetString = Strings.myAssets ;

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
        <SafeAreaView style={styles.myAssetMainCont}>
            <BackBtnHeader
                backBtnVisible={true}
                title={myAssetString.myAssetHeaderTxt}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                {props.myAssetOutstandingData !== undefined ? <View style={styles.myAssetSubCont}>
                    <MyAssetsCard
                        onPress={() => navigation.navigate('onGoingAssets', {item: props.myAssetOutstandingData})}
                        titleTxt={myAssetString.myAssetOutStandingTxt}
                        titleTxt2={outStandData?.payments_left === undefined ? myAssetString.myAssetPaymentLeftTxt + ' : '  + 0 : myAssetString.myAssetPaymentLeftTxt + ' : ' + outStandData?.payments_left}
                        dayTxt={myAssetString.myAssetOngoingTxt}
                        paymentTxt={outStandData?.amount === undefined ? "0" : numberFormat(outStandData?.amount).toString()}
                        color={colors.dueToday}/>
                    <MyAssetsCard
                        onPress={() => navigation.navigate('defaultedAssets', {item: props.myAssetTotalDefaultData})}
                        titleTxt={myAssetString.myAssetTotalDefault}
                        titleTxt2={defaultData?.missed_payments === undefined ? myAssetString.myAssetMissedPaymentTxt + ' : ' + "0" : myAssetString.myAssetMissedPaymentTxt + ' : ' + defaultData?.missed_payments}
                        dayTxt={myAssetString.myAssetDefaultTxt}
                        paymentTxt={defaultData?.amount === undefined ? "0" : numberFormat(defaultData?.amount).toString()}
                        color={colors.defaulted}/>
                    <MyAssetsCard
                        onPress={() => navigation.navigate('completedAsset', {item: props.myAssetTotalPaidData})}
                        titleTxt={myAssetString.myAssetTotalPaid}
                        titleTxt2={completeData?.total_payments === undefined ? myAssetString.myAssetTotalPaymentTxt + ' : ' + "0" : myAssetString.myAssetTotalPaymentTxt + ' : ' + completeData?.total_payments.toString()}
                        dayTxt={myAssetString.myAssetCompleteTxt}
                        paymentTxt={completeData?.amount === undefined ? "0" : numberFormat(completeData?.amount).toString()}
                        color={colors.pending}/>
                </View> : null}
                {props.myAssetOutstandingData === undefined ? <ProgressBar/> : null}
            </ScrollView>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    myAssetMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    myAssetSubCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15,
        paddingBottom:15
    }
})
