import React, {FC, useEffect, useState} from 'react';
import {MakeAppView} from "./MakeAppView";
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useRoute} from '@react-navigation/native';
import {browseResObj} from '../../../models/api_response/CatalogResModel';
import {ToastAndroid} from 'react-native';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';
import MainApis from '../../../repo/main/MainApis';
import {useNavigation} from '@react-navigation/native';

type Props = {}

type MakeAppNavProp = StackNavigationProp<AllScreenStackParamList>;

const MakeAppController : FC<Props> = (props) =>
{
    const navigation = useNavigation<MakeAppNavProp>();
    // @ts-ignore
    const route = useRoute<MakeAppNavProp['item']>();
    const receiveMakeAppData = route.params.item as browseResObj ;
    const [installAmount,setInstallAmount] = useState(0);
    const [units,setUnits] = useState(0);
    const [totalCost,setTotalCost] = useState(0);
    const [depositAmount,setDepositAmount] = useState(0);

    const calInstallAmount = (units:number) =>
    {
        const calculateInstallAmount = units * (receiveMakeAppData.unit_cost - receiveMakeAppData.deposit_amount) / receiveMakeAppData.installment ;
        setInstallAmount(calculateInstallAmount);
    }

    const addUnits = () =>
    {
        if(units + 1 <= receiveMakeAppData.units)
        {
            setUnits(units + 1);
            totalToPay(units + 1);
            calInstallAmount(units + 1);
            calDepositAmount(units + 1);
        }
        else
        {
            ToastAndroid.show("only " + receiveMakeAppData.units +  " units available in stock" ,ToastAndroid.LONG);
        }
    }

    const subtractUnits = () =>
    {
        if(units - 1 >= 0 )
        {
            setUnits(units - 1);
            totalToPay(units - 1);
            calInstallAmount(units - 1);
            calDepositAmount(units - 1)
        }
        else
        {
            ToastAndroid.show("must be greater than 0" ,ToastAndroid.LONG);
        }

    }

    const calDepositAmount = (units : number) =>
    {
        const totalDepositAmount = units * receiveMakeAppData.deposit_amount ;
        setDepositAmount(totalDepositAmount);
    }

    const totalToPay = (units : number) =>
    {
        const total = receiveMakeAppData.unit_cost * units ;
        setTotalCost(total);
        console.log("Total" + total);
    }

    const applyOrder = () =>
    {
        if(units <= 0 )
        {
            ToastAndroid.show("At least request 1 asset" ,ToastAndroid.LONG);
        }
        else
        {
            applyOrderNow().then(r => r)
        }
    }

    const applyOrderNow = async () =>
    {
        try
        {
            const user_ids = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);
            const assetReq = {
                user_id : user_ids,
                asset_id : receiveMakeAppData.id,
                units : units

            }

            // @ts-ignore
            MainApis.postAssetData(assetReq,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        ToastAndroid.show(response.data.message,ToastAndroid.LONG);
                        navigation.goBack();
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
        <MakeAppView
            receiveData={receiveMakeAppData}
            installAmount={installAmount}
            units={units}
            addUnits={addUnits}
            subtractUnits={subtractUnits}
            totalToPay={totalCost}
            applyOrder={applyOrder}
            depositAmount={depositAmount}
            /*calTotalPrice={totalToPay}*//>
    )
}

export default MakeAppController;
