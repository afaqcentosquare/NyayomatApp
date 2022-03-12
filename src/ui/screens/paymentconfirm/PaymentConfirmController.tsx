import React, {FC, useEffect, useState} from 'react';
import {PaymentConfirmView} from './PaymentConfirmView';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useRoute} from '@react-navigation/native';
import {paymentConfirmResObj} from '../../../models/api_response/PaymentConfirmResModel';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}
type paymentConfirmNavProp = StackNavigationProp<AllScreenStackParamList>;

const PaymentConfirmController : FC<Props> = () =>
{
    // @ts-ignore
    const route = useRoute<paymentConfirmNavProp['item']>();
    const paymentConfirmAppData = route.params.item as string ;
    const [paymentConfirm,setPaymentConfirm] = useState<Array<paymentConfirmResObj>>([]);
    const [paymentConfirmNoDataTxt,setPaymentConfirmNoDataTxt] = useState(false);
    const [paymentConfirmProgress,setPaymentConfirmVisible] = useState(true);

    const getPaymentConfirmData = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getPaymentConfirmation(user_id.toString(),user_token.toString(),paymentConfirmAppData.toString())
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setPaymentConfirmVisible(false);
                        setPaymentConfirmNoDataTxt(false);
                        setPaymentConfirm(response.data.data);
                    }
                    else if(response.status === 204)
                    {
                        setPaymentConfirmVisible(false);
                        setPaymentConfirmNoDataTxt(true);
                    }
                    else
                    {
                        setPaymentConfirmVisible(false);
                        setPaymentConfirmNoDataTxt(true);
                        ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                    }
                })
        }
        catch (e)
        {
            console.log("PaymentConfirmException : " + e);
        }

    }

    const updatePaymentConfirmList = () =>
    {
        setPaymentConfirm([])
        getPaymentConfirmData().then(r => r);
    }

    useEffect(() =>
    {
        getPaymentConfirmData().then(r => r);
    },[])

    return(
        <PaymentConfirmView
            paymentConfirmProgress={paymentConfirmProgress}
            paymentConfirmNoDataTxt={paymentConfirmNoDataTxt}
            paymentConfirmListData={paymentConfirm}
            updatePayConfirmList={() => updatePaymentConfirmList()}/>
    )
}

export default PaymentConfirmController ;
