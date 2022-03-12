import React from 'react';
import {Image, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
import {MakeAppCard} from '../../components/MakeAppCard';
import {ViewLine} from '../../components/ViewLine';
import {assetInfo} from '../../../models/api_response/CompleteAssetDetailResModel';
import Api from '../../../config/Api';

type Props = {
    completeAssetDetailObj : assetInfo
}

export const CompleteAssetDetailListHead = React.memo<Props>((props) =>
{
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

    const changeDurationTxt = () =>
    {
        if(props.completeAssetDetailObj.payment_frequency === 'Daily')
        {
            return "Days";
        }
        else if(props.completeAssetDetailObj.payment_frequency === 'Weekly')
        {
            return "Weeks"
        }
        else
        {
            return "Months";
        }
    }

    const calInstallAmount = (units:number) =>
    {
        return  numberFormat(units * (props.completeAssetDetailObj.unit_cost - props.completeAssetDetailObj.deposit_amount) / props.completeAssetDetailObj.installment) ;
    }

    return(
        <View>
            <View style={{borderRadius:80,paddingTop:20}}>
                <Image
                    style={{width:'100%',borderRadius:15,height:160,resizeMode:'cover'}}
                    source={{uri : Api.IMAGE_BASE_URL + props.completeAssetDetailObj.image}}/>
            </View>
            <View style={{marginTop:15,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1}}>
                    <AppText text={props.completeAssetDetailObj?.asset_name} style={{fontFamily:GILROY.semi_bold,fontSize:18,fontWeight:'600'}}/>
                </View>
                <View>
                    <AppText text={"Total Payments : " + props.completeAssetDetailObj?.total_payments.toString()} style={{fontFamily:GILROY.semi_bold,fontSize:16,fontWeight:'600'}}/>
                </View>
            </View>
            <View style={{paddingTop:20}}>
                <AppText style={{fontFamily:GILROY.semi_bold,fontSize:18,fontWeight:'400'}} text={"Details"}/>
            </View>
            <View style={{paddingTop:15}}>
                <View>
                    <MakeAppCard title={"Asset value"} price={numberFormat(props.completeAssetDetailObj?.units * props.completeAssetDetailObj?.unit_cost)} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:20,fontWeight:'600'}}/>
                </View>
                <View style={{marginTop:5}}>
                    <MakeAppCard title={"Installment Amount"} price={calInstallAmount(props.completeAssetDetailObj.units)} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:20,fontWeight:'600'}}/>
                </View>
            </View>
            <View style={{paddingTop:5}}>
                <View>
                    <MakeAppCard title={"Units"} price={props.completeAssetDetailObj.units.toString()} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:16,fontWeight:'400'}}/>
                </View>
                <View style={{paddingTop:5}}>
                    <MakeAppCard title={"Payment Interval"} price={props.completeAssetDetailObj.installment + " " + changeDurationTxt()} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:16,fontWeight:'400'}}/>
                </View>
            </View>
            <ViewLine style={{marginTop:20,height:2}}/>
            <View style={{marginTop:15}}>
                <View>
                    <AppText style={{fontFamily:GILROY.semi_bold,fontSize:18}} text={"Transactions"}/>
                </View>
            </View>
        </View>
    )
})