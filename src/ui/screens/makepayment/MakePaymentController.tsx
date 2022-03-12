import React, {FC, useEffect, useState} from 'react' ;
import {MakePaymentView} from './MakePaymentView';
import {makePaymentResObj} from '../../../models/api_response/MakePaymentResModel';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';

type Props = {}

type makePaymentNavProp = StackNavigationProp<AllScreenStackParamList>;

const MakePaymentController : FC<Props> = () =>
{
    const navigation = useNavigation<makePaymentNavProp>();
    const [makePaymentData,setMakePaymentData] = useState<makePaymentResObj>()

    const getMakePaymentData = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getMakePayment(user_id.toString(),user_token.toString())
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setMakePaymentData(response.data);
                    }
                    else
                    {
                        ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                    }
                })
        }
        catch (e)
        {
            console.log("MakePaymentException : " + e);
        }

    }

    const getPayData = async (pay : string) =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getPayData(user_id.toString(),user_token.toString(),pay)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        getMakePaymentData()
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
            console.log("MakePaymentException : " + e);
        }
    }

    useEffect(() =>
    {
        getMakePaymentData().then(r => r);
    },[])

    return(
        <MakePaymentView
            makePayment={makePaymentData}
            makePaymentBtn={(pay) => getPayData(pay)}/>
    )
}

export default MakePaymentController ;
